var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a47d8087-a3c9-4f18-8202-480028d38370","d37db7f9-9b51-449f-b0f6-ccbf6fb1fbb3","c58659f1-a38d-4b00-9812-fade8ec8a793","f6c7c363-fcee-4b5b-aca8-9b2283850280","af6c4c80-2c69-4962-979b-f4820e7fad52","fcceb24b-9dde-434f-b1cb-103607ca3ddf","8c528ee7-2413-4fdb-8e9e-c8807789fd3b","4f31b383-af7e-4a74-8a5e-a0ffbb334873","71ebb073-a12f-4bbb-a4fe-80c77f04fbf7","f4c15900-dfec-4b15-91ef-050a8fe7e965","bd3ea2da-e18f-4ca3-8929-6e7df2023242","780e870c-35e2-4f07-bf7f-6af2f9e88614"],"propsByKey":{"a47d8087-a3c9-4f18-8202-480028d38370":{"name":"button","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"BiDzZ4huCOKMPKvHeae.oOVbQwUqV9mg","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/a47d8087-a3c9-4f18-8202-480028d38370.png"},"d37db7f9-9b51-449f-b0f6-ccbf6fb1fbb3":{"name":"newcar","sourceUrl":"assets/v3/animations/SE094qm0c0Q9i9IqSnI8b40lqus3ASfdHXgQz4oDo3A/d37db7f9-9b51-449f-b0f6-ccbf6fb1fbb3.png","frameSize":{"x":84,"y":210},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZU5eU6U_H4JQjCrlbCedckP5xEfzs6zw","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":210},"rootRelativePath":"assets/v3/animations/SE094qm0c0Q9i9IqSnI8b40lqus3ASfdHXgQz4oDo3A/d37db7f9-9b51-449f-b0f6-ccbf6fb1fbb3.png"},"c58659f1-a38d-4b00-9812-fade8ec8a793":{"name":"cityroad","sourceUrl":"assets/v3/animations/SE094qm0c0Q9i9IqSnI8b40lqus3ASfdHXgQz4oDo3A/c58659f1-a38d-4b00-9812-fade8ec8a793.png","frameSize":{"x":448,"y":253},"frameCount":1,"looping":true,"frameDelay":4,"version":"iF3wUOFShb4P_S4E7T9VNbjWK05mlt31","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":253},"rootRelativePath":"assets/v3/animations/SE094qm0c0Q9i9IqSnI8b40lqus3ASfdHXgQz4oDo3A/c58659f1-a38d-4b00-9812-fade8ec8a793.png"},"f6c7c363-fcee-4b5b-aca8-9b2283850280":{"name":"cartop2","sourceUrl":"assets/v3/animations/MJNIJIwi33-W9VmP1gCbvkjGtr11jil7S08aX-qa4Rs/f6c7c363-fcee-4b5b-aca8-9b2283850280.png","frameSize":{"x":121,"y":309},"frameCount":1,"looping":true,"frameDelay":4,"version":"L3DSC7Xnl78W6Znqf9EUKFFKwHR3aDxH","loadedFromSource":true,"saved":true,"sourceSize":{"x":121,"y":309},"rootRelativePath":"assets/v3/animations/MJNIJIwi33-W9VmP1gCbvkjGtr11jil7S08aX-qa4Rs/f6c7c363-fcee-4b5b-aca8-9b2283850280.png"},"af6c4c80-2c69-4962-979b-f4820e7fad52":{"name":"cartop3","sourceUrl":"assets/v3/animations/MJNIJIwi33-W9VmP1gCbvkjGtr11jil7S08aX-qa4Rs/af6c4c80-2c69-4962-979b-f4820e7fad52.png","frameSize":{"x":217,"y":541},"frameCount":1,"looping":true,"frameDelay":4,"version":"4CBwc_MPUb9XdoDbK3p4xfodCSzAikD6","loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":541},"rootRelativePath":"assets/v3/animations/MJNIJIwi33-W9VmP1gCbvkjGtr11jil7S08aX-qa4Rs/af6c4c80-2c69-4962-979b-f4820e7fad52.png"},"fcceb24b-9dde-434f-b1cb-103607ca3ddf":{"name":"cartop4","sourceUrl":"assets/v3/animations/MJNIJIwi33-W9VmP1gCbvkjGtr11jil7S08aX-qa4Rs/fcceb24b-9dde-434f-b1cb-103607ca3ddf.png","frameSize":{"x":137,"y":309},"frameCount":1,"looping":true,"frameDelay":4,"version":"UeJLCrsDiWW6MdEONoIhYw_gMZPzlU__","loadedFromSource":true,"saved":true,"sourceSize":{"x":137,"y":309},"rootRelativePath":"assets/v3/animations/MJNIJIwi33-W9VmP1gCbvkjGtr11jil7S08aX-qa4Rs/fcceb24b-9dde-434f-b1cb-103607ca3ddf.png"},"8c528ee7-2413-4fdb-8e9e-c8807789fd3b":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"},"4f31b383-af7e-4a74-8a5e-a0ffbb334873":{"name":"GARAGE","sourceUrl":"assets/v3/animations/Kg937V2qA2J8A9PYqsGoxuMuXCqDjaPmwoFVnMdI_so/4f31b383-af7e-4a74-8a5e-a0ffbb334873.png","frameSize":{"x":255,"y":143},"frameCount":1,"looping":true,"frameDelay":4,"version":"JC7heuPXHFHAmwI9b2ECvlCOypu6oKnn","loadedFromSource":true,"saved":true,"sourceSize":{"x":255,"y":143},"rootRelativePath":"assets/v3/animations/Kg937V2qA2J8A9PYqsGoxuMuXCqDjaPmwoFVnMdI_so/4f31b383-af7e-4a74-8a5e-a0ffbb334873.png"},"71ebb073-a12f-4bbb-a4fe-80c77f04fbf7":{"name":"road 3.jpg","sourceUrl":"assets/v3/animations/C9-mZTBOUqdDCddnJXA-5NueQ1dsNei1QFzxscjHyz4/71ebb073-a12f-4bbb-a4fe-80c77f04fbf7.png","frameSize":{"x":733,"y":410},"frameCount":1,"looping":true,"frameDelay":4,"version":"dB9SyqeAAoV7q4pbMxP.CVP.hAp9JqE4","loadedFromSource":true,"saved":true,"sourceSize":{"x":733,"y":410},"rootRelativePath":"assets/v3/animations/C9-mZTBOUqdDCddnJXA-5NueQ1dsNei1QFzxscjHyz4/71ebb073-a12f-4bbb-a4fe-80c77f04fbf7.png"},"f4c15900-dfec-4b15-91ef-050a8fe7e965":{"name":"car1","sourceUrl":"assets/v3/animations/gGuvJvDNYin0LqpAzKXuZ3bZPxA7P0HkTZNjxkS5SlI/f4c15900-dfec-4b15-91ef-050a8fe7e965.png","frameSize":{"x":179,"y":115},"frameCount":1,"looping":true,"frameDelay":4,"version":"e5EZ79cs.8Iov.BrIMtSgeQfd1bKrabd","loadedFromSource":true,"saved":true,"sourceSize":{"x":179,"y":115},"rootRelativePath":"assets/v3/animations/gGuvJvDNYin0LqpAzKXuZ3bZPxA7P0HkTZNjxkS5SlI/f4c15900-dfec-4b15-91ef-050a8fe7e965.png"},"bd3ea2da-e18f-4ca3-8929-6e7df2023242":{"name":"car2","sourceUrl":"assets/v3/animations/gGuvJvDNYin0LqpAzKXuZ3bZPxA7P0HkTZNjxkS5SlI/bd3ea2da-e18f-4ca3-8929-6e7df2023242.png","frameSize":{"x":167,"y":95},"frameCount":1,"looping":true,"frameDelay":4,"version":"LZZIo3rWpRR1YwRqMHJ_5K4LWM8UQ1Zs","loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":95},"rootRelativePath":"assets/v3/animations/gGuvJvDNYin0LqpAzKXuZ3bZPxA7P0HkTZNjxkS5SlI/bd3ea2da-e18f-4ca3-8929-6e7df2023242.png"},"780e870c-35e2-4f07-bf7f-6af2f9e88614":{"name":"car3","sourceUrl":"assets/v3/animations/gGuvJvDNYin0LqpAzKXuZ3bZPxA7P0HkTZNjxkS5SlI/780e870c-35e2-4f07-bf7f-6af2f9e88614.png","frameSize":{"x":90,"y":213},"frameCount":1,"looping":true,"frameDelay":4,"version":"UdL0uXgqRTnxGpVUAF6JgiIKBg_OXthH","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":213},"rootRelativePath":"assets/v3/animations/gGuvJvDNYin0LqpAzKXuZ3bZPxA7P0HkTZNjxkS5SlI/780e870c-35e2-4f07-bf7f-6af2f9e88614.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState="wait";
var road=createSprite(200,200,10,1000);
road.setAnimation("road 3.jpg");
road.visible=false;

