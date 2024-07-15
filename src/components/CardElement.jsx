const CardElement = ({card, handleFlip}) => {

    return (
        <div onClick={()=>{handleFlip(card)}} id={card.icon} className={`card ${card.flipped? "flip": ""}`}>

            <div className="front_card">
                <img className="icon" src={`./images/${card.icon}.png`} alt={card.icon}></img>
            </div>
            <div className="back_card">
                {"</>"}
            </div>
        </div>
    )

};

export default CardElement;