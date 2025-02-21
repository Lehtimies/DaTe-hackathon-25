import { useState } from "react";
import Visualizer from "./Visualizer";
import CatChallenge from "./challenges/CatChallenge";
import YellingChallenge from "./challenges/YellingChallenge";
import RobotChallenge from "./challenges/RobotChallenge";
import DogChallenge from "./challenges/DogChallenge";

/*
const RandomChallenge = () => {
    const challenges = [CatChallenge, YellingChallenge, RobotChallenge, DogChallenge];
    console.log("challenges: ", challenges)
    const index = Math.floor(Math.random() * challenges.length);
    const [SelectedChallenge] = useState(() => {
        return challenges[index];
    });
    return (
        <SelectedChallenge />
    )
}

function ChallengeScreen({ onResult }: { onResult: (res: any) => void }) {
    return (
        <div className="bg-white p-8 rounded-md text-black">
            <h1 className="text-2xl text-left mb-3">Voice Captcha</h1>
            <RandomChallenge />
            <Visualizer />
            <button className="bg-purple-700 px-4 py-2 mt-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={() => onResult('failure')}>I Quit (bot behavior)!</button>
        </div>
    )
}

export default ChallengeScreen;*/