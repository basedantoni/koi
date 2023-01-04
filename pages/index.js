import FloatingBalls from "../components/FloatingBalls";
import Image from 'next/image';
import koi from '../public/images/landing-page.png'
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import { sendContactForm } from "../lib/api";

export default function Home() {
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  //   Form validation state
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });

    return isValid;
  };

  const handleSubmit = async () => {
    let isValidForm = handleValidation();

    const res = await sendContactForm({ fullName, company, email, message })

    const { error } = await res;
    if (error) {
      console.log(error);
      return;
    }

    setFullName('')
    setCompany('')
    setEmail('')
    setMessage('')
  }

  const contactRef = useRef(null)
  const handleClick = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 2 },
        ease: "easeIn",
      }}
    >
      <section className="px-6 py-16 sm:px-[170px] sm:py-32 sm:grid grid-cols-12 gap-5">
        <div className="lg:w-[512px] lg:col-start-2 xl:col-span-6">
          <h1 className="font-bold text-4xl">
            We build your digital presence with a mixture of <span className="text-yellow-500">art</span> and <span className="text-yellow-500">professionalism.</span>
          </h1>
          <button onClick={handleClick} type="button" className="mt-4 sm:mt-6 inline-flex items-center rounded bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">GET IN TOUCH</button>
        </div>

        <div className="col-start-8 col-span-8">
          <Image
            className="mt-16 sm:mt-0 rounded-md"
            src={advertiti}
            alt="landing page picture"
          />
        </div>
      </section>

      <FloatingBalls />

      <form ref={contactRef} className="my-16 px-6 py-16 sm:w-full sm:px-[170px] sm:py-32 flex flex-col items-center">
        <div>
          <h1 className="sm:text-[80px]">Contact Us</h1>
        </div>

        <div className="flex flex-wrap sm:w-[700px] justify-between mt-6 sm:mt-16">
          <div>
            <p className="text-3xl font-bold text-yellow-400">Email us:</p>
          </div>
          <div className="sm:w-96 mt-4 sm:mt-0">
            <p>If you&apos;ve got any wild ideas, burning questions, or pressing needs, our team is all ears. Let&apos;s make this a collaboration for the ages!</p>
          </div>
        </div>

        <div className="flex flex-wrap sm:w-[700px] justify-center sm:justify-between sm:mt-16 mt-12">
          <input
            placeholder="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-input w-80 px-4 py-3 border border-gray-gray-500 rounded-sm"
          />
          <input
            placeholder="Company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input w-80 px-4 py-3 border border-gray-gray-500 rounded-sm sm:mt-0 mt-4"
          />
        </div>

        <div className="flex sm:w-[700px] mt-4 sm:mt-16">
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-80 sm:w-full px-4 py-3 border border-gray-gray-500 rounded-sm"
          />
        </div>

        <div className="flex sm:w-[700px] mt-4 sm:mt-16">
          <textarea
            placeholder="What is your project about?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input px-4 py-3 w-80 sm:w-full h-48 border border-gray-gray-500 rounded-sm"
          />
        </div>

        <div className="flex sm:w-[700px] justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-24 justify-center mt-4 sm:mt-6 inline-flex items-center rounded bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </motion.div>
  )
}
