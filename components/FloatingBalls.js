import { motion } from "framer-motion"

const blobAnimation = {
  x: [0, 20, -10, 0],
  y: [0, -40, 10, 0],
  scale: [1, 1.1, 0.8, 1],
}

export default function FloatingBalls () {
  return (
    <>
      <motion.div
        animate={ blobAnimation }
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="-z-10 absolute rounded-full opacity-70 radial-2 top-[447px] left-2.5 sm:top-[534px] sm:left-[400px] xl:left-[564px] w-20 h-20 xl:w-28 xl:h-28"
      />
      <motion.div
        animate={ blobAnimation }
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }}
        className="-z-10 absolute rounded-full opacity-70 radial-3 top-[407px] right-4 sm:top-[450px] sm:left-56 xl:left-80 w-28 h-28 xl:w-40 xl:h-40"
      />
      <motion.div
        animate={ blobAnimation }
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 4
        }}
        className="-z-10 absolute rounded-full opacity-70 radial-1 top-[700px] left-28 sm:bottom-32 sm:left-44 xl:left-60 w-24 h-24 xl:w-32 xl:h-32"
      />
    </>
  )
}