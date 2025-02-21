import { useState, useEffect } from 'react';
import TalkingAlbin from './albin/TalkingAlbin';

interface StartScreenProps {
    startGame: () => void;
};

function StartScreen({ startGame }: StartScreenProps) {
    return (
        <div className="bg-transparent max-w-[50rem] text-center flex flex-col items-center justify-center p-8 rounded-md text-white">
            <div className="text-center">
                <h1 className='font-bold text-3xl mb-6'>Albin's Secret Hideout</h1>
                <p className='mb-4'>Welcome to Albin's secret hideout. This is where Albin goes when he need to get away from all the hassle that comes from living in Kansli.</p>    
                <p className='mb-4'>This is also where Albin keeps his rumored "Secret Treasure ®". Though it is said to be protected by some of the fiercest protections available, but the reward is said to be well worth it!</p>
            </div>
            <button className="flex w-fit bg-purple-700 p-4 mt-4 rounded-md hover:bg-purple-900 text-white cursor-pointer" onClick={startGame}>Head into the Hideout</button>
        </div>
    )
};

export default StartScreen;