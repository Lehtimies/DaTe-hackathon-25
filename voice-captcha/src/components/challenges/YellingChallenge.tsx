import CaptchaChallenge from "../CaptchaChallenge";
import { useState } from "react";
import Visualizer from "../Visualizer";

const YellingChallenge = ({ onResult }: { onResult: (res: any) => void }) => {
	const [result, setResult] = useState<'success' | null>(null);

	return (
		<div className="p-8 max-w-[55rem] mg-auto flex flex-col text-center justify-center items-center text-white">
			  <h1 className="text-3xl text-left mb-6">Yelling Captcha</h1>
			  <div className="flex flex-col items-center">
					<CaptchaChallenge challengeText="During Albin's many years of existence, he has heard many a Dateit complain about the difficulty of Tom Fredman's math courses, especially the dreaded Sigbe. So a true Dateit would take any opportunity to let out all the anger and frustration they are feeling from Sigbe. In this assignment you shall simply yell as loud as you can, to prove your Dateitness." volumeTarget={50} minFrequency={100} maxFrequency={10000} words={null} onResult={(res: any) => setResult(res)} />
					<Visualizer />
			  </div>

			  <div className="flex flex-row mt-10 gap-10">
			 		 <button className="bg-red-500 flex p-4 rounded-md hover:bg-red-900 text-white cursor-pointer" onClick={() => onResult('failure')}>Quit (bot behavior)!</button>
					{result === "success" && <button className="bg-purple-700 flex p-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('success')}>Finish!</button>}
			  </div>
		  </div>
		)
}

export default YellingChallenge;