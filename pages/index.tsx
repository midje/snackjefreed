import Head from 'next/head'
import { Sonsie_One, Inter } from '@next/font/google'
const sonsieOne = Sonsie_One({ weight: '400', style: 'normal', subsets: ['latin'] })
const inter = Inter({ weight: ['400', '700', '800'], style: 'normal', subsets: ['latin'] })

export default function Home() {
    const isFriday = (new Date()).getDay() === 5;

    return (
        <>
            <Head>
                <title>Is het al Snackje Freed?</title>
                <meta name="description" content="Is het alweer tijd voor het beste moment van de week: Snackje Freed" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`h-screen flex content-center flex-col ${inter.className}`}>
                <div className={`flex-none py-8 md:py-12 md:px-4 md:text-5xl text-4xl font-bold text-center`}>
                    Is het al <span className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy ${sonsieOne.className}`}>Snackje Freed</span>?
                </div>
                <div className="grow  text-center flex justify-center items-center">
                    <div>
                        {isFriday ? <>
                            <div className="text-7xl md:text-9xl text-green-600 font-extrabold uppercase text-center py-4">JA!</div>
                            <div className="text-xl md:text-3xl text-center">🍕 🍖 🍗 🍔 🍟</div>
                        </> : <>
                            <div className="text-7xl md:text-9xl text-red-600 font-extrabold uppercase text-center py-4">Nee</div>
                            <div className="text-xl md:text-3xl font-bold text-center">Vandaag helaas geen snack :(</div>
                        </>}
                    </div>
                </div>
                <p className="flex-none text-lg md:text-xl italic text-center m-4 md:m-8">Een creatie van  <a
                    href="https://midje.nl/?ref=snackjefreed" className="underline">team Midje</a></p>
            </main>

        </>
    )
}
