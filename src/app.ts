import "phaser";
import {WelcomeScene} from "./welcome-scene";
import {GameScene} from "./game-scene";
import {ScoreScene} from "./score-scene";

const config: GameConfig = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    scene: [WelcomeScene, GameScene, ScoreScene], // List of scenes to create; 1st scene is the initial scene.
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#000033"
};

export class StarfallGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new StarfallGame(config);
}