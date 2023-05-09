import Link from 'next/link'



export default function Home()



{
  return (
    <main className='justify-center font-mono overflow-hidden'>
      <div className='bg-black w-screen z-10'>
        <h1 className='text-center text-5xl p-4'>
          SURA STUDIO
        </h1>
      </div>
      <div className='flex flex-row justify-center -z-10'>
        <div className="hover:translate-x-full hover:duration-1000  bg-[url('../public/img/escritorio_teclado.jpg')] h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-end">
          <Link href='/web' className='text-5xl p-4	text-black'>
            <h3>
              WEB →
            </h3>
          </Link>
        </div>
        <hr className='border-black border-2'/>
        <div className="hover:translate-x-96 hover:duration-1000	 bg-[url('../public/img/escritorio_camara.jpg')] h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-start">
          <Link href='/foto' className='text-5xl p-4 text-black'>
            <h3>
            ← FOTO
            </h3>
          </Link>
        </div>
      </div>
    </main>
  )
}


