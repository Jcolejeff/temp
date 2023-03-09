import Button from "../Button";
import '../../Styles/Header.css';

const Header = () =>{
    return(
      <>
        <div className="Header-Container">
           <div className="Logo">
              <img src="images/psycheLogo.svg" alt="psyche logo" />
           </div>
           <div className="welcome-btn">
              <Button Background={"#0F5CA8"} Color={"#ffffff"} />
           </div>
        </div>
      </>
    )
}

export default Header;