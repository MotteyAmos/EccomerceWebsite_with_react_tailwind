import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash";

const Story = ({
  eachStory: { title, text, img, url, like, time, by, btn },
}) => {
  return (
    <>
      <SplideSlide>
        <div
          className="w-[22.7rem] rounded-lg overflow-hidden border-2 filter drop-shadow-md 
       flex flex-col gap-[16px]  h-[32.5rem]  "
        >
          <div className=" w-full">
            <img src={img} alt={`story/img/${title}`} className="w-full" />
          </div>
          <div className="p-2 flex flex-col gap-[13px]">
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <span>
                  <HeartIcon className="w-5 text-red-600" />
                </span>
                <span>{like}</span>
              </div>
              <div className="flex gap-1">
                <span>
                  <ClockIcon className="w-5" />
                </span>
                <span className="text-sm">{time}</span>
              </div>
              <div className="flex text-sky-600 text-sm">
                <span className="">
                  <HashtagIcon className="w-6 " />
                </span>
                <span>{by}</span>
              </div>
            </div>
            <div className="">
              <h1 className="font-semibold">
              {title}
              </h1>
            </div>
            <div className=" text-sm leading-5">{truncate(text,{'length':202})}</div>
            <div className="bg-slate-900 text-white p-1 rounded text-center active:scale-90
            grid items-center filter drop-shadow-md">
              <a href={url} target="_blank">
                {btn}
              </a>
            </div>
          </div>
        </div>
      </SplideSlide>
    </>
  );
};

export default Story;
