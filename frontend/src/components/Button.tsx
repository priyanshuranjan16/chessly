// import React from 'react'

const Button = ({ onClick, children}:  {onClick: () => void, children: React.ReactNode}) => {
  return (
    <div>
        <button onClick={ onClick} className="bg-green-500 hover:bg-green-800 text-white font-bold py-4 px-6 rounded cursor: cursor-pointer">
                {children}
        </button>
    </div>
  )
}

export default Button