import React from 'react'
import './tailwind.css'
import StartScreen from './components/StartScreen'
import CatChallenge from './components/challenges/CatChallenge'
import DogChallenge from './components/challenges/DogChallenge'
import RobotChallenge from './components/challenges/RobotChallenge'
import YellingChallenge from './components/challenges/YellingChallenge'
import AlbinInterval1 from './components/albin/AlbinInterval1'
import AlbinInterval2 from './components/albin/AlbinInterval2'
import AlbinFinal from './components/albin/AlibinFinal'
import AlbinIntro from './components/albin/AlbinIntro'

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
	const [stage, setStage] = React.useState<'start' | 'albinintro' | 'cat' | 'dog' | 'albin1' | 'robot' | 'albin2' | 'yelling' | 'albinfinal' | 'rick'>('start');
	const [result, setResult] = React.useState<'success' | 'failure' | null>(null);

  	return (
		<div className='bg-transparent'>
			<div className='flex items-center justify-center h-screen'>
				{stage === 'start' && <StartScreen startGame={() => setStage("albinintro")} />}
				{stage === 'albinintro' && <AlbinIntro onResult={(res: any) => setStage("cat")} />}
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
						setStage('albin1');
					} else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}
					setResult(res)
					}} />}
				{stage === 'albin1' && <AlbinInterval1 onResult={() => setStage("robot")} />}
				{stage === 'robot' && <RobotChallenge onResult={(res: any) => {
					if (res === 'success') {
						console.log('success');
						setStage('albin2');
					}
					else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}
					setResult(res)
					}} />}
				{stage === 'albin2' && <AlbinInterval2 onResult={() => setStage("yelling")} />}
				{stage === 'yelling' && <YellingChallenge onResult={(res: any) => {
					if (res === 'success') {
						console.log('success');
						setStage('albinfinal');
					}
					else if (res === 'failure') {
						console.log('failure');
						setStage('start');
					} else {
						console.log('error');
					}
					setResult(res)
					}} />}
				{stage === 'albinfinal' && <AlbinFinal onResult={() => setStage("rick")} />}
				{stage === 'rick' && <RedirectComponent />}

			</div>
		</div>
  	)
}

export default App
