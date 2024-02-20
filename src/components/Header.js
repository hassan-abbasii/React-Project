import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
 const [text,setText]=useState('Any thing in box');
 const handleChangeText = (event) => {
setText(event.target.value);
 }
 const convertToUpperCase =()=>{
 // setText("ok");
  const newtext=text.toUpperCase();
   setText(newtext);
   props.showAlert("Letter Capitalize", "danger");

 }

  return (
    <div>
      {props.title}

      <label>Text Box</label>
      <input  htmlFor="name" onChange={handleChangeText}  value={text}  />
      <button onClick={convertToUpperCase}> Capitalize</button>
      <br/>
      <p>words Count:: {text.split(" ").length}</p>
    </div>
  )
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}
Header.defaultProps ={
    title:"Title",
}


