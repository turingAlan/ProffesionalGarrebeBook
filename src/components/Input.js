import { useState } from "react"


const Input =(props)=>{
    const [isFocused,setIsfocused] = useState(false)
    const ErrorLog = ()=>{
        const labelFor = props.labelFor
        const error = props.error[labelFor]
       
        return(
            <h3 className="error">
            {
                Array.isArray(error)?error[0]:null
            }
            </h3>
        )
    }
    return(
        <div style={{width:"100%",alignContent:"center"}}>
            <fieldset className="input-container">
        {props.label?<legend><h2  className="input-label" >{props.label}{props.required?"*":null}</h2></legend>:null}
        <div className="input-logo">
        <props.icon/>
            <input type={props.type} placeholder = {props.palceholder} value = {props.value} onChange ={(e)=>{props.setValue(e.target.value)
            setIsfocused(true)}
            } className ="input-box"/>
        </div>
        </fieldset>
        {props.error&&isFocused?<ErrorLog/>:null}
        </div>
    )
}

export default Input