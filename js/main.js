// Controls the speed of the game
const speedThreshold = 256;

// Canvases and its contexts
const gameCanvas = document.getElementById("game");
const gameCtx = gameCanvas.getContext("2d");
const backgroundCanvas = document.getElementById("background");
const backgroundCtx = backgroundCanvas.getContext("2d");
const workshopCanvas = document.getElementById("workshop");
const workshopCtx = workshopCanvas.getContext("2d");
const menuCanvas = document.getElementById("menu");
const menuCtx = menuCanvas.getContext("2d");

const GAME_WIDTH = gameCanvas.width;
const GAME_HEIGHT = gameCanvas.height;

// Create game content
const background = new Background(GAME_WIDTH, GAME_HEIGHT);
const game = new Game(GAME_WIDTH, GAME_HEIGHT);
const menu = new Menu(GAME_WIDTH, GAME_HEIGHT);

// Create input handler
this.inputs = new InputHandler();

// Initialize game content
background.init(game);
game.init(background);
menu.init();

// Initialize input handler
this.inputs.init(game, menu);

// Main loop
let lastTime = 0;
function loop(timeStamp) {

    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    
    // Draw background
    background.update(deltaTime, timeStamp);
    background.draw(backgroundCtx);

    // Draw game
    game.update(deltaTime, timeStamp);
    game.draw(gameCtx);

    // Draw menu
    menu.update();
    menu.draw(menuCtx);

    requestAnimationFrame(loop);

}

requestAnimationFrame(loop);