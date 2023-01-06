import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';
import Player from '../components/Player';
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className="flex">
        <Sidebar/>
        <Center />
      </main>
      <div className="sticky bottom-0">
        {/* Player */}
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
export default Home
