class string{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
           }
               }
    attach(body){
    this.sling.bodyA = body    
    }

 fly(){
     this.sling.bodyA = null
 }
 display(){
     push();
 if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
 Pop()
}
 }





    }