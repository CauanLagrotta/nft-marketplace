import { Collection } from "@/lib/interface";
import React from "react";
import { BsFillAwardFill } from "react-icons/bs";
import Image from "next/image";

const CollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <div className="bg-gray-800 mt-7 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={collection.image}
          alt={collection.name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        {collection.verified && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full">
            <BsFillAwardFill />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{collection.name}</h3>
          <span className="bg-purple-600 text-white px-2 py-1 rounded-md text-xs">
            {collection.floorPrice} ETH floor
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-3">by {collection.creator}</p>
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-500">Items</p>
            <p className="text-white">{collection.items.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Volume</p>
            <p className="text-white">
              {collection.volume.toLocaleString()} ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
