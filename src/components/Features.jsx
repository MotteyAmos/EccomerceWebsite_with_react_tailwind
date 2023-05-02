const Features = ({ishighlight, value: { heading, title, text, btn, url, img } }) => {
  return (
    <div className={` flex container px-[3rem] m-auto justify-between ${ishighlight && "flex-row-reverse"}`}>
      <div className={` w-[35%] grid gap-4 `}>
        <div>
          <h3 className="font-bold text-4xl text-sky-500">{heading}</h3>
          <h1 className="font-bold text-5xl text-slate-950">{title}</h1>
        </div>

        <div>
          <p className="text-slate-800"> {text}</p>
        </div>
        <div className="bg-slate-900 h-[2rem] w-[8rem] grid items-center justify-center text-white
        rounded-sm active:scale-90 transition-all duration-500 ease-in-out  ">
          <a href={url} target="_blank">
           {btn}
          </a>
        </div>
      </div>
        <div className="relative grid items-center w-[25rem]">
            <img src={img} alt={`img/${heading}`}  
            className={`w-[25rem] absolute  top-8 right-[10rem] rotate-[15deg]
            ${ishighlight && "left-[10rem] rotate-[15deg]"}`}/>

        </div>
    </div>
  );
};

export default Features;
