"use client"

import React from "react"
import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"
export default function Library() {
  const onClick = () => {
    console.log("hi")
  }
  return (
    <div className='flex flex-col'>
      <div
        className='flex
    items-center
    justify-between
    px-5
    pt-4
    '
      >
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist className='text-netual-400 ' />
          <p className='text-netual-400 font-medium text-md'>Playlists</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className='text-netual-400 cursor-pointer hover:text-white transition'
        />
      </div>
      <div className='flex flex-col gay-y-2 mt-4 px-3'>list of songs</div>
    </div>
  )
}
