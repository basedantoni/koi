import Image from "next/image"

export default function CaseStudy ({ imageSrc, studyName, studyDescription }) {
  return (
    <div className="sm:flex sm:border-t-2 justify-between py-4">
      <div className="mt-4 w-96">
        <h2 className="font-bold text-xl md:text-5xl">{ studyName }</h2>
        <p className="mt-4">{ studyDescription }</p>
      </div>
    
      <Image
        className="mt-4 sm:mt-0 w-full sm:max-w-sm sm:object-scale-down"
        src={imageSrc}
        alt="picture of case study"
        width={320}
        height={243}
      />
    </div>
  )
}