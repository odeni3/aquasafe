import { useState, useEffect } from "react";
import fish from '../../../assets/fish.png'
import algas from '../../../assets/algas.png'
import mar from '../../../assets/mar.jpg'

const Flappy = () => {
    const [birdPosition, setBirdPosition] = useState({ x: 50, y: 200 });
    const [pipes, setPipes] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const jump = () => {
        if (!gameOver && gameStarted) {
            setBirdPosition((prev) => ({ ...prev, y: prev.y - 60 }));
        } else if (!gameOver && !gameStarted) {
            setGameStarted(true);
        } else {
            setBirdPosition({ x: 50, y: 200 });
            setPipes([]);
            setGameOver(false);
            setGameStarted(true);
        }
    };

    const checkCollision = () => {
        const birdTop = birdPosition.y;
        const birdBottom = birdPosition.y + 50;
        const birdLeft = birdPosition.x;
        const birdRight = birdPosition.x + 50;

        pipes.forEach((pipe) => {
            const pipeTop = pipe.y;
            const pipeBottom = pipe.y + 600;
            const pipeLeft = pipe.x;
            const pipeRight = pipe.x + 100;

            const isColliding =
                birdRight > pipeLeft &&
                birdLeft < pipeRight &&
                birdBottom > pipeTop &&
                birdTop < pipeBottom;

            if (isColliding) {
                if (birdLeft > pipeLeft && birdRight < pipeRight && birdBottom < pipeBottom) {
                    setScore((prevScore) => prevScore + 1);
                } else {
                    setGameOver(true);
                    setGameStarted(false);
                }
            }
        });

        if (birdBottom > 800 || birdTop < -170) {
            setGameOver(true);
            setGameStarted(false);
        }
    };

    useEffect(() => {
        checkCollision();
    }, [birdPosition, pipes, gameOver]);

    useEffect(() => {
        const gravity = setInterval(() => {
            setBirdPosition((prev) => ({ ...prev, y: prev.y + 5 }));
            checkCollision();
        }, 30);

        const pipeGenerator = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) => [
                    ...prev,
                    { x: 400, y: Math.floor(Math.random() * 300) },
                ]);
            }
        }, 2000);

        const pipeMove = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
                );
            }
        }, 30);

        return () => {
            clearInterval(gravity);
            clearInterval(pipeGenerator);
            clearInterval(pipeMove);
        };
    }, [gameOver, gameStarted]);

    return (
        <div
            className={`App ${gameOver ? "game-over" : ""}`}
            onClick={jump}
            style={{
                position: "relative",
                width: "600px",
                height: "600px",
                marginLeft: "40rem",
                marginTop: "10rem",
                border: "6px solid #f559e0",
                overflow: "hidden",
                backgroundImage: `url(${mar})`, // Define a imagem de fundo
                backgroundSize: "cover", // Faz a imagem cobrir o container
                backgroundPosition: "center", // Centraliza a imagem
                backgroundColor: gameOver ? "#ff6347" : "#87ceeb",
                transition: "background-color 0.5s ease",
            }}
        >
            <img
                src={fish}
                alt="bird"
                style={{
                    position: "absolute",
                    left: birdPosition.x,
                    top: birdPosition.y,
                    width: "50px",
                    height: "50px",
                    userSelect: "none",
                }}
            />
            {pipes.map((pipe, index) => (
                <img
                    key={index}
                    src={algas}
                    alt="pipe"
                    style={{
                        position: "absolute",
                        left: pipe.x,
                        top: pipe.y,
                        width: "100px",
                        height: "600px",
                    }}
                />
            ))}
            {gameOver && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    Game Over!
                    <br />
                    <span
                        style={{
                            backgroundColor: "blue",
                            padding: "2px 6px",
                            borderRadius: "5px",
                            display: "inline-block",
                            marginTop: "10px",
                        }}
                    >
                        Clique para reiniciar
                    </span>
                </div>
            )}
        </div>
    );    

};

export default Flappy;
