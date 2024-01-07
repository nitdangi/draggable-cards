import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({cardData, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative flex-shrink-0 w-60 h-72 rounded-[44px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-xs leading-tight mt-5 font-semibold'>{cardData.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-3 px-8'>
                <h5>{cardData.fileSize}</h5>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {cardData.close ? <IoClose size=".8em" color='#fff'/> : <LuDownloadCloud size=".8em" color='#fff'/>}
                </span>
            </div>
            { cardData.tag.isOpen && (
                <div className={`tag w-full py-4 ${cardData.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex text-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{cardData.tag.tagTitle}</h3>
                </div>
            )} 
        </div>
    </motion.div>
  )
}

export default Card