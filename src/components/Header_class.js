import React ,{ useState} from 'react'
function Header(){

const [texts,setTexts]=useState([
  {name1:"eat"},
  {name1:"sleep"},
  {name1:"code"}
]);
const [index,setIndex]=useState(0)
function change(){
  const newindex=(index+1)%texts.length
  setIndex(newindex)
}
  return (
    <div>
        <button onClick={change}>Text change</button>
        <span>{texts[index].name1}</span>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZG2C87S6LCfesepG8ocn1uE0Li2p5_STsidpe_mYYVBfR1ZcTjCZOME7t3XTq-jQF-aw&usqp=CAU'></img>
        <FcLike />
    </div>
  )
}
  

export default Header