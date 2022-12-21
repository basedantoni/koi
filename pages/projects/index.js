import CaseStudy from "../../components/CaseStudy";
import galaso from '../../public/images/galaso-project.webp'
import seventyone from '../../public/images/71.webp'

const caseStudies = [
  { name: 'Galaso', description: "We are proud to have had the opportunity to work with Galaso on the promotion of their latest album. As a digital marketing agency, it's our job to help artists connect with their audience and increase their reach through effective online strategies.", imageSrc: galaso },
  { name: 'SEVEN7Y-ONE', description: "Our digital marketing agency recently had the pleasure of working on an email ad campaign for an eco-friendly water bottle company. It was a rewarding experience, as we were able to use our expertise to not only showcase the benefits of the company's sustainable products, but also drive conversions and sales.", imageSrc: seventyone },
]

export default function Projects () {
  return (
    <>
      <div className="mt-16 mb-32 px-6">
        <h1 className="font-bold text-4xl sm:text-center">Browse our latest and greatest</h1>
      </div>

      {caseStudies.map(({ name, description, imageSrc }) => (
        <CaseStudy
          key={name}
          studyName={name}
          studyDescription={description}
          imageSrc={imageSrc}
        />
      ))}
    </>
  )
}