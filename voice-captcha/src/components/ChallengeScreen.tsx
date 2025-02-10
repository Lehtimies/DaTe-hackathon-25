import MeowChallenge from "./MeowChallenge";

function ChallengeScreen({ onResult }: { onResult: (res: any) => void }) {
    return (
        <div className="bg-white p-8 rounded-md text-black">
            <h1 className="text-xl text-left">Voice Captcha</h1>
            <MeowChallenge />
            <button className="bg-slate-500 px-4 py-2 mt-4 rounded-md hover:bg-blue-500 cursor-pointer" onClick={() => onResult('success')}>I am human</button>
        </div>
    )
}

export default ChallengeScreen;