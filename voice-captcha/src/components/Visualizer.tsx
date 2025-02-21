import { useEffect, useRef, useState } from "react";

const Visualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [source, setSource] = useState<MediaStreamAudioSourceNode | null>(null);

  useEffect(() => {
    if (!navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support audio capture.");
      return;
    }

    const initializeAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioCtx = new AudioContext();
        const analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 256; // Adjust FFT size for resolution

        const sourceNode = audioCtx.createMediaStreamSource(stream);
        sourceNode.connect(analyserNode);

        setAudioContext(audioCtx);
        setAnalyser(analyserNode);
        setSource(sourceNode);
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    };

    initializeAudio();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !analyser) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const centerY = canvas.height / 2;

    const draw = () => {
      if (!analyser || !ctx || !canvas) return;

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      const minHeight = 2;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = Math.max( dataArray[i] / 5, minHeight);
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 200)`;
        ctx.fillRect(x, centerY, barWidth, barHeight);
        ctx.fillRect(x, centerY, barWidth, - barHeight);
        x += barWidth + 1;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [analyser]);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-4">
      <canvas ref={canvasRef} width={300} height={120} className="bg-transparent" />
    </div>
  );
};

export default Visualizer;
