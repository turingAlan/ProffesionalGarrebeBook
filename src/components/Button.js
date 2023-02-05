

const Button = (props)=>{
    return(
        <div className="button-container">
        <button className="button" onClick={props.onClick} type= {props.type}>
            {props.value}
        </button>

        </div>
    )
}

export default Button