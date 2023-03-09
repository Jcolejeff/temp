import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import '../../Styles/Join.css';
import { useNavigate } from "react-router-dom";



const Join = ({ status, message, onValidated }) =>{
  const {name, email, lname, setName, setLname, setEmail} = useContext(GlobalContext);
  let  navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, lname, name)
    email &&
    onValidated({
        EMAIL: email,
        MERGE1: name,
        MERGE2: lname,
    });

}

const clearEntry = () =>{
      setEmail("");
      setLname("");
      setName("");
  }

useEffect(()=>{
      if(status === "success"){
        clearEntry()
        setTimeout(navigate("/"), 15000)
      };
      
  },[status])
  

    return(
      <div className="join_form-container">
        <img src="images/psycheLogo.svg" alt="psyche logo" />
        <form className="join_form" onSubmit={(e) => handleSubmit(e)}>
       
            {status === "sending" && (
                <div
                    className="sending"
                >sending...</div>
            )}
            {status === "alert error" && (
                <div
                    className="alert error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="alert success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

        <h3 className="join_title">Request Early Access</h3>
        <div className="join_field-container">
          <div className="name_field-container">
            <div className="f-name">
              <label>First Name</label><br/>
              <input
                label="First Name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                placeholder="First Name"
              />
            </div>

            <div>
              <label>Last Name</label><br/>
              <input
                label="Last Name"
                onChange={(e) => setLname(e.target.value)}
                type="text"
                value={lname}
                placeholder="Last Name"
              />
           </div>
          </div>

          <div className="email">
          <label>Email Address</label><br/>
          <input
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            isRequired
          />
          </div>

        <div>
          <input
            label="subscribe"
            value="Get Access"
            type="submit"
            formvalues={[email, name, lname]}
            className="submit"
          />
        </div>
        </div>

      </form>
    </div>
    )
}

export default Join;