const Features = ({ishighlight, value: { heading, title, text, btn, url, img } }) => {
  return (
    <div className={` flex container px-[3rem] max-md:px-4 m-auto  justify-between max-md:flex-col ${ishighlight && "flex-row-reverse "}`}>
      <div className={` w-[35%] max-md:w-[20rem] m-auto grid gap-4 `}>
        <div>
          <h3 className="font-bold text-4xl max-md:text-2xl  text-sky-500">{heading}</h3>
          <h1 className="font-bold text-5xl max-md:text-3xl text-slate-950">{title}</h1>
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
        <div className="relative grid items-center w-[25rem] max-md:w-full max-md:justify-center">
            <img src={img} alt={`img/${heading}`}  
            className={`w-[25rem] absolute  top-8 max-md:top-0 max-md:relative right-[10rem] max-md:right-[4rem] md:right-0 max-md:scale-50  rotate-[15deg] hover:scale-110 transition-theme
            ${ishighlight && "left-[10rem] max-md:left-0  md:left-0 rotate-[15deg] hover:scale-110 max-md:relative "}`}/>

        </div>
    </div>
  );
};

export default Features;
