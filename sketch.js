var player,playerKnifeImg,bgImg;
var edges,flag="closed";
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var engine,battery,tools,engineImg,batteryImg,toolImg,gunsImg,workShop,dockInstructionImg;
var count=0;
var gameState="level1";
var ship,landing,bg,img;
var floorImg
var life=0;
var plr="true";
var plbulletgroup;
var en=0;
function preload()
{
    bgImg=loadImage("Images/other-assets/floor.jpg");
    
    playerKnifeImg=loadImage("Images/player/player-knife.png");
    shipImg=loadImage("Images/Space-ships/spacecraft.png");
    bgImg2=loadImage("Images/other-assets/space.jpg"); 
    stationImg=loadImage("Images/Space-ships/Spacestation.png");
    dockInstructionImg=loadImage("Images/other-assets/Dock-text.png");
    engineImg=loadImage("Images/other-assets/engine.png");
    batteryImg=loadImage("Images/other-assets/battery.png");
    toolImg=loadImage("Images/other-assets/toolkit.png");
    gunImg=loadImage("Images/weapons/guns.jpg");

    plrGunImgleft=loadImage("Images/player-rifle-left.png");
    plrGunImgright=loadImage("Images/player-rifle-right.png");
    enemyImg=loadImage("Images/assasin1.png");
    bossImg=loadImage("Images/James right.png");
    fixedgunImg=loadImage("Images/fixedgunImg.png");
    bulletleftimg=loadImage("Images/bullet-left.png");
    bulletrightimg=loadImage("Images/bullet-right.png");
  
  }

function setup()
{
    createCanvas(1300,600);
  //  console.log(width,height);                                                                                                                                          
  bg=createSprite(windowWidth/2,windowHeight/2,100,100);
  bg.addImage(bgImg2);
  bg.scale=0.4;
  plbulletgroup=new Group();

//  level1();

    
if(gameState==="level1")
    {
      // bg=createSprite(windowWidth/2,windowHeight/2,100,100);
      // bg.addImage(bgImg2);
      // bg.scale=0.4;
      
        player=createSprite(1290,550,60,50);
        player.addImage(playerKnifeImg);
        player.scale=0.3;
  
        wall1=createSprite(150,90,10,180); //first vertical top
        wall1.rotation=0;    
    
        wall2=createSprite(260,390,320,10); //first downward slanted mid    
        wall2.rotation=45;    
    
        wall3=createSprite(80,280,150,10); //second horizontal mid    
        wall3.rotation=0;    
    
        wall4=createSprite(150,510,10,180);//first vertical bottom    
        wall4.rotation=0;    
    
        wall5=createSprite(430,229,200,10); //second upward slanted    
        wall5.rotation=145;    
    
        wall6=createSprite(550,590,600,10); //first horizontal bottom    
        wall6.rotation=0;    
    
        wall7=createSprite(670,500,600,10);//second horizontal bottom
        wall7.rotation=0;

        wall8=createSprite(350,90,10,400); //second vertical top
        wall8.rotation=0;

        wall9=createSprite(510,90,10,180); //third vertical top
        wall9.rotation=0;


        wall10=createSprite(805,90,10,400); //fourth vertical top
        wall10.rotation=0;

        wall11=createSprite(950,290,300,10); //third horizontal middle 
        wall11.rotation=0;

        wall12=createSprite(1095,90,10,400); //fourth vertical top
        wall12.rotation=0;

        engine=createSprite(100,500,50,50); 
        engine.addImage(engineImg);
        engine.scale=0.2;

        battery=createSprite(200,500,50,50);
        battery.addImage(batteryImg);
        battery.scale=0.4;

        tools=createSprite(300,300,50,50);
        tools.addImage(toolImg);
        tools.scale=0.2;

        gun=createSprite(100,100,50,50);
        gun.addImage(gunImg);
        gun.scale=0.2;

        workShop=createSprite(1005,150,20,20);
    }
    if(gameState==="level2")
    {
        //background("red");
        //  bg=createSprite(windowWidth/2,windowHeight/2,100,100);
        //  bg.addImage(bgImg2);
        //  bg.scale=0.4;
        
        
        ship=createSprite(windowWidth-windowWidth/1.2,windowHeight/2,50, 50);
        ship.addImage(shipImg);
        ship.scale=0.5;
        //ship.debug=true;
      
        station=createSprite(windowWidth/2+300,windowHeight/2-50,10,10);
        station.addImage(stationImg);
        station.scale=2.0;
                
        //station.debug=true;
        
        landing= createSprite(windowWidth/2+500,windowHeight/2-50,10,10);
        landing.visibility=false;
        //landing.debug=true;
 //       called=1; 
        img=createSprite(900,200);
        img.addImage(dockInstructionImg);
        //img.debug=true;
       
    }
    if(gameState==="level3")
    {
       // background("lightblue");
        // bg=createSprite(windowWidth/2,windowHeight/2,100,100);
        // bg.addImage(bgImg2);
        // bg.scale=0.4;
       
        bulletGrp1=new Group();
        bulletGrp2=new Group();
        bulletGrp3=new Group();
        bulletGrp4=new Group();
          
        plrGun=createSprite( 1285,550,20,20 );
        plrGun.addImage("player",plrGunImgleft);
        plrGun.scale=0.5
      
        obst1=createSprite( innerWidth/2+50,innerHeight/2,10,450 ); 
        obst2=createSprite( plrGun.x-200,innerHeight/2,10,450 ); 
        
        fixedgun1=createSprite( 250,100,20,20 );
        fixedgun1.addImage("guns1",fixedgunImg);
        fixedgun1.scale=0.8;
      
        fixedgun2=createSprite( 250,250,20,20 );
        fixedgun2.addImage("guns2",fixedgunImg);
        fixedgun2.scale=0.8;
      
        fixedgun3=createSprite( 250,400,20,20 );
        fixedgun3.addImage("guns3",fixedgunImg);
        fixedgun3.scale=0.8;
      
        fixedgun4=createSprite( 250,550,20,20 );
        fixedgun4.addImage("guns4",fixedgunImg);
        fixedgun4.scale=0.8;
      
        enemy1=createSprite( obst1.x-20,obst1.y+30,20,20 );
        enemy1.addImage("enemy1",enemyImg);
        enemy1.scale=1.5;
      
        enemy2=createSprite( obst1.x-20, obst1.y-30,20,20 );
        enemy2.addImage("enemy2",enemyImg);
        enemy2.scale=1.5;
      
        boss=createSprite( 70,300,20,20 );
        boss.addImage("boss",bossImg);
        boss.velocityY=-2;
        edges=createEdgeSprites();
      
      
        enemy1.velocityY=-2;
        enemy2.velocityY=2;
      
      }
     if(gameState==="level4")
       {
      //   bg=createSprite(windowWidth/2,windowHeight/2,100,100);
      //   bg.addImage(bgImg2);
      //   bg.scale=0.4;
       end=createElement('h1');
       rest=createButton('Replay');
      
       }
  }

