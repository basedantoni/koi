import Image from "next/image"

export default function CaseStudy ({ imageSrc, studyName, studyDescription }) {
  return (
    <div className="sm:flex sm:even:flex-row-reverse sm:my-[78px]">
      <div className="flex justify-center sm:w-[650px] sm:h-[372px] sm:bg-orange-500">
        <Image
          className="mt-16 mb-4 w-full max-h-64 sm:w-[459px] sm:object-scale-down"
          src={imageSrc}
          alt="picture of case study"
          width={320}
          height={243}
        />
      </div>

      <div className="mb-8 px-6 sm:w-[448px]">
        <h2 className="font-bold text-xl">{ studyName }</h2>
        <p className="mt-3">{ studyDescription }</p>
      </div>
    </div>
  )
}