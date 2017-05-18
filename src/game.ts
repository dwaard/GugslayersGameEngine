/**
 * This is the main class of the game.
 * 
 * @author BugSlayer
 */
class Game
{
    intervalSetting = 40;       // The desired interval in ms
    previousIterationStart = 0; //The time the previous iteration started
    intervalSeconds = 0;        // The calculated interval between the start of the last iteration and the current one

    window : WindowListener;
    mouse : MouseListener;
    keyboard : KeyListener;
    
    scene : HTMLElement;

    fps : FPSCounter;
    deathstar : Ball;

    /**
     * Construct a new Game
     * 
     * @param scene The HTMLElement that represents the game scene
     */
    constructor(scene: HTMLElement)
    {
        this.window = new WindowListener();
        this.mouse = new MouseListener();
        this.keyboard = new KeyListener();
        this.scene = scene;
        this.fps = new FPSCounter(scene, "fps1");
        this.deathstar = new Ball(scene, "ball1");
    }

    /**
     * Start the game. This method should only be called once!
     */
    public start() {
       this.animate();
    }

    /**
     * Lambda that performs one iteration, and sets a timeout for the next.
     */
    animate = () => {
        // find the timing data
        var loopStart = window.performance.now();
        if (this.previousIterationStart == 0) {
            this.intervalSeconds = this.intervalSetting / 1000;
        } else {
            this.intervalSeconds = (loopStart - this.previousIterationStart) / 1000;
        }
        this.previousIterationStart = loopStart;
        // The steps of the game loop
        this.listen(this.intervalSeconds);
        this.move(this.intervalSeconds);
        this.draw(this.intervalSeconds);
        // compute the time to wait for the next iteration
        var diff = (window.performance.now() - loopStart);
        // set the timout for the next iteration
        setTimeout(this.animate, this.intervalSetting - diff);
    }

    /**
     * Listen and act to game inputs and other stuff like mouse, keyboard, screen size, network.
     * 
     * @param interval the time interval in seconds between this call and the previous
     */
    private listen(interval: number) : void
    {
        this.window.listen(interval);
        this.mouse.listen(interval);
    }

    /**
     * Accelerate and move the game objects according to the laws of physics. Thank you sir Isaac Newton.
     * 
     * @param interval the time interval in seconds between this call and the previous
     */
    private move(interval: number) : void
    {
        this.deathstar.move(interval);
    }

    /**
     * This translates the game state into a graphical representation on the screen.
     * 
     * @param interval the time interval in seconds between this call and the previous
     */
    private draw(interval: number) : void
    {
        this.deathstar.draw(interval);
        this.fps.draw(interval);
    }

}