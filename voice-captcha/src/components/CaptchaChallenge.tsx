import { useEffect, useState } from "react";

interface ChallengeProps {
    challengeText: string;
    volumeTarget: number;
    minFrequency: number;
    maxFrequency: number;
    words: string[] | null;
    onResult: (res: any) => void;
}

declare global {
    interface Window {
        webkitSpeechRecognition: any;
    }
}

const CaptchaChallenge = ({challengeText, volumeTarget, minFrequency, maxFrequency, words, onResult}: ChallengeProps) => {
    console.log(challengeText, volumeTarget, minFrequency, maxFrequency, words);
    const [, setAnalyser] = useState<AnalyserNode | null>(null);
    const [challengePassed, setChallengePassed] = useState(false);
    const [recognizedWord, setRecognizedWord] = useState("");
    const [, setIsListening] = useState(false);

    useEffect(() => {
        const initializeAudio = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const audioCtx = new AudioContext();
                const analyserNode = audioCtx.createAnalyser();
                analyserNode.fftSize = 512;

                const source = audioCtx.createMediaStreamSource(stream);
                source.connect(analyserNode);
                setAnalyser(analyserNode);

                const bufferLength = analyserNode.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                const detectYelling = () => {
                    analyserNode.getByteFrequencyData(dataArray);

                    // Calculate the average volume
                    const averageVolume = dataArray.reduce((sum, val) => sum + val, 0) / bufferLength;
                    // console.log("averageVolume: ", averageVolume);

                    // Find the dominant frequency
                    let maxIndex: number = 0;
                    for (let i = 0; i < bufferLength; i++) {
                        if (dataArray[i] > dataArray[maxIndex]) {
                            maxIndex = i;
                        }
                    }
                    const sampleRate = audioCtx.sampleRate;
                    const dominantFrequency = (maxIndex * sampleRate) / analyserNode.fftSize;

                    // Check if the challenge requires specific words
                    if (words === null) {
                        // Check the input volume and frequency
                        if (averageVolume > volumeTarget && dominantFrequency > minFrequency && dominantFrequency < maxFrequency) {
                            setChallengePassed(true);
                        }
                    } else {
                        // In addition to the other stuff also check that the user is saying the correct word
                        //console.log("averageVolume: ", averageVolume, "volumeTarget: ", volumeTarget, "dominantFrequency: ", dominantFrequency, "minFrequency: ", minFrequency, "maxFrequency: ", maxFrequency);
                        if (averageVolume > volumeTarget && dominantFrequency > minFrequency && dominantFrequency < maxFrequency) {
                            words.forEach(word => {
                                //console.log("recognized word: ", recognizedWord);
                                if (recognizedWord.includes(word)) {
                                    setChallengePassed(true);
                                }
                            });
                        }
                    }

                    requestAnimationFrame(detectYelling);
                }
                detectYelling();
            } catch (err) {
                console.error("Error accessing microphone:", err);
            }
        };
        initializeAudio();
    }, [recognizedWord]);

    useEffect(() => {
        if (!("webkitSpeechRecognition" in window)) {
          alert("Speech recognition is not supported in this browser.");
          return;
        }
    
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = "en-US";
    
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
    
        recognition.onresult = (event: any) => {
          let transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
          setRecognizedWord(transcript);
          console.log("Recognized:", transcript);
        };
    
        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
        };
    
        recognition.start();
    
        return () => recognition.stop();
      }, []);

    return (
        <div className="flex max-w-[60rem] flex-col items-center justify-center">
            <p className="mb-6">{challengeText}</p>
            {challengePassed ? (
                <>
                    <p className="mb-4 text-xl font-bold text-green-200">Captcha passed!</p>
                    {onResult("success")}
                </>
            ) : (
                <p className="mb-4 text-xl font-bold">Not quite there yet!</p>
            )}
        </div>
    )
}

export default CaptchaChallenge;