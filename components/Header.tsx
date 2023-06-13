"use client"
import { useRouter } from "next/router"
import React from "react"
import { twMerge } from "tailwind-merge"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

export default function Header({ children, className }: HeaderProps) {
  //   const router = useRouter()
  const handleLogout = () => {
    // router.push("/api/auth/logout")
  }
  return (
    <div
      className={twMerge(
        `
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
   
    `,
        className
      )}
    >
      <div className='w-full md-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>{children}</div>
      </div>
    </div>
  )
}
