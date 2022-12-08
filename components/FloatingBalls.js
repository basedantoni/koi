export default function FloatingBalls () {
  return (
    <>
      <div className="-z-10 absolute rounded-full bg-red-500 filter blur-md opacity-70 radial-2 animate-blob top-[447px] left-2.5 sm:top-[534px] sm:left-[400px] xl:left-[564px] w-20 h-20 xl:w-28 xl:h-28"></div>
      <div className="-z-10 absolute rounded-full bg-red-500 filter blur-md opacity-70 animate-blob animation-delay-2000 top-[407px] right-4 sm:top-96 sm:left-56 xl:left-80 w-28 h-28 xl:w-40 xl:h-40"></div>
      <div className="-z-10 absolute rounded-full filter blur-md opacity-70 animate-blob radial-1 animation-delay-4000 top-[700px] left-28 sm:bottom-32 sm:left-44 xl:left-60 w-24 h-24 xl:w-32 xl:h-32"></div>
    </>
  )
}