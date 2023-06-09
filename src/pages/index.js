import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import { Canvas } from '@react-three/fiber'
import Blob from "../components/Blob";
import Image from 'next/legacy/image'
import devlaura from '../../public/profile-laudev.jpeg'
import code from '../../public/code.png'
import design from '../../public/design.png'
import icon from '../../public/icon.png'
import { useState } from 'react'
import portfolio from '../../public/portfolio.png'
import portfolio1 from '../../public/portfolio1.png'
import portfolio2 from '../../public/portfolio2.png'

export default function Home() {
  const [darkMode, SetdarkMode] = useState(true)
  return (
    <div className={darkMode? "dark": ""}>
      <div className='absolute mt-10 w-80 h-80 dark:absolute w-80 h-80'>
          <Canvas camera={{position: [0.0, 0.0, 9.0]}}>
            <Blob/>
          </Canvas>
      </div>
      <Head>
        <title>Laura Gonzalez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-10 lg:px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons"></h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill onClick={() => SetdarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li> */}
              <li>
                <a className=" bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-2 rounded-md ml-8" href='/Laura_Gonzalez_CV.pdf' target="_blank" rel="noopener noreferrer" download>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='inline-block'>
            <div className=" relative text-center mt-10 p-10 py-10">
              <h2 className="text-5xl py-2 text-sky-600 font-medium md:text-6xl dark:text-sky-400">Laura Sophia Gonzalez Montoya</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full Stack Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">I&apos;m a developer with passion for creating intuitive and visually appealing user interfaces. I&apos;m proficient in JavaScript and Python, and I have experience in building web applications. As a UX/UI enthusiast, I have a keen eye for detail and focus on delivering a seamless user experience. </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/laurasgm/" target="_blank">
                <AiFillLinkedin/>
              </a>
            </div>
          </div>
          <div className='md:max-lg:flex inline-block'>
            <div className="relative mx-auto bg-gradient-to-b from-sky-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
              <Image src={devlaura} layout='fill' objectFit='cover'></Image>
            </div>
          </div>
        </section>
        <section className='md:px-40 lg:px-20'>
          <div>
            <h3 className="text-3xl py-1 pt-20 dark:text-white">My services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Skilled in both front-end and back-end development, with a strong understanding of modern web technologies and frameworks. Eager to take on new challenges and always striving to improve my skillset.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="overflow-hidden shadow-lg text-center p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image className="mx-auto" alt="" src={design} width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your needs following core design theory. </p>
              <h4 className="py-4 text-sky-600">UX & UI</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image className="mx-auto" alt="" src={icon} width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">FrontEnd</h3>
              <p className="py-2">Creating responsive design for a web using Javascript or Typescript. </p>
              <h4 className="py-4 text-sky-600">Skills</h4>
              <p className="text-gray-800 py-1">React JS</p>
              <p className="text-gray-800 py-1">Angular</p>
              <p className="text-gray-800 py-1">Next JS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image className="mx-auto" alt="" src={code} width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">BackEnd</h3>
              <p className="py-2">Building robust and scalable web applications. Implementing business logic, database management, and performance optimization. </p>
              <h4 className="py-4 text-sky-600">Skills</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Node JS</p>
              <p className="text-gray-800 py-1">Postgres SQL</p>
              <p className="text-gray-800 py-1">AWS</p>
            </div>
          </div>
        </section>
        {/* <section className='md:px-40 lg:px-20'>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>
          <div className="shadow-lg rounded-lg flex flex-col gap-2 py-5 lg:flex-row lg:flex-wrap">
            <div className="rounded-lg pe-5">
              <a href="https://github.com/laurasgm/portfolio" target="_blank">
                <Image src={portfolio} alt="" className="roudend-xl "  width={350} height={350}></Image>
              </a>
            </div>
            <div className='rounded-lg pe-5'>
              <a href="https://github.com/laurasgm/replicate-meli" target="_blank">
                <Image src={portfolio1} alt="" className="roudend-xl " width={350} height={350}></Image>
              </a>
            </div>
            <div className='rounded-lg pe-5'>
              <a href="https://www.figma.com/proto/BDMzkhBtkpkm9zYhE6boh6/Prototipo-Funcional-Gonzalez-Montoya?node-id=105-88&starting-point-node-id=105%3A88" target="_blank">
                <Image src={portfolio2} alt="" className="roudend-xl " width={350} height={350}></Image>
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
