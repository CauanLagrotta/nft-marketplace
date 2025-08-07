"use client";

import LoadSpinner from "@/components/common/LoadSpinner";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NFT } from "@/lib/interface";
import { mockNFTs } from "@/lib/data";
import NFTCard from "@/components/NFTCard";

function MarketPlacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        setTimeout(() => {
          setNfts(mockNFTs);
        }, 1000);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNFTs();
  }, []);

  const filteredNFTs = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-xl font-bold text-white mb-6">Marketplace</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search NFTs..."
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              All Items
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Art
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Collectibles
            </button>
          </div>
        </div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center py-20 ">
          <LoadSpinner size="lg" />
        </div>
      ) : filteredNFTs?.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <h3 className="text-xl text-white mb-2">No NFTs found</h3>
          <p className="text-gray-400">
            {searchTerm ? "Try a different search term" : "No NFTs listed yet"}
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredNFTs.map((nft, index) => (
            <NFTCard key={index} nft={nft} index={index} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default MarketPlacePage;
