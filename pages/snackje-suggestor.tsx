import React, { useState, useEffect } from 'react';
import {Sonsie_One} from "@next/font/google";
import Head from "next/head";

interface Item {
    name: string;
    image: string;
}

const snacks: Item[] = [
    {
        name: 'Frikandel',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Frikandel-300x300.jpg',
    },
    {
        name: 'Kroket',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Kroket-Excellent_72dpi_1280x1280px_E_NR-161-300x300.jpg',
    },
    {
        name: 'Frikandel Speciaal',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/frikandel-soeciaal-300x300.jpg',
    },
    {
        name: 'Kaassoufle',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Kaassouflle-300x300.jpg',
    },
    {
        name: 'Bamischijf',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/bamiblokken-300x300.jpg',
    },
    {
        name: 'Nasischijf',
        image: 'https://cdn.shopify.com/s/files/1/0267/2266/4505/products/Nasischijf_300x300.jpg?v=1592039818',
    },
    {
        name: 'Mexicano',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Mexicano.jpg',
    },
    {
        name: 'Kipcorn',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/Kipkorn_1280x960px_E_NR-1681-300x300.jpg',
    },
    {
        name: 'Berenhap',
        image: 'https://www.cafetariacentrumgroesbeek.nl/wp-content/uploads/2020/04/berehap-300x300.jpg',
    },
    {
        name: 'Frikandelbroodje',
        image: 'https://www.degrootedelgebak.nl/1651-large_default/frikandelbroodje-met-currysaus.jpg'
    },
    {
        name: 'Patatje met',
        image: 'https://www.snackbarroma.nl/wp-content/uploads/2020/10/snackbarroma-foe_patat-en-menus_patat-met-min-300x300.jpg'
    },
    {
        name: 'Eierbal',
        image: 'https://deworstenwinkel.eu/wp-content/uploads/2021/06/eierbal.jpg'
    },
    {
        name: 'Kippenbout',
        image: 'https://i.imgur.com/a2iQGIe.png'
    }


];
const sonsieOne = Sonsie_One({ weight: '400', style: 'normal', subsets: ['latin'] })
const SlotMachine = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [isSpinning, setIsSpinning] = useState(true);

    useEffect(() => {
        if (isSpinning) {
            let spinCount = 0;

            const maxSpinCount = Math.floor(Math.random() * 40) + 20;
            const interval = setInterval(() => {
                spinCount++;
                setSelectedItemIndex((prevIndex) =>
                    prevIndex < snacks.length - 1 ? prevIndex + 1 : 0
                );

                if (spinCount >= maxSpinCount) {
                    clearInterval(interval);
                    setIsSpinning(false);
                }
            }, 100);

            return () => clearInterval(interval);
        }
    }, [isSpinning]);

    const reroll = () => {
        setIsSpinning(true);
    };

    const renderSnacks = () => {
        return snacks.map((snack, index) => (
            <div
                className={`transition-opacity duration-500 absolute w-full flex flex-col items-center justify-center opacity-0 ${selectedItemIndex === index ? 'selected opacity-100' : ''}`}
                key={index}
            >
                <img src={snack.image} alt={snack.name} className="w-4/5 h-auto" />
                <p className="mt-2 text-center font-bold text-lg">{snack.name}</p>
            </div>
        ));
    };

    return (
        <>
            <Head>
                <title>De Snackje Suggestor</title>
                <meta name="description" content="Is het eindelijk zo ver, komt de vraag van de eeuw: welke snack?" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`flex-none py-8 md:py-12 md:px-4 md:text-5xl text-4xl font-bold text-center`}>
                De <span className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy ${sonsieOne.className}`}>Snackje Suggestor</span>
            </div>
            <div className="flex flex-col items-center">
                <div className={`slot relative overflow-hidden bg-white w-[300px] h-[300px] border-4 border-yellow-400 ${isSpinning ? 'spinning' : ''}`}>
                    {renderSnacks()}
                </div>
                <button className="p-3 bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy border shadow-sm text-white text-lg font-semibold italic rounded mt-4" onClick={reroll}>
                    Ik wil een andere snack
                </button>
            </div>
        </>
    );
};

export default SlotMachine;
