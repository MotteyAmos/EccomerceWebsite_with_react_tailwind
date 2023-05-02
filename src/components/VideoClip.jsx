import { PlayIcon } from '@heroicons/react/24/solid';
const VideoClip = ({clip}) => {
  return (
    <div className="relative w-[8rem] max-[1024px]:w-[4rem] h-[7.5rem] max-[1024px]:h-[4rem] overflow-hidden group rounded-md
    max-[1024px]:border-2 border-4 border-white] max-[300px]:scale-75 scale-90">
        <img src={clip.clip} alt="img/clip"className="absolute top-0 left-0 right-0 z-5
        opacity-100 z-10 transition-opacity delay-100 ease-in-out duration-500 h-full w-full object-cover " />
        <div className="bg-gray-100 z-50 w-50 h-50 absolute play-icon rounded-full overflow-hidden
        group-hover:opacity-0">
            <PlayIcon className="w-10 h-10 max-[1024px]:w-5 max-[1024px]:h-5 text-black z-50"/>
        </div>
        <video src={clip.src} type="video/mp4" 
        autoPlay={true}
        playsInline={true}
        loop={true}
        muted={true}
        className="opacity-0 z-0 w-full h-full absolute top-0 right-0 left-0 
        group-hover:opacity-100 group-hover:z-20 object-cover"/>
    </div>
  )
}

export default VideoClip