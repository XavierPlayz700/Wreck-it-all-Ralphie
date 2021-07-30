class Ball {

    constructor(x, y, r, angle){
          
        var options = {

            friction : 0.04,
            density : 1,
            restitution : 1.5

        }

        this.body = Bodies.circle(x, y, r, options);

        this.r = r;
        World.add(world, this.body);

    }

    display () {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("grey");
        ellipse(0, 0, this.r, this.r);
        pop();

    }


}