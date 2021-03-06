class slingshot{
    constructor(bodyA,pointB){ 
     var options = {
         bodyA:bodyA ,
         pointB:pointB ,
         stiffness:0.04,
         length:10
     }
    
     this.slingshot = Constraint.create(options);
     World.add(world,this.slingshot);
     this.pointB=pointB
 }

 attach(body){
     this.slingshot.bodyA = body;
 }
 
 fly(){
     this.slingshot.bodyA = null;
 }
 
     display(){
 
     if(this.slingshot.bodyA){
         var pointA = this.slingshot.bodyA.position;
         var pointB = this.pointB;
        
         line(pointA.x,pointA.y,pointB.x,pointB.y);
     
 
 }
}
}