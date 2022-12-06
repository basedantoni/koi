import FloatingBalls from "../components/FloatingBalls";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="px-6 py-16">
        <h1 className="font-bold text-4xl">
          We build your digital presence with a mixture of <span className="text-yellow-500">art</span> and <span className="text-yellow-500">professionalism.</span>
        </h1>
        <button type="button" class=" mt-4 inline-flex items-center rounded border border-transparent bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">GET IN TOUCH</button>
        <Image
          className="mt-16 rounded-md"
          src="/../public/images/sunset.webp"
          alt="picture of sunset"
          width={500}
          height={500}
        />
      </section>
      <FloatingBalls />
    </>
  )
}
