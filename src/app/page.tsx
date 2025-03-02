'use client'
import Task from '../components/Task'
import Navigation from '../components/Navigation'


export default function Home() {
  return (
    <>
      <Navigation/>
      <main className='w-full h-screen flex justify-center py-4'>
        <section className='w-full md:w-6/12 bg-white'>
          <Task/>
        </section>
      </main>
    </>
  );
}
