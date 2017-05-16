/**
 * This class represents a basic circular moving shape.
 * 
 * @author BugSlayer
 */
class Ball 
{
    private html : HTMLElement;
    size : number;

    position : Vector;

    /**
     * @param html The HTMLElement that is the graphical representation of this ball
     */
    constructor(html: HTMLElement)
    {
        this.html = html;
        let rect = html.getBoundingClientRect();
        this.size = rect.width;
        this.position = new Vector(rect.left, rect.top);
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
        this.html.style.left = "" + this.position.x() + 'px';
        this.html.style.top = "" + this.position.y() + 'px';
    }

}