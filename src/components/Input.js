

const Input =(props)=>{
    return(
        <fieldset className="input-container">
        {props.label?<legend><h2  className="input-label" >{props.label}</h2></legend>:null}
        <div className="input-logo">
        <props.icon/>
            <input type={props.type} placeholder = {props.palceholder} value = {props.value} onChange ={(e)=>props.setValue(e.target.value)} className ="input-box"/>
        </div>
        </fieldset>
    )
}

export default Input