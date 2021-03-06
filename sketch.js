const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var ground,stand;
var polygon,backgroundImg;
var score = 0;

function preload(){
    getBg();
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    

    //level1
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);

    //level2
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);

    //top
    box9 = new Box(390,155,30,40);

    stand = new Ground(450,315,250,107);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);



   

    Slingshot =  new slingshot(this.polygon,{x:100,y:200});

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    text("Score:"+score,750,40 )

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();

    ground.display();
    stand.display();
    
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY})

}

function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
    Slingshot.attach(this.polygon);
    }
}

 async function getBg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11,13);

    if(hour>07 && hour<18 ){
        bg = "bg.png"
    }
    else{
        bg = "bg2.jpg"
    }
    backgroundImg = loadImage(bg)
}

