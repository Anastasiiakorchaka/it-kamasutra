//import classes from './New.module.css';
import New from "./New/New"


const News = (props) => {
  const NewElements = props.newData.newPost.map((item) => {
    return (<New new={item.new}/>)
  })
return (
  <div>
     {NewElements}
  </div>)
}

export default News;