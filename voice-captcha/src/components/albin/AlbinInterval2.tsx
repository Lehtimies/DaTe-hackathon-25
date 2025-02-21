import TalkingAlbin from "./TalkingAlbin";
import { useState } from "react";

const AlbinInterval2 = ({ onResult }: { onResult: (res: any) => void }) => {
    const messages = ["Wow!", "I'm impressed...", "But can you keep it up?", "Let's see...", "It's time for the final test.", "This one is my simplest, but also my hardest one.", "I wish you good luck."];
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

export default AlbinInterval2;