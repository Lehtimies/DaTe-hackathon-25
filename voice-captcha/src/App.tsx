import React from 'react'
import './tailwind.css'
import StartScreen from './components/StartScreen'
import CatChallenge from './components/challenges/CatChallenge'
import DogChallenge from './components/challenges/DogChallenge'
import RobotChallenge from './components/challenges/RobotChallenge'
import YellingChallenge from './components/challenges/YellingChallenge'

const RedirectComponent = () => {
	React.useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		}, 3000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<> </>
	)
}

function App() {
	const [stage, setStage] = React.useState<'start' | 'cat' | 'dog' | 'robot' | 'yelling' | 'rick'>('start');
	const [result, setResult] = React.useState<'success' | 'failure' | null>(null);

  	return (
		<div className='bg-zinc-900'>
			<div className='flex items-center justify-center h-screen'>
				{stage === 'start' && <StartScreen startGame={() => setStage('cat')} />}
				{stage === 'cat' && <CatChallenge onResult={(res: any) => {
					if (res === 'success') {
						console.log('success');
						setStage('dog');
					} else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}	
					setResult(res)
					}} />}
				{stage === 'dog' && <DogChallenge onResult={(res: any) => {
					if (res === 'success') {
						console.log('success');
						setStage('robot');
					} else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}
					setResult(res)
					}} />}
				{stage === 'robot' && <RobotChallenge onResult={(res: any) => {
					if (res === 'success') {
						console.log('success');
						setStage('yelling');
					}
					else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}
					setResult(res)
					}} />}
				{stage === 'yelling' && <YellingChallenge onResult={(res: any) => {
					if (res === 'success') {
						console.log('success');
						setStage('rick');
					}
					else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}
					setResult(res)
					}} />}
				{stage === 'rick' && <RedirectComponent />}

			</div>
		</div>
  	)
}

export default App
