import koi from '../../public/images/koi-fish.webp'
import galaso from '../../public/images/galaso-about.webp'
import alive from '../../public/images/alive.webp'
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

        <div className='sm:mt-16 flex flex-col'>
          <h2>Who we are</h2>
          <p>Made in Austin, Texas</p>
          <hr className='my-8 border border-black' />
          <p className='text-2xl leading-snug md:text-7xl'>We are a team of skilled and passionate professionals, dedicated to helping our clients achieve their business goals through effective online marketing strategies.</p>
          <div className='lg:w-[32rem] lg:mx-32 2xl:mx-64 mt-4 lg:mt-16 self-end'>
            <p className='lg:text-2xl'>Our services include search engine optimization (SEO), email marketing, and website design and development.</p>
            <p className='lg:mt-8 mt-4 lg:text-2xl'>No matter what your business needs, we have the expertise and resources to help you succeed.</p>
          </div>
        </div>

        <div className='2xl:px-64 lg:px-16 lg:mt-32 mt-16'>
          <Image
            className="rounded-md w-full object-cover"
            src={galaso}
            alt="about us koi"
          />
        </div>

        <div className='mt-16 xl:mt-64 flex flex-col'>
          <h2>What we do</h2>
          <p>We deliver results that speak for themselves</p>
          <hr className='my-8 border border-black' />
          <p className='text-2xl leading-snug md:text-7xl'>We pride ourselves on our strong work ethic, attention to detail, and commitment to customer satisfaction.</p>
          <div className='lg:w-[32rem] lg:mx-32 2xl:mx-64 mt-4 lg:mt-16 self-end'>
            <p className='lg:text-2xl'>In addition to traditional digital marketing services, we also offer website design and development to ensure your online presence is professional and effective.</p>
          </div>
        </div>

        <div className='2xl:px-64 lg:px-16 lg:mt-32 mt-16'>
          <Image
            className="rounded-md w-full h-[32rem] object-cover"
            src={alive}
            alt="about us alive"
          />
        </div>
      </div>
    </>
  )
}