function draw()
{
    background(0);  
    edges=createEdgeSprites();

    
    if(gameState==="level1")
    {
      player.velocityX=0;
      player.velocityY=0;
    
      level1();
   

      if(player.isTouching(workShop))
      {
          gameState="level2";
          setup(); 
            
      }
    }
    if(gameState==="level2")
    {
      
      level2();

      if(ship.isTouching(landing))
      {
    //     fill('white');
    //    console.log("Landed");
          gameState="level3";
          //bg.destroy();
          setup();
      }
    }
    
    if(gameState==="level3")
    {
      
      level3();

   //   if(ship.isTouching(landing))
     // {
    //     fill('white');
    //    console.log("Landed");
       //   gameState="level3";
   //       setup();
    //  }
    }

    if(life===5 && plr=="true")
    {
      plrGun.destroy();
  
       plr="false";
       gameState="level4";
       setup();
    }
    if(en===2)
    {
      enemy1.destroy();
    }
   if(gameState==="level4")
{
  level4();
}
    
  
    //text(mouseX+" "+mouseY,mouseX,mouseY);
    drawSprites();
    
}

function level1()
{
    fill('white');
    
    if(keyDown("RIGHT_ARROW")){
      player.velocityX+=8;
    }

    if(keyDown("LEFT_ARROW")){
      player.velocityX-=8;
    }

    if(keyDown("UP_ARROW")){
      player.velocityY-=8;
    }

    if(keyDown("DOWN_ARROW")){
      player.velocityY+=8;
    }

    if(player.isTouching(engine))
    {
      engine.destroy();
      count++;
    }
    if(player.isTouching(battery))
    {
      battery.destroy();
      count++;
    }
    if(player.isTouching(tools))
    {
      tools.destroy();
      count++;
    }
    if(player.isTouching(gun))
    {
      gun.destroy();
      count++;
    }
    if(count===4 && player.x>1000 &&player.y<350)
    {
      wall11.y=wall11.y-50;
    }

    player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.bounceOff(wall3);
    player.bounceOff(wall4);
    player.bounceOff(wall5);
    player.bounceOff(wall6);
    player.bounceOff(wall7);
    player.bounceOff(wall8);
    player.bounceOff(wall9);
    player.bounceOff(wall10);
    player.bounceOff(wall11);
    player.bounceOff(wall12);
    player.bounceOff(edges);

}

