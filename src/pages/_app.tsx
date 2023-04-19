import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Navbar, SocialMedia } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RobôCIn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar/>
        <SocialMedia/>
        <Component {...pageProps} />
      </main>
    </>
  );
}
