import React from 'react'
import JoinRoom from "@/components/join-room"

const HomePage = () => {
    return (
        <main className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
            <div className="flex flex-col items-center justify-center h-full px-4 gap-12">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold !leading-snug bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 text-transparent bg-clip-text drop-shadow-lg">
                        Connect with friends and colleagues
                    </h1>
                    <p className="text-zinc-700 text-lg max-w-md mx-auto mt-4 font-medium">
                        Bring your team or friends closer with effortless voice and video calls
                    </p>
                </div>
                <JoinRoom />
            </div>
        </main>
    )
}

export default HomePage
