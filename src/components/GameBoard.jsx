import CardElement from "./CardElement"

const GameBoard = ({cards, handleFlip})=>{

return (

<div id="gameBoard">


{cards.map((card, idx)=><CardElement handleFlip={handleFlip} key={idx} card={card} />)}

</div>
)
}

export default GameBoard