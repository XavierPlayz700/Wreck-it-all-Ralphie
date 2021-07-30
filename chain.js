class Chain {

    constructor (bodyA, pointB){

        var options = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 250

        }

        this.chain = Constraint.create(options);

        this.bodyA = bodyA;
        this.pointB = pointB;

        World.add(world, this.chain);

    }

    attach (body) {

         this.chain.bodyA = body;

    }

    fly () {

        this.chain.bodyA = null;

    }

    display () {


        if (this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.pointB;

        push();
        strokeWeight(4);
        stroke("black");
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
        }

    }

}