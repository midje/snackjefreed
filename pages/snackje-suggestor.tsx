import React, { useState, useEffect } from 'react';
import { Sonsie_One } from 'next/font/google';
import Head from 'next/head';

interface Item {
    name: string;
    image: string;
}

const snacks: Item[] = [
    {
        name: 'Frikandel',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Frikandel-300x300.jpg',
    },
    {
        name: 'Kroket',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Kroket-Excellent_72dpi_1280x1280px_E_NR-161-300x300.jpg',
    },
    {
        name: 'Frikandel Speciaal',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/frikandel-soeciaal-300x300.jpg',
    },
    {
        name: 'Kaassoufle',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Kaassouflle-300x300.jpg',
    },
    {
        name: 'Bamischijf',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/bamiblokken-300x300.jpg',
    },
    {
        name: 'Nasischijf',
        image:
            'https://cdn.shopify.com/s/files/1/0267/2266/4505/products/Nasischijf_300x300.jpg?v=1592039818',
    },
    {
        name: 'Mexicano',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Mexicano.jpg',
    },
    {
        name: 'Kipcorn',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Kipkorn_1280x960px_E_NR-1681-300x300.jpg',
    },
    {
        name: 'Berenhap',
        image:
            'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/berehap-300x300.jpg',
    },
    {
        name: 'Broodje Bal',
        image:
            'https://www.snackbarroma.nl/wp-content/uploads/2020/10/snackbarroma-foe_broodjes_broodje_bal.jpg',
    },
    {
        name: 'Frikandelbroodje',
        image:
            'https://www.degrootedelgebak.nl/1651-large_default/frikandelbroodje-met-currysaus.jpg',
    },
    {
        name: 'Patatje met',
        image:
            'https://www.snackbarroma.nl/wp-content/uploads/2020/10/snackbarroma-foe_patat-en-menus_patat-met-min-300x300.jpg',
    },
    {
        name: 'Eierbal',
        image: 'https://deworstenwinkel.eu/wp-content/uploads/2021/06/eierbal.jpg',
    },
    {
        name: 'Kippenbout',
        image: 'https://i.imgur.com/a2iQGIe.png',
    },
    {
        name: 'Pizza Tosti',
        image: 'https://i.imgur.com/bfPwdKF.png',
    },
    {
        name: 'Kibbeling',
        image: 'https://i.imgur.com/F8jf6gF.png',
    },
    {
        name: 'Broodje Visstick',
        image: 'https://i.imgur.com/OUeI2LY.png',
    },
    {
        name: 'Broodje Knak',
        image: 'https://i.imgur.com/zreCpE5.png',
    },
    {
        name: 'Saucijzenbroodje',
        image:
            'https://bergjetricht.nl/image/cache/data/vlees-afbeeldingen/saucijzenbroodje-600x600.png',
    },
    {
        name: 'Kaasbroodje',
        image:
            'https://www.bakkerijkwakman.nl/wp-content/uploads/2021/03/Kaasbroodje-de-echte-bakker-Kwakman.png',
    },
    {
        name: 'Broodje Frikandel',
        image: 'https://www.t-hepke.nl/wp-content/uploads/2020/04/broodje_frikandel.png',
    },
    {
        name: 'Broodje Kroket',
        image: 'https://kwekkeboom.amsterdam/wp-content/uploads/2019/10/broodje-kroket.jpg',
    },
    {
        name: 'Broodje Hamburger',
        image:
            'https://www.okokorecepten.nl/i/recepten/kookboeken/2014/jamies-comfort-food/jamie-oliver-hamburger-500.jpg',
    },
    {
        name: 'Broodje Bajesbal',
        image: 'https://i.imgur.com/Sy4kOLo.png',
    },
    {
        name: 'Runder gehaktbal',
        image:
            'https://files.vomar.nl/articles/Vomar-Runder-Gehaktbal-Rund-4-Stuks-2230590000000-1-638007338175938892.png',
    },
    {
        name: 'Groente loempia',
        image:
            'https://www.laurasbakery.nl/wp-content/uploads/2020/10/Vegetarische-mini-loempias-uitgelicht.jpg',
    },
    {
        name: 'Bagel',
        image: 'https://i.imgur.com/TlAuX66.png',
    },
    {
        name: 'Macaroni uit de wasbak',
        image: 'https://i.imgur.com/QcqCcOM.png',
    },
];
const sonsieOne = Sonsie_One({ weight: '400', style: 'normal', subsets: ['latin'] });

interface ReelProps {
    isSpinning: boolean;
    resultIndex: number;
    duration: number;
    reelIndex: number;
}

