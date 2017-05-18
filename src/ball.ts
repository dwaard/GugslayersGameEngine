/**
 * This class represents a basic circular moving shape.
 * 
 * @author BugSlayer
 */
class Ball 
{
    private name : String;
    private html : HTMLElement;
    size : number;

    position : Vector;

    /**
     * @param scene The HTMLElement that representats the scene of the game
     */
    constructor(scene: HTMLElement, name : string, 
                position = new Vector(0,0))
    {
        this.html = document.createElement("div");
        this.html.id = name;
        this.html.className = "deathstar";
        scene.appendChild(this.html);
        this.position = position;
    }

    /**
     * Let the ball move over the specified interval
     * 
     * @param interval the time interval to move over
     */
    public move(interval: number) : void
    {
        // TODO: implement movement of ball
    }

    /**
     * Render the ball on the correct position on the screen
     * 
     * @param interval the time interval to move over
     */
    public draw(interval: number) : void
    {
        let rect = this.html.getBoundingClientRect();
        this.size = rect.width;
        this.html.style.left = "" + this.position.x() + 'px';
        this.html.style.top = "" + this.position.y() + 'px';
    }

}