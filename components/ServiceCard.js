export default function ServiceCard ({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center mt-8 sm:mt-16 sm:w-96">
      { icon }
      <h2 className="font-bold text-xl my-4">{ title }</h2>
      <p>{ description }</p>
    </div>
  )
}