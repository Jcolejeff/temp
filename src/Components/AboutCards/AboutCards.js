import '../../Styles/AboutCards.css'
const AboutCards = ({ img, stroke, header, about, button }) => {
    return (
        <>
            <div className="card-container">
                <div className="card-content">
                    <img src={img} alt={img} />
                    <div className="coming-soon-btn">
                        {button}
                    </div>
                    <h3>{header}</h3>
                    <p>{about}</p>
                </div>
                <div className="stroke">
                    {stroke}
                </div>
            </div>
        </>
    )
}

export default AboutCards;