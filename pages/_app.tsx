import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { RecoilRoot } from 'recoil';



function MyApp({ Component, pageProps : {session, ...pageProps}}: AppProps<{session: Session}>) {
  return (
  <SessionProvider session={session}>
    <RecoilRoot>
       <Component {...pageProps} />
    </RecoilRoot>
   
  </SessionProvider>
  
  );
}

export default MyApp;
