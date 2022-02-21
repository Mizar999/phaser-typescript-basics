import {WelcomeScene} from "./welcome-scene";
import {GameScene} from "./game-scene";
import {ScoreScene} from "./score-scene";
import {Types, Game} from "phaser";

const config: Types.Core.GameConfig = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    scene: [WelcomeScene, GameScene, ScoreScene], // List of scenes to create; 1st scene is the initial scene.
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    backgroundColor: "#000033"
};

export class StarfallGame extends Game {
    constructor(config: Types.Core.GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new StarfallGame(config);
}