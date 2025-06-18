// import React from 'react'

import { useNavigate } from "react-router-dom"
import Button from "../components/Button";

const Landing = () => {
    const navigate = useNavigate();
  return (
    
    <div className="flex justify-center">
    <div className = "pt-8 max-w-screen-lg">
        <div className = "grid grid-cols-1  gap-16 md:grid-cols-2">
            <div className="flex justify-center">
                <img src="/chessboard.jpeg" alt="Chess Board" className="max-w-96" />
            </div>
                <div className="pt-16">
                    <div>
                    <h1 className="text-4xl font-bold text-white">
                    Welcome to <b><i>Chessly</i> </b> 
                    </h1>
                    <b><h2 className="text-lg mt-5 text-white pl-15">
                    Play Chess with your friends
                    </h2></b>
                    </div>
                    <div className="mt-11 flex justify-center ">
                        <Button    onClick={() => {
                            navigate("/game")
                        }} >
                            Play Online
                        </Button>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Landing