import { Menu } from 'react-feather'
import Link from 'next/link'

export default function Navbar () {
  const openMenu = () => {
    
  }

  return (
    <div className="flex justify-between items-center px-6 py-8 sm:px-12">
      <h1 className="text-4xl font-extrabold">KOI</h1>
      <Menu
        className="sm:hidden"
        onClick={openMenu}
        size={40}
      />
      <div className="hidden sm:flex justify-between items-center w-auto">
        <Link className="uppercase ml-4" href="/projects">Our Work</Link>
        <Link className="uppercase ml-4" href="/about">About Us</Link>
        <Link className="uppercase ml-4" href="/services">Services</Link>
      </div>
    </div>
  )
}
