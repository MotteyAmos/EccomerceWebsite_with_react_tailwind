import Title from "../../components/Title"
import Story from "./story";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Stories = ({story:{title,news}}) => {
  const options =   {
    rewind: true,
    width : 1500,
    type:"loop",
    perpage:3,
    fixedWidth : '7rem',
   
    gap        : '17rem',
    keyboard:'global',
    perMove:1

  } 
  return (
    <div className="w-full container px-[3rem] m-auto ">
        <Title title={title}/>
        <div  className=" ">
          <Splide options={options}>
          {
                news.map((eachStory, index)=>{
                    return(
                        <Story  eachStory={eachStory} key={index}/>

                    )
                })
            }
          </Splide>

        </div>
    </div>
  )
}

export default Stories