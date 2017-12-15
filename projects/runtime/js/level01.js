(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants
        var groundY = game.groundY;




        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [

            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var createSawBlade = function(x,y) {
             var hitZoneSize = 25;
        var damageFromObstacle = Math.floor((Math.random() * 20) + 10);
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        game.addGameItem(myObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        };

        var sawy = [groundY,groundY-115];
        for(var i=0;i<=50;i++){

            createSawBlade (i*200, sawy[(Math.floor((Math.random() *2)))]);
        }


                function createEnemy(x,y) {

                var enemy =  game.createGameItem('enemy',25);
                var redSquare = draw.rect(50,50,'red');
                redSquare.x = -25;
                redSquare.y = -25;
                enemy.addChild(redSquare);
                enemy.x = 400;
                enemy.y = groundY-50;
                game.addGameItem(enemy);
                enemy.velocityX = -5;
                enemy.rotationalVelocity=30;
                enemy.onPlayerCollision = function() {
                game.changeIntegrity( Math.floor((Math.random() * -50) + -5));


                };
                enemy.onProjectileCollision = function(){
                    game.increaseScore(100);
                    enemy.fadeOut();
                }}
                createEnemy(400,groundY-10);

                function reword(x,y){
                    var reword=  game.createGameItem('reword',25);
                    var rewordImg=draw.rect(100, 100, 'blue' );
                    rewordImg.x =-25;
                    rewordImg.y =-25;
                    reword.addChild(rewordImg);
                    reword.x =x;
                    reword.y = groundY-130;
                    game.addGameItem(reword);
                    reword.velocityX=-2;
                    reword.rotationalVelocity=0;
                    reword.onPlayerCollision = function(){
                        game.increaseScore(800);
                        reword.fadeOut();
                    };}
                reword(10000,100);







        levelData.gameItems.forEach(function(gameItem) {
            createSawBlade(gameItem.x, gameItem.y);
        });
    };
})(window);