function level2()
{
        if (ship.x<0 || ship.x>1990 || ship.y<50 || ship.y>750)
        {
          textSize(24);
          fill('white')
          text("Return to area or you will expload",ship.x,ship.y);
          
        }
            //console.log(ship.y);
        
        if(keyDown("RIGHT_ARROW")){
          ship.x=ship.x+5;
        }
        if(keyDown("LEFT_ARROW")){
          ship.x=ship.x-5;
        }
        if(keyDown("UP_ARROW")){
          ship.y=ship.y-5;
        }
        if(keyDown("DOWN_ARROW")){
          ship.y=ship.y+5;
        }
       
}

function level3()
{
  if (keyWentDown("space")){
    var plBullet=createSprite(plrGun.x,plrGun.y+10);
    plBullet.addImage("bullet",bulletleftimg);
    plBullet.velocityX=-15;
    plBullet.scale=0.1;
    plbulletgroup=new Group();
  }
  
  for(var x=0;x<plbulletgroup.length;x++)
{
  if(plbulletgroup[x].isTouching(enemy1))
  {
    plbulletgroup[x].destroy();
    en++;
    
  }
    
  }      

  
  // if (plBullet.isTouching(boss)) {
    
  // }
  // if (plBullet.isTouching) {
    
  // }
  // if (plBullet.isTouching) {
    
  // }
  // if (plBullet.isTouching) {
    
  // }
  // if (plBullet.isTouching) {
    
  // }
  // if (plBullet.isTouching) {
    
  // }
  // if (plBullet.isTouching) {
    
  // }
  plrGun.bounceOff(obst1);
  plrGun.bounceOff(obst2);
  
  // plrGun.velocityX=0;
  // plrGun.velocityY=0;   

  if(keyDown("up")){
    plrGun.x=plrGun.x+0;
    plrGun.y=plrGun.y-8;
    
    //plrGun.velocityX=0;
    // plrGun.velocityY=-8;
  }
  if(keyDown("down")){
    plrGun.x=plrGun.x+0;
    plrGun.y=plrGun.y+8;
   
  //   plrGun.velocityX=0;
  //   plrGun.velocityY=8;
   }
  if(keyDown("left")){
    plrGun.x=plrGun.x-8;
    plrGun.y=plrGun.y+0;
   

    // plrGun.velocityX=-8;
    // plrGun.velocityY=0;
    plrGun.addImage("player",plrGunImgleft);
  }
  if(keyDown("right")){
    plrGun.x=plrGun.x-8;
    plrGun.y=plrGun.y+0;
   

    // plrGun.velocityX=9;
    // plrGun.velocityY=0;
    plrGun.addImage("player",plrGunImgright);
  }
  if(frameCount%60===0)
  {
     bullet1=createSprite(fixedgun1.x+60,fixedgun1.y-60,10,10);
    bullet1.addImage(bulletrightimg);
     bullet2=createSprite(fixedgun2.x+60,fixedgun2.y-60,10,10);
    bullet2.addImage(bulletrightimg)
   bullet3=createSprite(fixedgun3.x+60,fixedgun3.y-60,10,10);
    bullet3.addImage(bulletrightimg)
     bullet4=createSprite(fixedgun4.x+60,fixedgun4.y-60,10,10);
    bullet4.addImage(bulletrightimg)
    
    bullet1.velocityX=4;
    bullet2.velocityX=4;
    bullet3.velocityX=4;
    bullet4.velocityX=4;

    bullet1.scale= 0.1;
    bullet2.scale= 0.1;
    bullet3.scale= 0.1;
    bullet4.scale= 0.1;
    bulletGrp1.add(bullet1);
    bulletGrp1.add(bullet2);
    bulletGrp1.add(bullet3);
    bulletGrp1.add(bullet4);
    
  }
enemy1.bounceOff(edges[2]);
enemy1.bounceOff(edges[3]);
enemy2.bounceOff(edges[2]);
enemy2.bounceOff(edges[3]);
boss.bounceOff(edges[2]);
boss.bounceOff(edges[3]);

for(var x=0;x<bulletGrp1.length;x++)
{
  if(bulletGrp1[x].isTouching(plrGun)&&plr!=="false")
  {
    bulletGrp1[x].destroy();
    life++;
    
  }
    
  }
  
  
  
  
  // if(life===5 && plr=="true")
  // {
  //   plrGun.destroy();

  //    plr="false"
  // }


}
function level4()
{
  end.html("Thats the end")
  end.position(200,200);

 
  rest.position(600,200);
  rest.mousePressed(function(){
    gameState="level1";
    setup();
    end.hide();
    rest.hide();
  })


}
