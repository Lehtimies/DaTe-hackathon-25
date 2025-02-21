interface StartScreenProps {
    startGame: () => void;
};

function StartScreen({ startGame }: StartScreenProps) {
    return (
        <div className="bg-white p-8 rounded-md text-black">
            <h1 className="text-2xl text-left mb-3">Voice Captcha</h1>
            <p className="text-left">Prove you are human by completing a Voice Captcha</p>
            <button className="bg-purple-700 px-4 py-2 mt-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={startGame}>Start</button>
        </div>
    )
};

export default StartScreen;