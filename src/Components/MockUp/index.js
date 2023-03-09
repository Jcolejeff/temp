import '../../Styles/Mockup.css';
import DesktopBackground from "../Media/Images/Studio-Display.svg"
const MockUp = () => {
    return (
        <>
            <div className="mockup">
                <div className='mockup-container'>
                    <img src={DesktopBackground} className="studio-display" alt='' />
                    <img src="images/Screen.svg" className="studio" alt='' />
                </div>
            </div>
        </>
    )
}

export default MockUp;