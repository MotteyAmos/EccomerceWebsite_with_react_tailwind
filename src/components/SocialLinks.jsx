
const SocialLinks = ({icon}) => {
  return (
    <div className=" w-7 
    transition-all ease-in-out duration-400 delay-100
   hover:scale-125 hero-bg overflow-hidden rounded-md max-[300px]:scale-50">
        <a href="#" className="active:scale-100 ">
            <img src={icon} alt="socialLink/icon" />
        </a>
    </div>
  )
}

export default SocialLinks