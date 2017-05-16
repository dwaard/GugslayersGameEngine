/**
 * This class represents a mathematical immutable Vector.
 * 
 * @author BugSlayer
 */
class Vector {
    // All attributes are private because the Vector must be immutable.
    private _x : number;
    private _y : number;
    private _size: number = null;
    private _angle: number = null;

    /**
     * Constructs a new Vector.
     * 
     * @param x the x-portion of this vector
     * @param y the y-portion of this vector
     */
    constructor(x = 0, y = 0)
    {
        this._x = x;
        this._y = y;
    }

    /**
     * Returns the X-portion of this vector.
     * 
     * @return the X-portion of this vector.
     */
    public x(): number
    {
        return this._x;
    }

    /**
     * Returns the Y-portion of this vector.
     * 
     * @return the Y-portion of this vector.
     */
    public y(): number
    {
        return this._y;
    }

    /**
     * Returns the size or length of this Vector
     * 
     * @return the size or length of this Vector
     */
    public size(): number
    {
        if (!this._size) {
            // Calculate only once for performance reasons
            this._size = Math.sqrt(Math.pow(this._x, 2) + 
                                   Math.pow(this._y, 2));

        }
        return this._size;
    }

    /**
     * Returns the angle between this vector and the X-axis in radians as a value between -PI/2 and PI/2 radians.
     * 
     * @return the angle between this vector and the X-axis in radians as a value between -PI/2 and PI/2 radians.
     */
    public angle(): number
    {
        if (!this._angle) {
            // Calculate only once for performance reasons
            this._size = Math.atan(this._y / this._x);

        }
        return this._angle;
    }


    /**
     * Returns a new Vector representing the sum of this Vector and the given input.
     * 
     * @param input the Vector that must be subtracted to this Vector
     * @return a new Vector representing the sum of this Vector and the input.
     */
    public add(input: Vector) : Vector
    {
        return new Vector(
            this._x + input.x(),
            this._y + input.y()
        );
    }

    /**
     * Returns a new Vector representing the difference between this Vector and the given input.
     * 
     * @param input the Vector that must be subtracted to this Vector
     * @return a new Vector representing the difference between this Vector and the input.
     */
    public subtract(input: Vector) : Vector
    {
        return new Vector(
            this._x - input.x(),
            this._y - input.y()
        );
    }

    /**
     * Returns a new Vector representing the distance of the endpoints of this vector and the given input.
     * 
     * @param input the Vector that must be subtracted to this Vector
     * @return a new Vector representing the distance of the endpoints of this vector and the input.
     */
    public distance(input: Vector): number
    {
        return this.subtract(input).size();
    }

    /**
     * Returns a new Vector representing the result of the multiplication of this vector and the specified scalar.
     * 
     * @param scalar the scalar that should be used in the calculation
     * @return a new Vector representing the result of the multiplication of this vector and the specified scalar.
     */
    public scale(scalar: number) : Vector
    {
        return new Vector(
            this._x * scalar,
            this._y * scalar
        );
    }

    /**
     * Returns a new Vector representing the mirrored version of this vector wih respect to the X-axis. This means that the
     * Y-portion of this vector will be multiplied by -1.
     * 
     * @return a new Vector representing the mirrored version of this vector wih respect to the X-axis.
     */
    public mirror_X(): Vector
    {
        return new Vector(this._x, this._y * -1);
    }

    /**
     * Returns a new Vector representing the mirrored version of this vector wih respect to the Y-axis. This means that the
     * X-portion of this vector will be multiplied by -1.
     * 
     * @return a new Vector representing the mirrored version of this vector wih respect to the X-axis.
     */
    public mirror_Y(): Vector
    {
        return new Vector(this._x * -1, this._y);
    }
    
}