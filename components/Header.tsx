"use client"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react"
import { useUser } from "@/hooks/useUser"
import { FaUserAlt } from "react-icons/fa"
import { toast } from "react-hot-toast"
interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const supabaseClient = useSupabaseClient()
  const { session } = useSessionContext()
  const authModal = useAuthModal()
  const router = useRouter()
  const { user } = useUser()
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    router.refresh()
    if (error) {
      toast.error(error.message)
      // console.log(error)
    } else {
      toast.success("Logout success")
    }
  }
  // useEffect(() => {
  //   if (session) {
  //     router.refresh()
  //     authModal.onClose()
  //   }
  // }, [session, router])
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
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            hover:opcitiy-80
            transition
          '
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='
         rounded-full
         bg-black
         flex
         items-center
         justify-center
         hover:opcitiy-80
         transition
       '
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button
            className='
          rounded-full
          p-2
          bg-white
          flex
          items-center
          justify-center
          hover:opcitiy-80
          transition
          '
          >
            <HiHome className='text-black' size={35} />
          </button>
          <button
            className='
          rounded-full
          p-2
          bg-white
          flex
          items-center
          justify-center
          hover:opcitiy-80
          transition
          '
          >
            <BiSearch className='text-black' size={35} />
          </button>
        </div>
        <div className='flex justify-between item-center gap-x-4'>
          {user ? (
            <div className='flex gap-x-4 items-cneter'>
              <Button className='bg-white px-6 py-2' onClick={handleLogout}>
                Logout
              </Button>
              <Button
                onClick={() => router.push(`/account`)}
                className='bg-white px-6 py-2'
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className='bg-transparent text-netral-300 font-medium'
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className='bg-white px-6 py-2'
                >
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
