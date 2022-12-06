export default function FloatingBalls () {
  return (
    <>
      <div className="-z-10 absolute rounded-full bg-red-500 filter blur-md opacity-70 animate-blob top-[447px] left-2.5 w-20 h-20"></div>
      <div className="-z-10 absolute rounded-full bg-red-500 filter blur-md opacity-70 animate-blob animation-delay-2000 top-[407px] right-2.5 w-28 h-28"></div>
      <div className="-z-10 absolute rounded-full filter blur-md opacity-70 animate-blob radial-1 animation-delay-4000 top-[700px] left-28 w-24 h-24"></div>
    </>
  )
}