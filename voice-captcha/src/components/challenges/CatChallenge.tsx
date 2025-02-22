import CaptchaChallenge from "../CaptchaChallenge";
import { useState } from "react";
import Visualizer from "../Visualizer";

const CatChallenge = ({ onResult }: { onResult: (res: any) => void }) => {
    const [result, setResult] = useState<'success' | null>(null);

    return (
        <div className="p-8 max-w-[55rem] mg-auto flex flex-col text-center justify-center items-center text-white">
            <h1 className="text-3xl text-left mb-6">Cat Captcha 🐱</h1>
            <div className="flex flex-col items-center">
                <CaptchaChallenge challengeText="'Meow' into the microphone like a cat to confirm your humanity. Albin has designed this Captcha to fit the deranged qualities of the average Dateit." volumeTarget={10} minFrequency={100} maxFrequency={10000} words={["meow", "no", "wow"]} onResult={(res: any) => setResult(res)} />
                <Visualizer />
            </div>
            
            <div className="flex flex-row mt-10 gap-10">
                <button className="bg-red-500 flex p-4 rounded-md hover:bg-red-900 text-white cursor-pointer" onClick={() => onResult('failure')}>Quit (bot behavior)!</button>
                {result === "success" && <button className="bg-purple-700 flex p-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('success')}>Complete Captcha!</button>}
            </div>
        </div>
    )
}

export default CatChallenge;