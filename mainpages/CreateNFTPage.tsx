"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegImage } from "react-icons/fa6";
import AnimatedButton from "@/components/common/AnimatedButton";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const CreateNFTPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      setTimeout(() => {
        console.log("NFT created: ", formData);
        setIsUploading(false);
        toast.success("NFT created successfully", { theme: "colored" });

        setFormData({
          name: "",
          description: "",
          price: "",
          image: null,
        });
        setPreview("");
      }, 2000);
    } catch (error) {
      setIsUploading(false);
      console.error(error);
      toast.error("Failed to create NFT", { theme: "colored" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Create new NFT</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Upload Media
          </h2>

          <div className="border-2 border-dashed border-gray-700 text-center rounded-lg p-8 cursor-pointer">
            {preview ? (
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={preview}
                  alt="preview"
                  width={500}
                  height={500}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <FaRegImage className="mx-auto text-6xl text-gray-400" />

                <p className="text-gray-400 ">
                  PNG, GIF, WEBP, MP4, or AVI. Max 100MB
                </p>
              </div>
            )}

            <label className="mt-4 inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
              Choose file
              <input
                type="file"
                className="hidden"
                accept="image/*,video/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-4">NFT Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Price (ETH)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="0.01"
                step="0.01"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>
        </motion.div>

        <div className="flex justify-end ">
          <AnimatedButton
            type="submit"
            disabled={isUploading || !formData.image}
            className="px-8 py-3"
          >
            {isUploading ? (
              <span className="">
                <FaSpinner className="animate-spin" />
                Creating...
              </span>
            ) : (
              "Create NFT"
            )}
          </AnimatedButton>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateNFTPage;
