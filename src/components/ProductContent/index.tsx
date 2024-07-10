import React from 'react';
import { FaOpencart } from 'react-icons/fa';

export default function ProductContent() {
  return (
    <div className="flex w-3/6 flex-col bg-white justify-evenly rounded-tr-lg rounded-br-lg pl-4 pr-10">
      <p className="product-type text-start font-serif text-sm">Perfume</p>

      <p className="product-title capitalize text-4xl font-channelFont font-black">
        gabrielle essence eau de parfum
      </p>

      <p className="text-sm font-thin">
        A floral, solar and voluptuous interpretation composed by Krysthopher
        Ruiz alias puchini, Perfume-Creator for the house of Enchilada.
      </p>

      <div className="flex w-full justify-between pr-4">
        <p className="font-channelFont text-2xl text-orange-700 font-black italic">
          $200.99
        </p>
        <p className="text-sm line-through pt-1 text-gray-400 font-channelFont">
          $250.99
        </p>
      </div>

      <button className="bg-orange-600 font-channelFont font-semibold w-5/6 mx-auto p-2 rounded-lg flex items-center place-content-center gap-2">
        <FaOpencart />
        Comprame
      </button>
    </div>
  );
}
