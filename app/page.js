"use client"
// pages/videoPage.tsx
import {useRouter} from "next/navigation";

const VideoPage = () => {

    const router = useRouter()

    const handleClick = () => {
      router.push("https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5")
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <div className="relative">
                {/* Image that looks like a video */}
                <img
                    src="/watch.png" // Replace with your image path
                    alt="Video Thumbnail"
                    className="w-full h-auto rounded-lg"
                />
                {/* Play button icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="p-4 bg-white rounded-full shadow-lg" onClick={handleClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.752 11.168l-3.184 1.736a1 1 0 01-1.568-.816v-3.472a1 1 0 011.568-.816l3.184 1.736a1 1 0 010 1.632z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Progress bar */}
            <div className="w-full max-w-md mt-4">
                <input
                    type="range"
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    min="0"
                    max="100"
                    defaultValue="50"
                />
            </div>
        </div>
    );
};

export default VideoPage;

