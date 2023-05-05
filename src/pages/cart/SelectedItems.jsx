import { selectSelectedItems } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import SelectedItem from "./SelectedItem";


const SelectedItems = () => {
    const items = useSelector(selectSelectedItems);

  return (
    <div className="pr-10 ">
        {
            (items.length >0) && (
                
                items.map((item, id)=>{
                    return (<SelectedItem values={item} key={id}/>)
                })
                
            )
        }
    </div>
  )
}

export default SelectedItems