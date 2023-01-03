import { Aperture, BookOpen, Compass, DollarSign, Dribbble, Monitor } from 'react-feather'
import FloatingBalls from '../../components/FloatingBalls'
import ServiceCard from '../../components/ServiceCard'
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function Services () {
  const [replay, setReplay] = useState(true);

  const services = [
    { icon: <Aperture className='stroke-1' size={56} aria-hidden="true"/>, title: 'UX/UI Design', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
    { icon: <Monitor className='stroke-1' size={56} aria-hidden="true"/>, title: 'Website Design', description: 'We offer comprehensive web design services to help businesses improve their online presence and enhance the user experience for their target audience through visually appealing and functional websites.'},
    { icon: <Dribbble className='stroke-1' size={56} aria-hidden="true"/>, title: 'Graphic Design', description: 'Professional graphic design services to elevate the visual aspect of your brand, including logo design, branding materials, and marketing collateral.'},
    { icon: <BookOpen className='stroke-1' size={56} aria-hidden="true"/>, title: 'Copywriting', description: 'We craft compelling and engaging content for your website, emails, advertisements, and other marketing materials to effectively communicate your brand message and value proposition to your audience.'},
    { icon: <Compass className='stroke-1' size={56} aria-hidden="true"/>, title: ' SEO', description: 'Maximizing your online visibility through search engine optimization (SEO) strategies, including keyword research, on-page optimization, and technical SEO to improve your website\'s ranking on search engines like Google.'},
    { icon: <DollarSign className='stroke-1' size={56} aria-hidden="true"/>, title: 'Advertising', description: 'Reach your target audience through targeted advertising campaigns on platforms like Google Ads, social media, and other channels to drive qualified traffic and leads to your website.'},  
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
    <div className="my-16 mt-32 px-6 sm:px-[170px] sm:grid grid-cols-12 gap-5 xl:px-80">
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