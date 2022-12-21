import koi from '../../public/images/koi-fish.webp'
import Image from 'next/image'

export default function About () {
  return (
    <>
      <div className="lg:my-16 px-6 lg:px-24">
        <div className="relative flex flex-col h-96 sm:h-screen w-full text-center">
          <h1 className="z-10 font-light text-4xl md:text-5xl lg:text-4xl text-white mt-32 my-4">About Us</h1>
          <h1 className="z-10 font-light text-4xl md:text-5xl lg:text-9xl text-white">Design <span className='font-serif font-thin'>for</span> you</h1>
          <Image
            className="mt-16 sm:mt-0 rounded-md w-full max-h-[48rem] object-cover absolute top-0 left-0 right-0 bottom-0"
            src={koi}
            alt="about us koi"
          />
        </div>

        <div className='sm:mt-16'>
          <h2>Who we are</h2>
          <p>Made in Austin, Texas</p>
          <hr className='my-8 border border-black' />
          <p className='text-2xl leading-snug md:text-7xl'>We are a team of skilled and passionate professionals, dedicated to helping our clients achieve their business goals through effective online marketing strategies.</p>
        </div>
      </div>
    </>
  )
}