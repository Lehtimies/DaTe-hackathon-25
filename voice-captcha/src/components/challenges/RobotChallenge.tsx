import CaptchaChallenge from "../CaptchaChallenge";
import { useState } from "react";
import Visualizer from "../Visualizer";

const RobotChallenge = ({ onResult }: { onResult: (res: any) => void }) => {
  const [result, setResult] = useState<'success' | null>(null);

  return (
      <div className="p-8 max-w-[55rem] mg-auto flex flex-col text-center justify-center items-center text-white">
			<h1 className="text-3xl text-left mb-6">Bot Captcha 🤖</h1>
			<div className="flex flex-col items-center">
				<CaptchaChallenge challengeText="In this test Albin has decided that since the Dateit spends so much time around machines, they must have taken on the qualities of them as well. To pass this Captcha you have to talk like a Robot, in beeps and boops." volumeTarget={10} minFrequency={100} maxFrequency={10000} words={["beep", "boop", "zoink", "people", "babe", "book"]} onResult={(res: any) => setResult(res)} />
				<Visualizer />
			</div>

			<div className="flex flex-row mt-10 gap-10">
				<button className="bg-red-500 flex p-4 rounded-md hover:bg-red-900 text-white cursor-pointer" onClick={() => onResult('failure')}>Quit (bot behavior)!</button>
				{result === "success" && <button className="bg-purple-700 flex p-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('success')}>Complete Captcha!</button>}
			</div>
		</div>
  	)
}

export default RobotChallenge;