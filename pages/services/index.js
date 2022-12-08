import { Aperture, Compass, Monitor } from 'react-feather'
import FloatingBalls from '../../components/FloatingBalls'
import ServiceCard from '../../components/ServiceCard'

const services = [
  { icon: <Aperture className='stroke-1' size={56} aria-hidden="true"/>, title: 'UX/UI Design', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
  { icon: <Monitor className='stroke-1' size={56} aria-hidden="true"/>, title: 'Website Design', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
  { icon: <Compass className='stroke-1' size={56} aria-hidden="true"/>, title: 'SEO', description: 'We create beautiful, functional, and intuitive apps and websites that feel natural in every aspect.'},
]

export default function Services () {
  return (
    <div className="my-16 px-6 sm:px-[170px] sm:grid grid-cols-12 gap-5 xl:px-80">
      <div className='col-span-6'>
        <div className="sm:w-64">
          <h1 className="font-bold text-4xl">Design with us</h1>
          <h2 className="font-bold text-xl mt-3">We create experiences that are more intensive and exciting.</h2>
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