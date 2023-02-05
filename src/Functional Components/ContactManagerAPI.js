import { useState } from "react"
import axios from "axios"
function ContactManagerAPI(){
    const [contacts,setContact]=useState([])
    const [firstname,setFname]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const callAPI=()=>{
      /*  fetch("http://localhost:3001/contactApp").then((res)=>{return res.json()}).then((res)=>setContact(res)).catch((err)=>console.log(err))*/
        axios.get("http://localhost:3001/contactApp").then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    }
   
    const handleInput=(e,keyword)=>{
        if(keyword==="fname"){
            setFname(e.target.value)
        }
        else if(keyword==="phn"){
            setPhone(e.target.value)
        }
        else{
            setEmail(e.target.value)
        }
    }
    const addContact=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/contactApp",{
            "id":2,
            "fname":firstname,
            "phone":phone,
            "email":email
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
     
    }
    return(
        <div>
            <form>
                Firstname:<input type='text' onChange={(e)=>handleInput(e,"fname")}></input>
                Phone:<input type='text' onChange={(e)=>handleInput(e,"phn")}></input>
                Email:<input type='text' onChange={(e)=>handleInput(e,"eml")}></input>
                <button onClick={(e)=>addContact(e)}>add contact</button>
            </form>
            <button onClick={()=>callAPI()}>call API</button>
            {
                contacts.map((item)=>(
                    <>
                    <h1>{item.fname}</h1>
                    <h2>{item.email}</h2>
                    <h2>{item.phone}</h2></>
                ))
            }
        </div>

    )
}
export default ContactManagerAPI