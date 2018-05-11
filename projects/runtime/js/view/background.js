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
        var backgroundBoxa;

        var buildings = [];
        var buildingsb = [];
        var buildingsc = [];

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
            var backgroundFill = draw.rect(canvasWidth,groundY,"black");
            background.addChild(backgroundFill);













            var building;

                for(var i=0;i<15;i++) {
                 var buildingHeightc = (Math.floor(Math.random()*150) +50+i);
                building = draw.rect(75,buildingHeightc,'BLACK','white',1);
                building.x = 200*i;
                building.y = groundY-buildingHeightc;
                background.addChild(building);
                buildingsc.push(building);
            }

            for(var i=0;i<15;i++) {
                 var buildingHeightb = (Math.floor(Math.random()*200) +50+i);
                building = draw.rect(75,buildingHeightb,'BLACK','white',1);
                building.x = 100*i;
                building.y = groundY-buildingHeightb;
                background.addChild(building);
                buildingsb.push(building);
            }

            for(var i=0;i<15;i++) {
                 var buildingHeight = (Math.floor(Math.random()*250) +100+i);
                building = draw.rect(75,buildingHeight,'BLACK','white',1);
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




            //building
           for(var i=0; i< buildingsc.length;i++){
                buildingsc[i].x = buildingsc[i].x-1.5;
            if(buildingsc[i].x<-100){
                buildingsc[i].x = canvasWidth;}
            }

            for(var i=0; i< buildingsb.length;i++){
                buildingsb[i].x = buildingsb[i].x-1.75;
            if(buildingsb[i].x<-100){
                buildingsb[i].x = canvasWidth;}
            }

            for(var i=0; i< buildings.length;i++){
                buildings[i].x = buildings[i].x-2;
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