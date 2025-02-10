
function ResultScreen({result, onRestart}: {result: 'success' | 'failure' | null, onRestart: () => void}) {
    return (
        <div className="bg-white p-8 rounded-md text-black">
            <h1 className="text-xl text-left">Voice Captcha</h1>
            {result === 'success' && <p className="text-left">You are human!</p>}
            {result === 'failure' && <p className="text-left">You are a robot!</p>}
            <button className="bg-slate-500 px-4 py-2 mt-4 rounded-md hover:bg-blue-500 cursor-pointer" onClick={onRestart}>Restart</button>
        </div>
    )
}

export default ResultScreen;