//create the start button
var button=createSprite(180,350,10,10);
button.setAnimation("button");

var car=createSprite(78,350,20,20);
car.setAnimation("car3");
car.scale=0.5;
car.visible=false;

var enemycarsgroup=createGroup();
var score=0;
var coingroup=createGroup();

var batterylife=0;
var garagegroup=createGroup();

playSound("assets/car-speed-01.mp3",true);

function draw() {
 
 if(gameState=="wait"){
  background("lightblue");
  
  textSize(30);
  fill("purple");
  text("Driving Skills Test Rules",65,25);
  
  textSize(20);
  fill("red");
  text("1. press space to Start",20,100);
  
  text("2. Avoid other cars in the game",20,150);
  
  text("3. go to the garage to get power",20,200);
  
  text("4. collect the coins", 20,250);
  
  text("5. complete the game on time",20,300);
   car.visible=false;
  
  if(mousePressedOver(button)){
    gameState="play";
  }
 }
 
 
if(gameState=="play"){
  background("lightgreen");
  button.visible=false;
  car.visible=true;
 // car.scale=1.5;
  
  collectcoins();
  road.visible=true;
  road.scale=2.5;
  /*
  if(keyWentDown("u")){
    road.velocityY=5;   
  }
  if (keyWentUp("u")){
    road.velocityY=0;
  }
  */
  road.velocityY=3;
  if(road.y>400){
    road.y=road.height/5.5;
  }
  
  if (keyWentDown("left")){
    car.velocityX=-2
  }
  if(keyWentUp("left")){
    car .velocityX=0;
  }
  if(keyWentDown("right")){
    car.velocityX=2;
  }
  if (keyWentUp("right")){
    car.velocityX=0;
  }
  
  spawncars();
  spawngarage();
  
  if(car.isTouching(garagegroup)){
    batterylife=batterylife+1;
    garagegroup.destroyEach();
  }
  
  if(car.isTouching(enemycarsgroup)){
   
    car.velocityX=0;
    batterylife=batterylife-1;
    playSound("assets/car-crash.mp3");
    stopSound("assets/car-speed-01.mp3");
  }
  
  if(car.isTouching(coingroup)){
    score=score+10;
    coingroup.destroyEach();
  }
  
  if(batterylife==-1){
    gameState="over";
    
    road.velocityY=0;
    enemycarsgroup.setVelocityYEach(0);
    coingroup.destroyEach();
    garagegroup.setVelocityYEach(0);
  }
  drawSprites();
  textSize(20);
 fill("white");
 text("coin"+score,300,80);
 fill("red");
 text("Battery:"+batterylife,50,50);
}
 
 
 
 }
  

function spawncars(){
  if(World.frameCount%100==0){
    var enemycar=createSprite(randomNumber(50,250),0,10,10);
    enemycar.velocityY=3;
    enemycar.scale=0.3;
    var num=Math.round(randomNumber(2,4));
    if(num==3){
      enemycar.scale=0.1;
    }
    enemycar.setAnimation("cartop"+num);
    enemycarsgroup.add(enemycar);
  }
}
function collectcoins(){
  if(World.frameCount%80==0){
    var coin=createSprite(randomNumber(100,200),0,10,10);
    coin.velocityY=5;
    coin.scale=0.5;
    coin.setAnimation("coin_gold_1");
    coingroup.add(coin);
}
}
function spawngarage(){
  if(World.frameCount%150==0){
     var garage=createSprite(50,0,10,10);
     garage.velocityY=3;
     garage.scale=0.5;
     garage.setAnimation("GARAGE");
     garagegroup.add(garage);
  }
}








// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
