'use client'
import Task from '../components/Task'
import Navigation from '../components/Navigation'


export default function Home() {
  return (
    <>
      <Navigation/>
      <main className='w-full h-screen flex flex-col items-center py-4'>

        <section className='w-full md:w-6/12 bg-white'>
          <div className='w-full'>
            <p className='text-left'>
              I am Ugorji Eze Victor, a HNG-12 intern in the Front-end track stage 4. At about 12pm 3rd Mar 2025, I was isolated and exiled to Mexico over my conduct towards a HNG mentor
              KEHLANI. My choice of words were offensive and certainly is not a reflection of who I am. Having had time to reflect, I now see the error in my ways and draw caution, hence, 
              I do hereby apologize to the said mentor for my choice of words. I do promise to be of best conduct for the rest of the program and also exercise caution in my choice of words if pardoned.
              I would appreciate if my apology were accepted and collectively we treat today&apos;s incident as a thing of the past. Thanks for your kind consideration.
            </p>
          </div>

          <Task/>
        </section>

      </main>
    </>
  );
}
