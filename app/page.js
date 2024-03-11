import Image from 'next/image';
import logo from "../public/logo.png"
import { labelsHome, mock } from "@/lib/constants";
import { Roboto, Work_Sans } from 'next/font/google';
import backgroundImage1 from '../public/jeep-context-001.png'
import backgroundImage2 from '../public/bosque-context-001.png'
import backgroundImage3 from '../public/banker-context-001.png'
import Link from 'next/link';
import Form from '@/components/Form';
// import videoHome from "../public/banker.mp4"

const work = Work_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  
  const labelClass = " py-2 border-white border-2 rounded-full hover:bg-white hover:text-black font-light  duration-300 "
  
  return (
    <main className="flex min-h-screen flex-col items-center ">
      {/* <div className="h-[50vh] flex flex-col items-center justify-center relative">
        <h1 className='text-8xl font-semibold z-10'>APRES.<span className='text-8xl font-extralight'>productora</span></h1>
        <video autoPlay loop muted className="w-full h-2/3 object-cover filter grayscale hover:filter-none transition duration-300">          <source src="/banker.mp4" type="video/mp4" />
        </video>
      </div> */}
      {/* <div className="h-[50vh] flex flex-col items-center justify-center relative">
        <h1 className='text-8xl font-semibold z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          APRES.<span className='text-8xl font-extralight'>productora</span>
        </h1>
        <video autoPlay loop muted className="w-full h-2/3 object-cover filter grayscale hover:filter-none transition duration-300">
          <source src="/banker.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div> */}

      <div className="h-[50vh] w-full flex flex-col items-center justify-center relative">
        <div className='text-8xl font-semibold z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
          <h1>APRES.<span className='text-8xl font-extralight'>productora</span></h1>
          <div className='flex flex-col items-center mt-8 pointer-events-none'>
            <div className='flex gap-4 items-center justify-center mb-2 pointer-events-none'>
              <h2 className='text-sm border-r-2 p-2 pointer-events-auto'>Eventos y experiencias</h2>
              <h2 className='text-sm pointer-events-auto'>Producciones 360</h2>
              <h2 className='text-sm border-l-2 p-2 pointer-events-auto'>Activaciones BTL</h2>
            </div>
            <h2 className='text-sm flex items-center pointer-events-auto'>Based in Patagonia  <Link href={"/"} className='ml-2 '> |  Contact us!</Link></h2>
          </div>
        </div>
        <video autoPlay loop muted className="w-full h-full object-cover filter grayscale hover:filter-none transition duration-300">
          <source src="/banker.mp4" type="video/mp4" />
        </video>
      </div>


      {/* <div className="w-[800px] flex flex-wrap mx-auto gap-4 items-center py-8">
        <div className="w-full text-center px-4 py-2 rounded-full border-2 hover:bg-white hover:text-black font-  duration-300 ">
          <h2 className=''>{labelsHome[0].label}</h2>
        </div>
        <div className='flex w-full gap-4 '>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[1].label}</h2>
          </div>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[2].label}</h2>
          </div>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[3].label}</h2>
          </div>
          
        </div>
        <div className='flex w-full gap-4'>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[6].label}</h2>
          </div>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[7].label}</h2>
          </div>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[4].label}</h2>
          </div>
          <div className={`${labelClass} w-full text-center `}>
            <h2>{labelsHome[5].label}</h2>
          </div>
        </div>
        <div className="w-full bg-white text-center text-black font-bold px-4 py-2 rounded-full border-2 hover:bg-black hover:text-white duration-300 hover:text-lg  ">
          <h2>{labelsHome[8].label}</h2>
        </div>
      </div> */}

        <div className="w-screen flex h-auto border-2 border-white">
          <div className='w-4/12 h-[40vh] border-r-2 border-b-2 relative group'>
            <Image src={backgroundImage1} layout="fill" objectFit="cover" className="z-0" />
            <div className='absolute inset-0 bg-black opacity-80 transition duration-300 ease-in-out z-10 group-hover:opacity-0'></div>
            <Link href={"/projects/jeep"} className='flex h-full items-center justify-center relative z-20'>
              <h1 className='text-8xl font-bold group-hover:text-black duration-300'>{mock[0].label}</h1>
            </Link>
          </div>
          <div className='w-8/12 flex flex-col justify-center border-b-2'>
            <h1 className={` text-6xl text-center border-b-4 py-4 ${work.className}`}>EXPERIENCIA JEEP GLADIATOR</h1>
            <p className='pt-4 px-10 '>En medio de la majestuosidad natural de la ruta de los 7 lagos, nos aventuramos hacia nuestro destino final en el <a className='uppercase border-b-2 '>@lagohermososki</a>, donde la naturaleza se despliega en su máximo esplendor. Cada curva nos presenta una nueva sorpresa, con vistas impresionantes que cautivan nuestros sentidos y nos invitan a explorar más allá de lo conocido. Es un viaje donde la aventura se entrelaza con la belleza, creando recuerdos que perdurarán en nuestro corazón.</p>
            <h2 className='px-10'>Feat: <a>@btlandia</a></h2>
          </div>
        </div>
      
      <div className="w-screen flex h-auto ">
        <div className='flex h-[40vh] '>
          
          
          <div className='w-8/12 flex flex-col justify-center border-b-2'>
            <h1 className={` text-6xl text-center border-b-4 py-4 uppercase ${work.className}`}>Lanzamiento de Producto</h1>
            <p className='pt-4 px-10 '>Celebramos el lanzamiento de  <a className='uppercase border-b-2 '>@bosquegin</a> en Villa La Angostura con un vibrante after lake. La música y los DJs en vivo acompañaron la degustación de este gin tan patagónico y sus aromáticas notas. Sumergidos en la atmósfera de los lagos, los invitados exploraron los sabores únicos mientras se deleitaban con la majestuosidad natural que rodea cada momento de esta experiencia inolvidable.</p>
          </div>

          <div className='w-4/12 border-l-2 border-b-2 relative group'>
            <Image src={backgroundImage2} layout="fill" objectFit="cover" className="z-0" />
            <div className='absolute inset-0 bg-black opacity-80 transition duration-300 ease-in-out z-10 group-hover:opacity-0'></div>
            <Link href={"projects/bosque"} className='flex h-full items-center justify-center relative z-20'>
              <h1 className='text-8xl font-bold group-hover:text-black duration-300'>{mock[1].label}</h1>
            </Link>
          </div>
        </div>

      </div>
        <div className="w-screen flex h-auto border-2 border-white">
          <div className='w-4/12 border-r-2 border-b-2 relative group'>
            <Image src={backgroundImage3} layout="fill" objectFit="cover" className="z-0" />
            <div className='absolute inset-0 bg-black opacity-80 transition duration-300 ease-in-out z-10 group-hover:opacity-0'></div>
            <Link href={"projects/coldwell-banker"} className='flex flex-col h-full items-center justify-center relative z-20 group-hover:text-black duration-300'>
              <h1 className='text-4xl font-bold '>{mock[2].label}</h1>
              <h2 className='text-2xl font-light'>{mock[2].copete}</h2>
            </Link>
          </div>
          <div className='w-8/12 flex flex-col justify-center border-b-2 pb-4'>
            <h1 className={` text-6xl text-center border-b-4 py-4 uppercase ${work.className}`}>Open House La Ñusta</h1>
            <p className='pt-4 px-10 '>En medio de la majestuosidad natural de la ruta de los 7 lagos, nos aventuramos hacia nuestro destino final en el <a className='uppercase border-b-2 '>@lagohermososki</a>, donde la naturaleza se despliega en su máximo esplendor. Cada curva nos presenta una nueva sorpresa, con vistas impresionantes que cautivan nuestros sentidos y nos invitan a explorar más allá de lo conocido. Es un viaje donde la aventura se entrelaza con la belleza, creando recuerdos que perdurarán en nuestro corazón.</p>
          </div>
        </div>
      <Form />

    </main>
  );
}

// import Image from "next/image";
// import logo from "../public/logo.png"
// import { labelsHome } from "@/lib/constants";


// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-end   ">
//       <div>
//         <Image src={logo} width={300} height={200} style={logoStyle} />
//       </div>
//       <div className="w-[700px] flex flex-wrap mx-auto gap-4 p-8 items-center " >
//         {
//           labelsHome.map((label) => (
//             <div className=" px-4 py-2 border-white border-2 rounded-full ">
//               <h2>
//                 {label.label}
//               </h2>
//             </div>
//           ))
//         }
//       </div>
//       <div className="w-[800px] h-[60vh] border-2 border-white ">
//       </div>
//     </main>
//   );
// }

// Que hacemos?
// Eventos
// Brand 
// Experience
// Activaciones BTL
// Branding
// Produccion
// Planning
// PR
// Contactanos!