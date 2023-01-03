import { BarChart, MousePointer, Shield, Menu as MenuIcon } from 'react-feather'
import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'

export default function Navbar () {
const navItems = [
    {
      name: 'Our Work',
      href: '/projects',
      icon: <BarChart className='stroke-1' aria-hidden="true"/>,
    },
    {
      name: 'Services',
      href: '/services',
      icon: <MousePointer className='stroke-1' aria-hidden="true"/>,
    },
    {
      name: 'About Us',
      href: '/about',
      icon: <Shield className='stroke-1' aria-hidden="true"/>
    },
  ]

  return (    
    <div className="flex justify-between items-center px-6 pt-8 sm:px-12 z-30">
      <Link href={"/"}>
        <h1 className="text-4xl font-extrabold">KOI</h1>
      </Link>
      
      <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Link href="/projects" className="text-base font-medium text-gray-500 hover:text-gray-900 mx-4">
            Our Work
          </Link>
          <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900 mx-4">
            Services
          </Link>
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 ml-4">
            About Us
          </Link>
        </div>

        <Menu as="div" className="relative inline-block text-left bg-transparent">
          <div>
            <Menu.Button>
              <MenuIcon
                className="sm:hidden"
                size={40}
              />
            </Menu.Button>
          </div>

            <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {navItems.map(({ name, href, icon }) => (
                  <Menu.Item key={name}>
                    {({ active }) => (
                      <Link
                        href={href}
                        className={`${
                          active ? 'bg-yellow-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        { icon }
                        <p className='mx-4'>{ name }</p>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
        </Menu>
      </div>
    </div>
  )
}
