import TalkingAlbin from "./TalkingAlbin";
import { useState } from "react";

const AlbinFinal = ({ onResult }: { onResult: (res: any) => void }) => {
    const messages = ["I cannot believe it...", "You've done it...", "You've passed my ultimate test...", "I'm speechless...", "Congratulations...", "You're a true Dateit...", "You've truly earned this reward...", "Access to my most precious secret...", "The secret of the Dateit's power...", "Enjoy it, and may you use this knowledge wisely."];
    const [result, setResult] = useState<'complete' | null>(null);

    return (
        <div className="bg-transparent max-w-[60rem] flex flex-col items-center justify-center p-8 rounded-md text-white">
            <div id='albin-talk' className="text-center">
                <TalkingAlbin messages={messages} msgDelay={1350} typeDelay={50} onResult={() => setResult("complete")} />
            </div>
            {result === "complete" && <button className="bg-purple-700 flex p-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('success')}>Albin's Secret</button>}
        </div>
    )
}

export default AlbinFinal;