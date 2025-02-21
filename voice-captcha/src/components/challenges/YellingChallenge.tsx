import CaptchaChallenge from "../CaptchaChallenge";
import { useState, useEffect } from "react";
import Visualizer from "../Visualizer";

const YellingChallenge = ({ onResult }: { onResult: (res: any) => void }) => {
    const [result, setResult] = useState<'success' | 'failure' | null>(null);
    
    useEffect(() => {
        if (result === "success") {
          onResult("success");
        }
      }, [result, onResult]);

    return (
        <div className="bg-white p-8 rounded-md text-black">
            <h1 className="text-2xl text-left mb-3">Voice Captcha</h1>
            <CaptchaChallenge challengeText="Yell into the microphone to confirm your humanity" volumeTarget={35} minFrequency={300} maxFrequency={1000} words={null} onResult={(res: any) => setResult(res)} />
            <Visualizer />
            <button className="bg-purple-700 px-4 py-2 mt-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('failure')}>I Quit (bot behavior)!</button>
        </div>
    )
}

export default YellingChallenge;