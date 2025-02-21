import { useState } from 'react';
import TalkingAlbin from './TalkingAlbin';

interface StartScreenProps {
    onResult: (res: any) => void;
};

function AlbinIntro({ onResult }: StartScreenProps) {
    const messages = [" ", "Huh?...", "Who are you?", "Oh, so you're here for my treasure?", "In that case you have to beat my Captcha first?", "I'm Albin", "Let's see if you can beat my ultimate challenge!", "It is a ...", "Voice Captcha!", "Not even o3-high can beat this one (trust)", "Let's get started!"];
    const [result, setResult] = useState<'complete' | null>(null);

    return (
        <div className="bg-transparent max-w-[50rem] flex flex-col items-center justify-center p-8 rounded-md text-white">
            <div id='albin-talk' className="text-center">
                <TalkingAlbin messages={messages} msgDelay={1350} typeDelay={50} onResult={() => setResult("complete")} />
            </div>
            {result === "complete" && <button className="flex w-fit bg-purple-700 p-4 mt-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('success')}>Start</button>}
        </div>
    )
};

export default AlbinIntro;