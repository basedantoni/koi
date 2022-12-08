import FloatingBalls from "../components/FloatingBalls";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="px-6 py-16 sm:px-[170px] sm:py-32 sm:grid grid-cols-12 gap-5">
        <div className="lg:w-[512px] lg:col-start-2 xl:col-span-6">
          <h1 className="font-bold text-4xl">
            We build your digital presence with a mixture of <span className="text-yellow-500">art</span> and <span className="text-yellow-500">professionalism.</span>
          </h1>
          <button type="button" className="mt-4 sm:mt-6 inline-flex items-center rounded bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">GET IN TOUCH</button>
        </div>

        <div className="col-start-8 col-span-8">
          <Image
            className="mt-16 sm:mt-0 rounded-md"
            src="/../public/images/sunset.webp"
            alt="picture of sunset"
            width={700}
            height={700}
          />
        </div>
      </section>
      <FloatingBalls />
    </>
  )
}
