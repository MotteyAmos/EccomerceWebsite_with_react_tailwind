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
   
    gap        : '15rem ',
    keyboard:'global',
    perMove:1,
    breakpoints:{
      1200:{perPage:3},
      991:{perPage:2.3},
      768:{perPage:2},
      500:{perPage:1.3},
      625:{perPage:1},
  }

  } 
  return (
    <div className="w-screen max-md:text-center container px-[3rem] max-md:px-[1rem] m-auto ">
        <Title title={title}/>
        <div  className=" ">
          <Splide options={options} >
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