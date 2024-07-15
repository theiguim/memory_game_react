const GameOver = ({ show, handleRestart, timeLeft }) => {
    return (
        <>
            {show ? <div id="gameOver">
                <p>{timeLeft ==0 ? "Tempo esgotado! Você perdeu." : "Parabéns, você venceu!"}</p>
                <button onClick={handleRestart}>Reiniciar jogo</button>
            </div> : <></>}
        </>
    );
};
export default GameOver;