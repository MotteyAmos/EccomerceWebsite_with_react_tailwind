import Item from "./Item"

const Sales = ({ popularsales ,value: {title,  items}}) => {
    
  return (
    <div className={`relative container px-[3rem] m-auto`}>
        <div>
            <h1 className="font-bold text-5xl text-slate-900 pb-5">{title}</h1>
        </div>
        <div className={!popularsales ? ` grid grid-cols-4 gap-9 `: `grid grid-cols-3 gap-7`}>
            {
                items.map((item, index)=>(
                    <Item key={index} values={item} popularsales={popularsales} />
                ))
            }
        </div>
    </div>
  )
}

export default Sales