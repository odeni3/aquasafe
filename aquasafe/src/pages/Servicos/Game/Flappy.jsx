import { useState, useEffect, useRef } from "react";
import fish from '../../../assets/fish.png';
import algas from '../../../assets/algas.png';
import mar from '../../../assets/mar.jpg';

const Flappy = () => {
    const [birdPosition, setBirdPosition] = useState({ x: 50, y: 250 });
    const [pipes, setPipes] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [velocity, setVelocity] = useState(0);

    // Constantes simplificadas
    const GRAVITY = 2;
    const JUMP_FORCE = 10;
    const PIPE_SPEED = 5;
    const PIPE_WIDTH = 80;
    const PIPE_GAP = 200;
    const BIRD_SIZE = 40;
    const GAME_HEIGHT = 600;
    const GAME_WIDTH = 600;

    const birdPositionRef = useRef(birdPosition);
    const velocityRef = useRef(velocity);
    const pipesRef = useRef(pipes);

    useEffect(() => {
        birdPositionRef.current = birdPosition;
    }, [birdPosition]);

    useEffect(() => {
        velocityRef.current = velocity;
    }, [velocity]);

    useEffect(() => {
        pipesRef.current = pipes;
    }, [pipes]);

    const jump = () => {
        if (gameOver) {
            setBirdPosition({ x: 50, y: 250 });
            birdPositionRef.current = { x: 50, y: 250 };
            setPipes([]);
            pipesRef.current = [];
            setScore(0);
            setVelocity(0);
            velocityRef.current = 0;
            setGameOver(false);
            setGameStarted(true);
            return;
        }

        if (!gameStarted) {
            setGameStarted(true);
        }

        setVelocity(-JUMP_FORCE);
        velocityRef.current = -JUMP_FORCE;
    };

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const gameLoop = setInterval(() => {
            // Atualiza a velocidade com a gravidade
            const newVelocity = velocityRef.current + GRAVITY;
            setVelocity(newVelocity);
            velocityRef.current = newVelocity;

            // Atualiza a posição do pássaro
            const newY = birdPositionRef.current.y + newVelocity;
            setBirdPosition(prevPosition => ({
                ...prevPosition,
                y: newY
            }));
            birdPositionRef.current.y = newY;

            // Movimento dos canos
            const updatedPipes = pipesRef.current
                .map(pipe => ({
                    ...pipe,
                    x: pipe.x - PIPE_SPEED
                }))
                .filter(pipe => pipe.x > -PIPE_WIDTH);
            setPipes(updatedPipes);
            pipesRef.current = updatedPipes;

            // Colisão com teto e chão
            if (birdPositionRef.current.y + BIRD_SIZE > GAME_HEIGHT || birdPositionRef.current.y < 0) {
                setGameOver(true);
                setGameStarted(false);
                return;
            }

            // Colisão com canos
            updatedPipes.forEach(pipe => {
                const bird = {
                    top: birdPositionRef.current.y,
                    bottom: birdPositionRef.current.y + BIRD_SIZE,
                    left: birdPositionRef.current.x,
                    right: birdPositionRef.current.x + BIRD_SIZE
                };

                const pipeTop = {
                    top: 0,
                    bottom: pipe.height,
                    left: pipe.x,
                    right: pipe.x + PIPE_WIDTH
                };

                const pipeBottom = {
                    top: pipe.height + PIPE_GAP,
                    bottom: GAME_HEIGHT,
                    left: pipe.x,
                    right: pipe.x + PIPE_WIDTH
                };

                if (
                    (bird.right > pipeTop.left && bird.left < pipeTop.right && bird.top < pipeTop.bottom) ||
                    (bird.right > pipeBottom.left && bird.left < pipeBottom.right && bird.bottom > pipeBottom.top)
                ) {
                    setGameOver(true);
                    setGameStarted(false);
                    return;
                }

                // Pontuação
                if (!pipe.passed && pipe.x + PIPE_WIDTH < bird.left) {
                    setScore(prevScore => prevScore + 1);
                    pipe.passed = true;
                }
            });

        }, 20);

        return () => clearInterval(gameLoop);
    }, [gameStarted, gameOver]);

    // Gerador de canos
    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const pipeGenerator = setInterval(() => {
            const pipeHeight = Math.floor(Math.random() * 200) + 50;
            setPipes(prev => [...prev, {
                x: GAME_WIDTH,
                height: pipeHeight,
                passed: false
            }]);
        }, 2000);

        return () => clearInterval(pipeGenerator);
    }, [gameStarted, gameOver]);

    return (
        <div
            onClick={jump}
            style={{
                position: "relative",
                width: `${GAME_WIDTH}px`,
                height: `${GAME_HEIGHT}px`,
                marginLeft: "40rem",
                marginTop: "10rem",
                border: "6px solid #f559e0",
                overflow: "hidden",
                backgroundImage: `url(${mar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer"
            }}
        >
            <img
                src={fish}
                alt="bird"
                style={{
                    position: "absolute",
                    left: birdPosition.x,
                    top: birdPosition.y,
                    width: BIRD_SIZE,
                    height: BIRD_SIZE,
                    transform: `rotate(${Math.min(velocity * 3, 90)}deg)`,
                    transition: "transform 0.1s",
                    userSelect: "none"
                }}
            />
            {pipes.map((pipe, index) => (
                <div key={index}>
                    {/* Cano superior */}
                    <img
                        src={algas}
                        alt="pipe"
                        style={{
                            position: "absolute",
                            left: pipe.x,
                            top: 0,
                            width: PIPE_WIDTH,
                            height: pipe.height,
                            transform: "rotate(180deg)"
                        }}
                    />
                    {/* Cano inferior */}
                    <img
                        src={algas}
                        alt="pipe"
                        style={{
                            position: "absolute",
                            left: pipe.x,
                            top: pipe.height + PIPE_GAP,
                            width: PIPE_WIDTH,
                            height: GAME_HEIGHT - (pipe.height + PIPE_GAP)
                        }}
                    />
                </div>
            ))}
            {/* Exibição da pontuação */}
            <div
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textShadow: "2px 2px 4px #000",
                }}
            >
                {score}
            </div>
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
