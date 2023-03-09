import AboutCards from "../AboutCards/AboutCards";
import '../../Styles/About.css';
import * as GiIcon from 'react-icons/gi';

const About = () => {
    return (
        <>
            <div className="about-bg-container">
                <div className="about-container">
                    <div className="about-summary">
                        <h2>Banking Meets Crypto</h2>
                        <p>Save naira cash, spend in dollars, Euro or Crypto while seamlessly managing all your cash and crypto in one place.</p>
                    </div>

                    <div className="about-cards">
                        <div className="about-cards-item">
                            <AboutCards
                                img={"images/perspective_matte.svg"}
                                header={"3% yearly interest on your Checking Account"}
                                about={"Make your money work for you without any lock ups or fees"}
                                stroke={"01"}
                            />
                        </div>
                        <div className="about-cards-item">
                            <AboutCards
                                img={"images/Wallet_perspective_matte.svg"}
                                header={"Recieve Payment in any Currency"}
                                about={"Set up a direct deposit and get paid in Naira transfer, Dollar, Euro and Crypto."}
                                stroke={"02"}
                            />
                        </div>
                        <div className="about-cards-item">
                            <AboutCards
                                img={"images/Money_perspective_matte.svg"}
                                header={"Cash to Crypto in Seconds"}
                                button={<button className="coming-soon">Coming Soon</button>}
                                about={"Store, buy and sell crypto directly starting from as low as $1."}
                                stroke={"03"}
                            />
                        </div>
                    </div>
                </div>

                <div className="how-it-works">
                    <h2 className="heading">How Psyche Works</h2>
                    <div className="cryp-deposit-container">
                        <div className="cryp-deposit-content">
                            <h2>Get paid in cash or crypto with direct deposit</h2>
                            <p>Set up a direct deposit and recieve part of your payment in Dollar cash, Euro Cash, Naira Cash or Crypto in any wallet of your choice.</p>
                            <ul>
                                <li><GiIcon.GiCheckMark color="#0F5CA8" /><span>Seamless and Fast</span></li>
                                <li><GiIcon.GiCheckMark color="#0F5CA8" /><span>Free Psyche-to-Psyche Transfer </span></li>
                                <li><GiIcon.GiCheckMark color="#0F5CA8" /><span>Withdraw in cash or to any wallet of your choice </span></li>
                                <li><GiIcon.GiCheckMark color="#0F5CA8" className="last" /><span>Up to 3% yearly interest on your checking account </span></li>
                            </ul>
                        </div>
                        <div className="crypt-image">
                            <img alt="crypto prices" src="images/CRYPT.svg" />
                        </div>
                    </div>
                </div>

                <div className="cryp-acct-container">
                    <div className="cryp-content">
                        <h2>An Interest-Bearing Multi-Currency and Crypto Checking Account Everywhere you Go</h2>
                        <p>Manage your cash and crypto in a single account</p>
                    </div>

                    <div className="ellipse-container">
                        <img src="images/ellipseVector.svg" alt="" className="ellipse" />
                        <img src="images/Card.svg" alt="" className="sv sv1" />
                        <img src="images/bitcoin.png" alt="" className="sv sv2" />
                        <img src="images/naira.png" alt="" className="sv sv3" />
                        <img src="images/Vector.svg" alt="" className="sv sv4" />
                        <img src="images/Vector2.svg" alt="" className="sv sv5" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;