const Reel: React.FC<ReelProps> = ({ isSpinning, resultIndex, duration, reelIndex }) => {
    const [animationStyle, setAnimationStyle] = useState<React.CSSProperties>({});
    const [keyframes, setKeyframes] = useState<string>('');
    const imageHeight = 200; // Adjust the image height as needed
    const repetitions = 5; // Number of times the snacks are repeated to simulate spinning

    // Repeat the snacks to create a long reel
    const repeatedSnacks: Item[] = [];
    for (let i = 0; i < repetitions; i++) {
        repeatedSnacks.push(...snacks);
    }

    useEffect(() => {
        if (isSpinning) {
            // Reset the animation
            setAnimationStyle({});
            setKeyframes('');

            // Delay to allow the reset to take effect
            setTimeout(() => {
                // Calculate the offset to stop at the correct snack
                const stopOffset = -((snacks.length * (repetitions - 1) + resultIndex) * imageHeight);

                // Unique keyframe name for each reel to prevent conflicts
                const keyframeName = `spinAnimation${reelIndex}-${Date.now()}`;

                // Define keyframes for the spinning animation
                const keyframes = `
          @keyframes ${keyframeName} {
            0% { transform: translateY(0); }
            100% { transform: translateY(${stopOffset}px); }
          }
        `;
                setKeyframes(keyframes);

                // Reel animation style
                const reelStyle: React.CSSProperties = {
                    animation: `${keyframeName} ${duration}ms cubic-bezier(0.5, 0, 0.5, 1) forwards`,
                };
                setAnimationStyle(reelStyle);
            }, 50);
        } else {
            // When not spinning, set the position to the result
            const stopOffset = -((snacks.length * (repetitions - 1) + resultIndex) * imageHeight);
            const reelStyle: React.CSSProperties = {
                transform: `translateY(${stopOffset}px)`,
            };
            setAnimationStyle(reelStyle);
            setKeyframes(''); // Clear keyframes
        }
    }, [isSpinning, duration, reelIndex, resultIndex]);

    return (
        <>
            <style>{keyframes}</style>
            <div className="reel-container overflow-hidden h-[200px] w-[200px] border-4 border-yellow-400">
                <div className="reel-content" style={animationStyle}>
                    {repeatedSnacks.map((snack, index) => (
                        <div key={index} className="flex items-center justify-center h-[200px]">
                            <img src={snack.image} alt={snack.name} className="h-[150px] w-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const SlotMachine: React.FC = () => {
    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [resultIndex, setResultIndex] = useState<number>(0);
    const [reelDurations, setReelDurations] = useState<number[]>([0, 0, 0]);

    const spinReels = () => {
        // Generate a single random result for all reels
        const randomSnackIndex = Math.floor(Math.random() * snacks.length);
        setResultIndex(randomSnackIndex);

        // Random durations for each reel to stop
        const durations = [
            2000 + Math.random() * 1000,
            2300 + Math.random() * 1000,
            2500 + Math.random() * 1000,
        ];
        setReelDurations(durations);

        // Start spinning
        setIsSpinning(true);

        // Schedule stopping the spinning
        const maxDuration = Math.max(...durations);
        setTimeout(() => {
            setIsSpinning(false);
        }, maxDuration);
    };

    useEffect(() => {
        // Start the slot machine on initial load
        spinReels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Head>
                <title>De Snackje Suggestor</title>
                <meta
                    name="description"
                    content="Is het eindelijk zo ver, komt de vraag van de eeuw: welke snack?"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`flex-none py-8 md:py-12 md:px-4 md:text-5xl text-4xl font-bold text-center`}
            >
                De{' '}
                <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy ${sonsieOne.className}`}
                >
          Snackje Suggestor
        </span>
            </div>
            <div className="flex flex-col items-center">
                <div className="slot-machine flex bg-white">
                    {[0, 1, 2].map((index) => (
                        <Reel
                            key={index}
                            isSpinning={isSpinning}
                            resultIndex={resultIndex}
                            duration={reelDurations[index]}
                            reelIndex={index}
                        />
                    ))}
                </div>
                <button
                    className="p-6 bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy border shadow-sm text-white text-xl font-semibold italic rounded mt-4"
                    onClick={spinReels}
                    disabled={isSpinning}
                >
                    Ik wil een andere snack
                </button>

                <p className="flex-none mt-12 italic text-center m-4 md:m-8">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe6_-bglUQ15bEuzK2neljmlqhRGG8mFol0t68x5x3lWnjmPw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Stuur je snack in!
                    </a>
                </p>
            </div>
        </>
    );
};

export default SlotMachine;