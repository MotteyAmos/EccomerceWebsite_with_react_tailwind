import Item from "./Item"
import Title from "../../components/Title"
const Sales = ({ popularsales ,value: {title,  items}}) => {
    
  return (
    <div className={`relative container px-[3rem] m-auto`}>
        <Title title={title}/>
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