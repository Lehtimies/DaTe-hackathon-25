import TalkingAlbin from "./TalkingAlbin";
import { useState } from "react";

const AlbinInterval1 = ({ onResult }: { onResult: (res: any) => void }) => {
    const messages = ["Hmm...", "I see you passed that test without much issue.", "You might just be a Dateit after all.", "An MK:it could never imitate an animal in public like that.", "This next test won't be quite so easy however.", "Good Luck!"];
    const [result, setResult] = useState<'complete' | null>(null);

    return (
        <div className="bg-transparent max-w-[60rem] flex flex-col items-center justify-center p-8 rounded-md text-white">
            <div id='albin-talk' className="text-center">
                <TalkingAlbin messages={messages} msgDelay={1350} typeDelay={50} onResult={() => setResult("complete")} />
            </div>
            {result === "complete" && <button className="bg-purple-700 flex p-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('success')}>Next Captcha</button>}
        </div>
    )
}

export default AlbinInterval1;