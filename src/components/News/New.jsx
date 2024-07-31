import React from 'react';
import NewItem from './NewsItem/NewsItem'

const New = (props) =>{
  console.log('NEW', props)

  const newElements = props.newData.map((news) => {
    return(<NewItem news={news.new} key={news.id}/>)
  })
  console.log('props', props)
  return(
    <div>
      {newElements}
    </div>
  )
}


export default New;