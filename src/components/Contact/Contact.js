import "./Contact.css"
import {useState} from "react"
import axios from "axios"

export default function Contact() {
    const[contactData,setContactData] = useState({email:"", text:"", name:""})

    const handleChange = (e)=>{
        setContactData((prevData)=>{
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const sendRequest = (event)=>{
        event.preventDefault()
        console.log(contactData)
        axios.post("POST SOMEWHERE") //no se a donde postear
        .then( (res) => {console.log(res)} )
        .catch( (err) => {console.log(err)} );
    }

    return (
        <main className="main-contact"> 
            <h1 className="contact-h1">Send your opinion!</h1>
            <form className="contact-form">
                <div className="contact-form-Icontainer"> 
                    <label id="name">Name</label>
                        <input className="contact-form-input" onChange={handleChange} name="name" type="text" placeholder="Name" />
                    <label id="email">Email</label>
                        <input className="contact-form-input" onChange={handleChange} name="email" type="mail" placeholder="Email" />
                    <label id="text">Message</label>
                        <input className="contact-form-input" onChange={handleChange} name="text" type="text" placeholder="Message" />
                </div>
                <button className= "contact-form-button" onClick={sendRequest}>Send</button>
            </form>
        </main>
    )
}
