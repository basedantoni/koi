import Navbar from "./Navbar";
import Image from 'next/image';
import koiBg from '../public/images/background.webp'

export default function Layout ({ children }) {
  return (
    <>
      {/* TODO: Make this background image fuly responsive */}
      {/* <div className="fixed -z-50 w-screen h-screen">
        <Image
          className="object-cover"
          src={koiBg}
          alt="background"
        />
      </div> */}
      <Navbar/>
      <main>{children}</main>
    </>
  );
}