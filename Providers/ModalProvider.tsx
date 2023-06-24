"use client"

import { useEffect, useState } from "react"

// import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types"
import AuthModal from "@/components/AuthModal"
import Modal from "@/components/Modal"
import UploadModal from "@/components/UploadModal"

// interface ModalProviderProps {
//   products: ProductWithPrice[]
// }
// React.FC<ModalProviderProps>
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AuthModal />

      {/* <SubscribeModal products={products} /> */}
      <UploadModal />
    </>
  )
}

export default ModalProvider
