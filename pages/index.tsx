import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar';
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <h1>This is a DOPE spotify 2.0 build</h1>

      <main>
        {/* Sidebar */}
        <Sidebar/>
        {/* Center */}
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}

export default Home
