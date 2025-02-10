import './tailwind.css'

function App() {
  return (
    <div className='bg-black'>
      <div className='flex items-center justify-center h-screen'>
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>Voice Captcha</h1>
          <p className='text-lg'>Click the button below to start recording</p>
          <button className='px-4 py-2 mt-4 bg-blue-500 rounded-md' onClick={() => {}}>Start Recording</button>
        </div>
      </div>
    </div>
  )
}

export default App
