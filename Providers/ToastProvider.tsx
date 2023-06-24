"use client"

import { Toaster } from "react-hot-toast"

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }}
    />
  )
}

export default ToastProvider
