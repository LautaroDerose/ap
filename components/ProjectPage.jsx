import Image from 'next/image'
import backgroundImage1 from '../public/jeep-context-001.png'
import backgroundImage2 from '../public/jeep-context-002.png'
import backgroundImage3 from '../public/jeep-context-003.png'
import { labelsHome, mock } from "@/lib/constants";
import { Roboto, Work_Sans } from 'next/font/google';
import { IoIosArrowDropdown } from "react-icons/io";

const work = Work_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function Project() {
  return(
    <div>
      <div className='w-full h-[55vh] relative'>
        <Image src={backgroundImage1} layout="fill" objectFit="cover" className="z-0" />
        <h1 className='absolute inset-0 flex items-center justify-center z-10 text-black text-center text-8xl font-extrabold'>APRES.<span className='text-8xl font-light'>productora</span></h1>
      </div>
      <div className='flex'>
        <div className='w-4/12 h-[30vh] border-r-2 border-b-2 '>
          {/* <div className='absolute inset-0 bg-black opacity-80 transition duration-300 ease-in-out z-10 group-hover:opacity-0'></div> */}
          <div className='flex h-full items-center justify-center relative z-20'>
            <h1 className='text-8xl font-bold group-hover:text-black duration-300'>{mock[0].label}</h1>
          </div>
        </div>
        <div className='w-8/12 h-[30vh] flex justify-center border-b-2 '>
          <div className='w-4/12 '>
            <Image src={backgroundImage2} layout="" objectFit="cover" className="h-full" />
          </div>
          <div className='w-4/12'>
            <Image src={backgroundImage1} layout="" objectFit="cover" className="h-full" />
          </div>
          <div className='w-4/12'>
            <Image src={backgroundImage3} layout="" objectFit="cover" className="h-full" />
          </div>
        </div>
      </div>
      <div className=' h-[10vh] flex items-center justify-center'>
        <IoIosArrowDropdown size={50} />
      </div>
    </div>
  )
}