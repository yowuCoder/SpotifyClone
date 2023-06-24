"use client"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, className, type = "button", ...props }, ref) => {
    return (
      <button
        className={twMerge(
          `
                w-full
                rounded-full
                bg-green-500
                text-black
                border
                botder-transparent
                px-3
                py-3
                disabled:opacity-50
                disabled:cursor-not-allowed
                hover:opacity-80
                transition
                font-bold
                `,
          className
        )}
        disabled={disabled}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

// const Button = ({ children, onClick }: ButtonProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className='bg-black text-white rounded-md p-2 px-4'
//     >
//       {children}
//     </button>
//   )
export default Button
