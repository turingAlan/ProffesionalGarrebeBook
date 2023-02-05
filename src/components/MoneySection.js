const { useState, use, useEffect } = require("react")
const { default: Button } = require("./Button")
const { default: Input } = require("./Input")
import {AiOutlineUserAdd} from "react-icons/ai"
import {BiRupee,BiQuestionMark} from "react-icons/bi"
import {MdOutlineDateRange} from "react-icons/md"
import Validate from "../utils/Validation.js"

const MoneySection = (props)=>{
    const [name,setName] = useState("")
    const [money,setMoney] = useState("")
    const [reason,setReason] = useState("")
    const [date,setDate] = useState("")
    const [check,setCheck] = useState(false)

    const dateCheck =()=>{
        const currentDate = new Date()
        var month = '' + (currentDate.getMonth() + 1),
        day = '' + currentDate.getDate(),
        year = currentDate.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return(
            <input type="checkbox" className="date-check" value="yes" checked = {check} onChange={(e)=>{
                console.log(e)
                setCheck(!check)
               setDate([year, month, day].join('-')) 
               console.log(currentDate)
            }}/>
        )
    }
    useEffect(()=>{
    console.log(Validate(name,money,reason))
    },[name,reason,money])


    return(
        <div className="io">
          <fieldset className="border-io">
          <legend >
           <h1 style={{margin:0}}>
            {props.section}
             </h1>
           </legend>
             <form style={{width:"100%",display:"flex",flexDirection:"column",alignItems:'center'}}>
                <Input value = {name} setValue = {setName} palceholder = "Enter the name" type = "text" label = "Name" labelFor= "name" icon = {AiOutlineUserAdd}/>
                <Input value = {money} setValue = {setMoney} palceholder = "Enter the amount" type = "text" label = "Money" labelFor = "money" icon = {BiRupee}/>
                <Input value = {reason} setValue = {setReason} palceholder = "Enter the reason" type = "text" label = "Reason" labelFor = "Reason" icon = {BiQuestionMark}/>
                <Input value = {date} setValue = {setDate} palceholder = "Enter the reason" type = "date" label = "Date" labelFor = "Reason" icon = {dateCheck}/>
                <Button type = "submit"  value  = "Submit"/>
             </form>
          </fieldset>
        </div>
    )
}

export default MoneySection