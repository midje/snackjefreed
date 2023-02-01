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
                <div className={`flex-none py-12 px-4 text-5xl font-bold text-center`}>
                    Is het al <span className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy ${sonsieOne.className}`}>Snackje Freed</span>?
                </div>
                <div className="grow text-9xl text-center flex justify-center items-center">
                    <div>
                        {isFriday ? <>
                            <div className="text-12xl text-green-600 font-extrabold uppercase text-center py-4">JA!</div>
                            <div className="text-4xl text-center">🍕 🍖 🍗 🍔 🍟  </div>
                        </> : <>
                            <div className="text-12xl text-red-600 font-extrabold uppercase text-center py-4">Nee</div>
                            <div className="text-3xl  font-bold text-center">Vandaag helaas geen snack :(</div>
                        </>}
                    </div>
                </div>
                <p className="flex-none text-xl italic text-center m-8">Een creatie van  <a
                    href="https://midje.nl/?ref=snackjefreed" className="underline">team Midje</a></p>
            </main>

        </>
    )
}
