import { Collection } from "@/lib/interface";
import React from "react";
import Image from "next/image";
import { BsFillAwardFill } from "react-icons/bs";

const CollectionListCard = ({ collection }: { collection: Collection }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
      <div className="flex items-center p-4">
        <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4">
          <Image
            src={collection.image}
            alt={collection.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          {collection.verified && (
            <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
              <BsFillAwardFill />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">{collection.name}</h3>
            <span className="bg-purple-600 text-white px-2 py-1 rounded-md text-xs">
              {collection.floorPrice} ETH floor
            </span>
          </div>
          <p className="text-gray-400 text-sm">by {collection.creator}</p>
        </div>
        <div className="hidden md:flex text-right ml-8">
          <div className="mr-8">
            <p className="text-gray-500 text-sm">Items</p>
            <p className="text-white">{collection.items.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Volume</p>
            <p className="text-white">
              {collection.volume.toLocaleString()} ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionListCard;
