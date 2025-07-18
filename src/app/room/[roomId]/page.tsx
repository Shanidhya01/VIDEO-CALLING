import VideoCall from "@/components/video-call";

interface Props {
    params: Promise<{
        roomId: string;
    }>;
}

const Room = async ({ params }: Props) => {

    const { roomId } = await params;

    if (!roomId) {
        return (
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
                <div className="text-center p-10 rounded-2xl shadow-2xl bg-white/90 border border-purple-200 backdrop-blur-md">
                    <h1 className="text-4xl font-extrabold text-purple-700 mb-4 drop-shadow-xl tracking-tight">Room ID is required</h1>
                    <p className="text-gray-600 text-lg font-medium">Please provide a valid Room ID to join the call.</p>
                </div>
            </div>
        );
    }

    return (
        <VideoCall roomId={roomId} />
    );
};

export default Room;