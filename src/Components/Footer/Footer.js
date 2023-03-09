import '../../Styles/Footer.css';

const Footer = () =>{
    return(
        <>
        <div className="footer-container">
            <div className="">
                <div>
                    <img src="images/psycheLogo.svg" alt='' />
                    <p>Psyche Finance, Inc. is a financial technology company and is <br/> not a bank. </p>
                </div>
            </div>
            <div className='footer-content'>
               <p className='copyright'> &copy; 2022 Psyche. All rights reserved</p>
               <div className='social-icons'>
                   <a href='https://www.linkedin.com/company/psyche-finance'><img src='images/linkedin.svg' alt='linkedin' /></a>
                   <a href='https://twitter.com/Psychefinance'> <img src='images/twitter.svg' alt='twitter' /></a>
                   <a href='https://psychefinance.medium.com'><img src='images/medium.svg' alt='medium' width='40px' height='32px' /></a>
               </div>
            </div>
        </div>
        </>
    )
}

export default Footer