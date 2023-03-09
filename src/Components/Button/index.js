import '../../Styles/Button.css';
// import {Link} from 'react-router-dom'

const Button = ({Background, Color}) =>{
    return(
        <>
          {/* <Link to="join"><button 
          className="btn" style={{backgroundColor: Background, color: Color}}
          >
          Join the Waitlist
          </button>
          </Link> */}
          <a href="https://forms.gle/UjaknKnWCbz1sFs6A"
          className="btn" style={{backgroundColor: Background, color: Color}}
          >
          Join the Waitlist
          </a>
        </>
    
    )
          
}

export default Button;