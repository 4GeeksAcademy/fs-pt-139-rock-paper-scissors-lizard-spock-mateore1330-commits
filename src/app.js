const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

const ganaA = {
    piedra: ["tijera", "lagarto"],
    papel: ["piedra", "spock"],
    tijera: ["papel", "lagarto"],
    lagarto: ["papel", "spock"],
    spock: ["piedra", "tijera"]
};

function jugar(jugador) {
    const computer = opciones[Math.floor(Math.random() * opciones.length)];
    let ganador = "¡Perdiste! 😢";

    if (jugador === computer) {
        ganador = "¡Empate! 🤝";
    }
    
    if (jugador !== computer && ganaA[jugador].includes(computer)) {
        ganador = "¡Ganaste! 🎉";
    }
   
    return {
        jugador,
        computer,
        ganador
    };
}

function renderResultado(resultado) {
    const playerChoiceNode = document.getElementById("player-choice");
    const computerChoiceNode = document.getElementById("computer-choice");
    const gameResultNode = document.getElementById("game-result");

    if (!playerChoiceNode || !computerChoiceNode || !gameResultNode) {
        return;
    }

    playerChoiceNode.textContent = resultado.jugador;
    computerChoiceNode.textContent = resultado.computer;
    gameResultNode.textContent = resultado.ganador;

    if (resultado.ganador.includes("Ganaste")) {
        gameResultNode.className = "alert alert-success mt-4 mb-0";
        return;
    }

    if (resultado.ganador.includes("Empate")) {
        gameResultNode.className = "alert alert-secondary mt-4 mb-0";
        return;
    }

    gameResultNode.className = "alert alert-danger mt-4 mb-0";
}

if (typeof document !== "undefined") {
    const buttons = document.querySelectorAll("#game-buttons [data-choice]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const resultado = jugar(button.dataset.choice);
            renderResultado(resultado);
        });
    });
} else {
    const resultado = jugar("papel");
    console.log(`Tú: ${resultado.jugador} vs Ordenador: ${resultado.computer}`);
    console.log(resultado.ganador);
}



