import CaseStudy from "../../components/CaseStudy";

const caseStudies = [
  { name: 'Nike', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elementum augue, non consectetur ipsum. Suspendisse fringilla finibus ultrices. Nam ultrices consequat nisl eget facilisis. Sed convallis augue eget ligula cursus, sit amet feugiat nibh iaculis. Vivamus lacinia efficitur metus vitae tincidunt. Nullam sed dapibus tortor. Sed pretium dui dolor, vel laoreet velit semper volutpat. Cras ultricies et ex fermentum efficitur. Mauris ut velit ornare, hendrerit neque eu, facilisis justo.', imageSrc: '/../public/images/nike.webp' },
  { name: 'Homer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elementum augue, non consectetur ipsum. Suspendisse fringilla finibus ultrices. Nam ultrices consequat nisl eget facilisis. Sed convallis augue eget ligula cursus, sit amet feugiat nibh iaculis. Vivamus lacinia efficitur metus vitae tincidunt. Nullam sed dapibus tortor. Sed pretium dui dolor, vel laoreet velit semper volutpat. Cras ultricies et ex fermentum efficitur. Mauris ut velit ornare, hendrerit neque eu, facilisis justo.', imageSrc: '/../public/images/nike.webp' },
  { name: 'Off-White', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elementum augue, non consectetur ipsum. Suspendisse fringilla finibus ultrices. Nam ultrices consequat nisl eget facilisis. Sed convallis augue eget ligula cursus, sit amet feugiat nibh iaculis. Vivamus lacinia efficitur metus vitae tincidunt. Nullam sed dapibus tortor. Sed pretium dui dolor, vel laoreet velit semper volutpat. Cras ultricies et ex fermentum efficitur. Mauris ut velit ornare, hendrerit neque eu, facilisis justo.', imageSrc: '/../public/images/nike.webp' },
]

export default function Projects () {
  return (
    <>
      <div className="mt-16 px-6">
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