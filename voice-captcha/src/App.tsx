import React from 'react'
import './tailwind.css'
import StartScreen from './components/StartScreen'
import ChallengeScreen from './components/ChallengeScreen'
import ResultScreen from './components/ResultScreen'

function App() {
	const [stage, setStage] = React.useState<'start' | 'challenge' | 'result'>('start');
	const [result, setResult] = React.useState<'success' | 'failure' | null>(null);

  	return (
		<div className='bg-black'>
			<div className='flex items-center justify-center h-screen'>
				{stage === 'start' && <StartScreen startGame={() => setStage('challenge')} />}
				{stage === 'challenge' && <ChallengeScreen onResult={(res: any) => {setResult(res); setStage('result')}} />}
				{stage === 'result' && <ResultScreen result={result} onRestart={() => {setResult(null); setStage('start')}} />}
			</div>
		</div>
  	)
}

export default App
