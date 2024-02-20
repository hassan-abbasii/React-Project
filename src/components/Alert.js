import React,{useState} from 'react'



export default function Alert(props) {
 
  return (
  props.alert &&  <div className={`alert alert-${props.alert.typ}`} role="alert">
    <strong>{props.alert.typ}</strong>A simple primary alert—check it out!{props.alert.msg}
  <button type='button' className='btn-close' data-bs-dissmiss="alert" aria-label='close'></button>
  </div>
  )
}
