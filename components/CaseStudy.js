import Image from "next/image"

export default function CaseStudy ({ imageSrc, studyName, studyDescription }) {
  return (
    <>
      <Image
        className="mt-16 mb-4 w-full"
        src={imageSrc}
        alt="picture of case study"
        width={320}
        height={243}
      />

      <div className="mb-8 px-6">
        <h2 className="font-bold text-xl">{ studyName }</h2>
        <p className="mt-3">{ studyDescription }</p>
      </div>
    </>
  )
}