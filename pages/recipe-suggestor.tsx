
import React, { useState, useEffect } from 'react';
import { Sonsie_One } from "next/font/google";
import Head from "next/head";

interface Recipe {
    id: string;
    name: string;
    image_url: string;
    url?: string;
}

const BASE_URL = "https://flavourspot.nl/api";
const apiGet = (endpoint: string): string => {
  return BASE_URL + endpoint;
}

const recipes: Recipe[] = [];
const sonsieOne = Sonsie_One({ weight: '400', style: 'normal', subsets: ['latin'] })

const SlotMachine = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    fetch(apiGet('/recipes?image=true&;limit=50'))
      .then(response => response.json())
      .then(data => {
        data.map((recipe: Recipe) => {
          recipes.push({
            id: recipe.id,
            name: recipe.name,
            image_url: recipe.image_url,
            url: 'https://flavourspot.nl/recipe/' + recipe.id,
          });
        });
        setIsSpinning(true);
      });
  }, []);

  useEffect(() => {
    if (isSpinning) {
      let spinCount = 0;

      const maxSpinCount = Math.floor(Math.random() * 50) + recipes.length;
      const interval = setInterval(() => {
        spinCount++;
        setSelectedItemIndex((prevIndex) =>
          prevIndex < recipes.length - 1 ? prevIndex + 1 : 0
        );

        if (spinCount >= maxSpinCount) {
          clearInterval(interval);
          setIsSpinning(false);
        }
      }, 90);

      return () => clearInterval(interval);
    }
  }, [isSpinning]);


  const reroll = () => {
    setIsSpinning(true);
  };

  const renderRecipes = () => {
    return recipes.map((recipe, index) => (
      <div
        className={`transition-opacity duration-500 absolute w-full h-full flex flex-col items-center justify-start opacity-0 ${selectedItemIndex === index ? 'selected opacity-100' : ''}`}
        key={index}
      >

        <img src={recipe.image_url} alt={recipe.name} className="w-full h-5/6 object-cover object-center" />
        <p className="mt-2 text-center font-bold text-lg">{recipe.name}</p>
      </div >
    ));
  };

  return (
    <>
      <Head>
        <title>De FlavourSpot Recept Suggestor</title>
        <meta name="description" content="Is het eindelijk zo ver, komt de vraag van de eeuw: welke snack?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex-none pt-8 md:pt-12 md:px-4 md:text-5xl text-4xl font-bold text-center`}>
        De <span className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy ${sonsieOne.className}`}>Recept Suggestor</span>
      </div>
      <div className={`flex-none pb-8 md:pb-12 md:px-4 md:text-lg text-xl font-bold text-center`}>
        Powered by <a href="https://flavourspot.nl?ref=snackjefreed" target="_blank" className={`text-rose-600`}>FlavourSpot</a>
      </div>
      <div className="flex flex-col items-center">
        <div className={`slot relative overflow-hidden bg-white w-[300px] h-[300px] border-4 border-yellow-400 ${isSpinning ? 'spinning' : ''}`}>
          {renderRecipes()}
        </div>
        <button className="p-6 bg-gradient-to-r from-red-500 to-green-600 via-yellow-400 animate-gradient-xy border shadow-sm text-white text-xl font-semibold italic rounded mt-4" onClick={reroll}>
          Ik wil een ander recept
        </button>
      </div>
    </>
  );
};

export default SlotMachine;
