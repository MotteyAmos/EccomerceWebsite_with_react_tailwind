import { TypedReactHooksDemo } from "../components/typed"
import SocialLinks from "../components/SocialLinks"
import VideoClip from "../components/VideoClip"

const HeroHomePage = ({ heroApi }) => {
    return (
        <div className='relative w-auto h-auto flex mb-12 '>
            <div className=" hero-bg w-full  lg:h-[75vh]  sm:h-[45vh] max-[600px]:h-[50vh] h-[65vh] clip-path absolute top-0 left-0 right-0 z-10"></div>
            <div className=" relative z-20 lg:container md:container container   m-auto border-none sm:pt-[5rem] ">

                <div className=" grid lg:gap-3 sm:gap-14 max-[800px]:gap-4 ">
                    <h1 className=" hero-home-text ">
                        {heroApi.title}
                    </h1>
                    <h1 className=" hero-home-text text-5xl max-[1024px]:text-xl max-[300px]:text-sm">
                        <TypedReactHooksDemo heroSubTitle={heroApi.subtitle} />
                    </h1>
                    <button type="button" className="hero-home-btn filter backdrop-blur-md">{heroApi.btnText}</button>

                </div>
                <div className="grid gap-3 absolute right-0 cursor-pointer pr-[8rem] max-[800px]:pr-5 max-[300px]:gap-0">
                    {
                        heroApi.socialLinks?.map((icon, index)=>(
                            <SocialLinks icon={icon.icon} key={index}/>
                        ))
                    }
                </div>
                <div className="w-[8rem] grid gap-3 absolute overflow-hidden max-[300px]:gap-2 ">
                    {
                        heroApi.videos?.map((video, index)=>{
                            return(<VideoClip key={index} clip={video}/>)
                        })
                    }
                </div>
                <div>
                    <img src={heroApi.heroimg} alt="hero/img" className=" hero-home-img" />
                </div>
            </div>




        </div>
    )
}

export default HeroHomePage