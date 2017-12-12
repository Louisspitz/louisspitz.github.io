(function (window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }


        // container which will be returned
        var background;

        var backgroundBox;

        var buildings = [];

        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;




            background.removeAllChildren();


            // TODO: 3 - YOUR DRAW CODE GOES HERE

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,"orange");
            background.addChild(backgroundFill);

            var circle;

            for(var i=0;i<100;i++) {
                circle = draw.circle(10,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
            }

            backgroundBox = draw.rect(100,100,'Blue');
            backgroundBox.x = canvasWidth;
            backgroundBox.y = groundY;
            background.addChild(backgroundBox);



            var building;

            for(var i=0;i<15;i++) {
                 var buildingHeight = (Math.floor(Math.random()*250) +100+i);
                building = draw.rect(75,buildingHeight,'LightGray','Black',1);
                building.x = 200*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }


        }

        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            backgroundBox.x = backgroundBox.x - 1;
            if(backgroundBox.x < -100) {
                backgroundBox.x = canvasWidth;
            }



            //building
            for(var i=0; i< buildings.length;i++){
                buildings[i].x = buildings[i].x-10;
            if(buildings[i].x<-100){
                buildings[i].x = canvasWidth;}
            }


        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;



        app.addResizeable(background);
        app.addUpdateable(background);

        render();
        return background;
    };
}(window));