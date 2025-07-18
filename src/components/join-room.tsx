"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Video, Users } from "lucide-react";

const JoinRoom = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [roomId, setRoomId] = useState("");

    const generateRoomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const handleCreateNewRoom = () => {
        router.push(`/room/${generateRoomId()}`);
    };

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && roomId) {
            router.push(`/room/${roomId}?username=${encodeURIComponent(username)}`);
        }
    };

    return (
        <div className="max-w-md w-full mx-auto bg-white/80 rounded-xl shadow-xl border border-gray-200 p-8 mt-16">
            <form onSubmit={handleJoin} className="space-y-8">
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-blue-400 drop-shadow" />
                        <label htmlFor="username" className="text-sm font-semibold text-gray-700">
                            Your name
                        </label>
                    </div>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="px-4 h-10 rounded-md border border-blue-200 focus:outline-none focus:border-purple-500 w-full bg-white/90 shadow-sm transition-all duration-200"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <Video className="w-5 h-5 text-purple-400 drop-shadow" />
                        <label htmlFor="roomId" className="text-sm font-semibold text-gray-700">
                            Room ID
                        </label>
                    </div>
                    <input
                        id="roomId"
                        type="number"
                        placeholder="Enter room ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        className="px-4 h-10 rounded-md border border-purple-200 focus:outline-none focus:border-blue-500 w-full bg-white/90 shadow-sm transition-all duration-200"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={!username || !roomId}
                    className="w-full h-10 rounded-md text-white font-semibold cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200"
                >
                    Join Room
                </button>

                <button
                    type="button"
                    onClick={handleCreateNewRoom}
                    className="w-full h-10 rounded-md text-blue-500 font-semibold cursor-pointer hover:text-purple-600 bg-white/70 border border-blue-100 mt-2 shadow transition-all duration-200"
                >
                    or create a new room
                </button>
            </form>
        </div>
    );
};

export default JoinRoom;