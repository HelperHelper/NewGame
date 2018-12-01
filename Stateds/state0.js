var demo = {}, centerX = 1500/2, centerY = 1000/2, Rob, speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
  preload: function(){
      
      game.load.spritesheet('Rob', 'Assets/SpritesSheets/RobSheet.png', 305 , 305);
      game.load.image('Mundo', 'Assets/BackGrounds/Mundo.png');
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
     game.stage.backgroundColor = '#6666ff';
      console.log('state0');
     
       addChangeStateEventListeners();
      game.world.setBounds(0, 0, 1500, 1500);
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Este pedaso me permite ver todas rerendisaciones posibles para mi escena
      
        var Mundo = game.add.sprite(0,0, 'Mundo');
      
     Rob = game.add.sprite(centerX, centerY, 'Rob');
      Rob.anchor.setTo(0.5,0.5);
      Rob.scale.setTo(0.7,0.7);
      game.physics.enable(Rob);
      Rob.body.collideWorldBounds = true;
      Rob.animations.add('Attack', [0,1,2]);
      
    game.camera.follow(Rob);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);  
      
  },
  update: function(){
      
      if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
          Rob.scale.setTo(-0.7,0.7);
          Rob.x += speed;
          //BotAdam.
         
     
      }
          
          else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
          Rob.scale.setTo(0.7,0.7);
          Rob.x -= speed;
          
          
      }
          if(game.input.activePointer.leftButton.isDown){
              Rob.animations.play('Attack', 14, false);
          }else{
              Rob.animations.stop('Attack');
              Rob.frame = 0;
          }
      
       if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
          Rob.y -= speed;
           if(Rob.y < 292){
               Rob.y = 292;
              
              }
      }
      else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
          Rob.y += speed;
      }
  }
};

function changeState(i, stateNum){
    
    game.state.start('state' + stateNum)
}

function addKeyCallback(key, fn, args){
    
    game.input.keyboard.addKey(key).onDown.add(fn, null,null, args);
    
}

function addChangeStateEventListeners(){
    
      addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
      addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
      addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
      addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
      addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
      addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
      addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
      addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
      addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
      addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
  
}