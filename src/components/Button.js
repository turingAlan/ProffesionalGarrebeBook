

const Button = (props)=>{
    return(
        <div className="button-container">
        <button className={props.disabled?"button-disabled button":"button"} onClick={props.onClick} type= {props.type} disabled = {props.disabled}>
            {props.value}
        </button>

        </div>
    )
}

export default Button