import { Aperture, Compass, Monitor } from 'react-feather'
import FloatingBalls from '../../components/FloatingBalls'
import ServiceCard from '../../components/ServiceCard'
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function Services () {
  const [replay, setReplay] = useState(true);

  const services = [
    { icon: <Aperture className='stroke-1' size={56} aria-hidden="true"/>, title: 'UX/UI Design', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
    { icon: <Monitor className='stroke-1' size={56} aria-hidden="true"/>, title: 'Website Design', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
    { icon: <Compass className='stroke-1' size={56} aria-hidden="true"/>, title: 'SEO', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
  ]
  
  const placeholderText = [
    { type: "heading1", text: "Design with us", style: 'font-bold' },
    {
      type: "heading2",
      text: "We create experiences that are more intensive and exciting."
    }
  ];
  
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  return (
    <div className="my-16 px-6 sm:px-[170px] sm:grid grid-cols-12 gap-5 xl:px-80">
      <div className='col-span-6 mt-8 sm:mt-16 sm:w-96'>
        <div className="sm:w-full">
          <motion.div
            className="text-center sm:text-left"
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
        </div>
        
        <div className="hidden sm:block">
          <FloatingBalls />
        </div>
      </div>

      <div className='col-start-8'>
        {services.map(({ icon, title, description }) => (
          <ServiceCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  )
}