import Input from "@/components/Input";
import val from "validate.js"

 const Validate = (name,money,reason)=>{   
    console.log("works") 
    var constraints = {
        naam:{
            presence:true,
            length:{
                maximum:10,
                message:"Name must of maximum of 10 characters"
            }
        },
        money:{
            presence:true,
            length:{
                maximum:7,
                message:"Input cannot exceed maximum of 99 lakhs"
            },
            format:{
                pattern:"[0-9]+",
                message:"Only numbers accepted in money section"
            }
        },
        kaam:{
            length:{
                maximum:30,
                message:"Input cannot exceed 30 characters"
            }
        }
    }

    return(val({naam:name,money:money,kaam:reason},constraints))
}

export default Validate