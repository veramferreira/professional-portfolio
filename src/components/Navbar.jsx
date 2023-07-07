import {TbSunFilled } from 'react-icons/tb';

export default function Navbar() {
    return (
        <section className='p-10'>
             <ul className="list-none flex justify-between items-center gap-5">
        <li>
          <a href="#header">

          <img src="logo2.png" alt="logo" className=' w-8'/>
          </a>
          {/* <TbSunFilled className=' text-bright-yellow  hover:text-bright-yellow/70 cursor-pointer transition-all'/> */}
          </li>
        <div className="flex gap-5 font-mono text-bright-yellow ">
          <li className=' hover:text-bright-yellow/70'><a href="#about">about</a></li>
          <li className=' hover:text-bright-yellow/70'><a href="#experience">experience</a></li>
          <li className=' hover:text-bright-yellow/70'><a href="#portfolio">portfolio</a></li>
          <li className=' hover:text-bright-yellow/70'><a href="#contact">contact</a></li>
        </div>
      </ul>
        </section>
    )
}