import { useEffect, useState } from "react"
import game from "./game"
import GameOver from "./components/GameOver"
import GameBoard from "./components/GameBoard"

const App = () => {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, []);

  useEffect(() => {

    if (timeLeft > 0) {
      if (started) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      }
    } else {
      setStarted(false)
      setGameOver(true);
    };
  }, [timeLeft, gameOver, started])

  function handleRestart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setTimeLeft(60)
    setGameOver(false);
  }

  function handleFlip(card) {



    if (game.setCards(card.id)) {
      setStarted(true);
      if (game.secondCard) {

        if (game.checkMatch()) {

          game.clearCards();

          if (game.checkGameOver()) {
            setStarted(false)
            setGameOver(true)
          }
        } else {
          setTimeout(() => {

            game.unflipCards()

            game.clearCards();

            setCards([...game.cards]);

          }, 1000);
        };
      };
    };

    setCards([...game.cards]);


  }

  return (
    <>
      <GameBoard cards={cards} handleFlip={handleFlip} />
      <GameOver show={gameOver} handleRestart={handleRestart} timeLeft={timeLeft} />
      <div className="timer" style={{ width: `${(timeLeft / 60) * 100}%`, display: gameOver ? "none" : "block" }}></div>
    </>
  )
}

export default App