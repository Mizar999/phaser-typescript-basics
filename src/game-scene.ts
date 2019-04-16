import "phaser";

export class GameScene extends Phaser.Scene {
    delta: number;
    lastStarTime: number;
    starsCaught: number;
    starsFallen: number;
    sand: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    /**
     * Is called when the scene is started.
     * Pass parameters by scene.start(key, [params])
     * @param params 
     */
    init(params: any): void {
        this.delta = 1000;
        this.lastStarTime = 0;
        this.starsCaught = 0;
        this.starsFallen = 0;
    }

    /**
     * Is called before the scene objects are created.
     * Load your assets here.
     */
    preload(): void {
        this.load.image("star", "assets/star.png");
        this.load.image("sand", "assets/sand.jpg");
    }

    /**
     * Is called when the assets are loaded.
     * Create your game objects here.
     */
    create(): void {
        /* A group is used to create a bunch of objects,
        that will be controlled together. */
        this.sand = this.physics.add.staticGroup({
            key: "sand",
            frameQuantity: 20
        });
        /* Canvas is 800 x 600; Sand image is 40 x 40;
        Anchor point is centered */
        Phaser.Actions.PlaceOnLine(
            this.sand.getChildren(),
            new Phaser.Geom.Line(20, 580, 820, 580)
        );
        // Update the group bounding box 
        this.sand.refresh();

        let style = {font: "24px Arial Bold", fill: "#FBFBAC"};
        this.info = this.add.text(10, 10, "", style);
    }

    /**
     * Is called every tick.
     * @param time 
     */
    update(time: any): void {
        let diff: number = time - this.lastStarTime;
        if (diff > this.delta) {
            this.lastStarTime = time;
            // Speed up after each star
            if (this.delta > 500) {
                this.delta -= 20;
            }
            this.emitStar();
        }

        this.info.text = `${this.starsCaught} caught - ${this.starsFallen} fallen (max 3)`;
    }

    private onClick(star: Phaser.Physics.Arcade.Image): () => void {
        return function() {
            star.setTint(0x00ff00);
            star.setVelocity(0, 0);
            this.starsCaught += 1;
            // Destroy the star after some milliseconds
            this.time.delayedCall(100, function(star) {
                star.destroy();
            }, [star], this);
        }
    }
    
    private onFall(star: Phaser.Physics.Arcade.Image): () => void {
        return function() {
            star.setTint(0xff0000);
            this.starsFallen += 1;
            // Destroy the star after some milliseconds
            this.time.delayedCall(100, function(star) {
                star.destroy();
            }, [star], this);
        }
    }

    private emitStar(): void {
        let x = Phaser.Math.Between(25, 775);
        let y = 26;
        let star = this.physics.add.image(x, y, "star");

        star.setDisplaySize(50, 50);
        star.setVelocity(0, 200);
        star.setInteractive();

        star.on("pointerdown", this.onClick(star), this);
        this.physics.add.collider(star, this.sand, this.onFall(star), null, this);
    }
}