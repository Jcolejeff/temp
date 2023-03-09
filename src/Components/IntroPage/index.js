import MockUp from '../MockUp';
import '../../Styles/IntroPage.css';
import * as AiIcons from 'react-icons/ai'
import Header from '../Header';
// import { useContext } from 'react';
// import { GlobalContext } from '../../Context/GlobalContext';

const IntroPage = () => {
    // const { email, setEmail } = useContext(GlobalContext);

    return (
        <div className='intro-main-container'>
            <Header />
            <div className='IntroPage-Container'>
                <div className='Intro-Content-Container'>
                    <div className='Intro-Content'>
                        <h1>
                            <span className='txt1'>Save Money</span>,
                            <span className='txt2'> Send Money </span>
                            and <br />
                            <span className='txt2'>Get paid</span> in Crypto
                        </h1>
                        <p>Psyche gives you a borderless access to receiving payments. Let you receive payment in any currency of your choice.</p>
                        <ul>
                            <li><span className='icon'><AiIcons.AiFillThunderbolt color='#6E1DD1' /></span><span>Banking</span></li>
                            <li><span className='icon'><AiIcons.AiFillThunderbolt color='#6E1DD1' /></span><span>Multi-currency Wallet</span></li>
                            <li><span className='icon'><AiIcons.AiFillThunderbolt color='#6E1DD1' /></span><span>Payment</span></li>
                        </ul>
                        {/* <form className='email-form'>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                htmlFor="email"
                                className='email' />

                        </form> */}
                        <div className='one ol'><img src='images/Bitcoin_perspective.svg' alt='' /></div>
                        <div className='two ol'><img src='images/Coin_perspective.svg' alt='' /></div>
                        <div className='three ol'><img src='images/Money_bag_perspective.svg' alt='' /></div>
                    </div>
                </div>
                <div className='mockup'><MockUp /></div>
            </div>
        </div>
    )
}


export default IntroPage;