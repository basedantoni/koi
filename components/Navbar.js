import { BarChart, Menu, MousePointer, Shield, X } from 'react-feather'
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

export default function Navbar () {
  const openMenu = () => {
    
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const solutions = [
    {
      name: 'Our Work',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: BarChart,
    },
    {
      name: 'Services',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: MousePointer,
    },
    {
      name: 'About Us',
      description: "Your customers' data will be safe and secure.",
      href: '#',
      icon: Shield
    },
  ]

  return (    
    <div className="flex justify-between items-center px-6 pt-8 sm:px-12">
      <Link href={"/"}>
        <h1 className="text-4xl font-extrabold">KOI</h1>
      </Link>
      <Popover className="relative bg-white">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <Menu
                className="sm:hidden"
                onClick={openMenu}
                size={40}
              />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link href="/projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Our Work
              </Link>
              <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About Us
              </Link>
            </Popover.Group>
          </div>
        </div>
      
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-left transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Close menu</span>
                      <X
                        className="sm:hidden"
                        onClick={openMenu}
                        size={40}
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-yellow-500 text-white">
                          <item.icon size={24} aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
