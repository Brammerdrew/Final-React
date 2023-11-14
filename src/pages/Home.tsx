import Background from '../assets/images/Background.png'

function Home() {
  return (
    <div
    style = {{backgroundImage: `url(${Background})`}}
    className='bg-cover bg-center h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-6xl text-white  bg-slate-200 bg-opacity-10 font-bold cursive rounded leading-none lg:leading-snug home-name'>Snazzy Pups Grooming</h1>
      </div>
  </div>
  )
}

export default Home