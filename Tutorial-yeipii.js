(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Tutorial_yeipii_atlas_", frames: [[430,0,259,259],[0,0,428,869],[430,261,247,71]]}
];


// symbols:



(lib.info = function() {
	this.spriteSheet = ss["Tutorial_yeipii_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.phoneblack = function() {
	this.spriteSheet = ss["Tutorial_yeipii_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.YEiPiiwhite = function() {
	this.spriteSheet = ss["Tutorial_yeipii_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.info();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.108,0.108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(32,34,148,0.098)").s().p("AhgBgQgngoAAg4QAAg4AngoQAogoA4AAQA5AAAoAoQAoAogBA4QABA4goAoQgoApg5AAQg4AAgogpg");
	this.shape.setTransform(13.8,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.Btnmenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ah9BsID7AAAh9hrID7AAAh9gDID7AA");
	this.shape.setTransform(12.6,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,34,148,0.098)").s().p("AiXCJIAAkRIEvAAIAAERg");
	this.shape_1.setTransform(12.7,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-3.1,30.5,27.4);


// stage content:
(lib.Tutorialyeipii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Telefono
	this.instance = new lib.phoneblack();
	this.instance.parent = this;
	this.instance.setTransform(36,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Menú
	this.instance_1 = new lib.Btnmenu();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.8,223.2,0.97,0.972,0,0,0,12.7,10.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// YEiPii
	this.instance_2 = new lib.YEiPiiwhite();
	this.instance_2.parent = this;
	this.instance_2.setTransform(199,209,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Info
	this.instance_3 = new lib.Info();
	this.instance_3.parent = this;
	this.instance_3.setTransform(390,223,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Fondo de interfaz 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(17,19,123,0.698)").s().p("A7VFgIAAq/MA2rAAAIAAK/g");
	this.shape.setTransform(250.1,218.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(247,247,247,0.749)").s().p("EgbVAuAMAAAhb/MA2rAAAMAAABb/g");
	this.shape_1.setTransform(250.1,547.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Fondo de interfaz 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(20,22,142,0.949)").s().p("AeIFNIAAg/IgUAAMg8YAAAIAAhUMA8YAAAIAUAAIAAhLIgUAAMg8YAAAIAAhTMA8YAAAIAUAAIAAhPIgUAAMg8YAAAIAAhTMA8YAAAIAUAAIAAhMIgUAAMg8YAAAIAAhTMA8YAAAIAUAAIAAgmIAdAAIAAKYg");
	this.shape_2.setTransform(250.4,219.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#11137B").s().p("Ad4GvMg6wAAAIhUAAIAAhGIABAAMA8YAAAIAABGgA+LEWIgBAAIAAhMIABAAMA8YAAAIAABMgA+LB3IgBAAIAAhQIABAAMA8YAAAIAABQgA+LgrIgBAAIAAhLIABAAMA8YAAAIAABLgA+LjJIgBAAIAAjlMA8ZAAAIAABMMg8OAAAIAABTMA8OAAAIAABGg");
	this.shape_3.setTransform(247.9,210.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E9E9").s().p("EgdbAumIgDAAIAAhTIADAAMA6tAAAIAABTgEgdbAsIIgDAAIAAhTIADAAMA6tAAAIAABTgEgdbAplIgDAAIAAhTIADAAMA6tAAAIAABTgEgdbAnGIgDAAIAAhTIADAAMA6tAAAIAABTgEAdUAktMg6sAAAIAAhTMA6sAAAIADAAIAABTgEAdUAiPMg6sAAAIAAhTMA6sAAAIADAAIAABTgAdUfhMg6oAAAIAAhTMA6oAAAIAIAAIAABTgAdUdDMg6oAAAIAAhTMA6oAAAIAIAAIAABTgA9baqIAAhTMA6vAAAIAABTgA9bYLIAAhTMA6vAAAIAABTgA9bVoIAAhTMA6vAAAIAABTgA9bTKIAAhTMA6vAAAIAABTgAdUQxMg6qAAAIAAhTMA6qAAAIAGAAIAABTgAdUOSMg6qAAAIAAhTMA6qAAAIAGAAIAABTgAdULoMg6qAAAIAAhTMA6qAAAIAGAAIAABTgAdUJJMg6qAAAIAAhTMA6qAAAIAGAAIAABTgA9bGwIgDAAIAAhTIADAAMA6tAAAIAABTgA9bESIgDAAIAAhTIADAAMA6tAAAIAABTgA9bBvIgDAAIAAhTIADAAMA6tAAAIAABTgA9bgvIgDAAIAAhTIADAAMA6tAAAIAABTgAdUjIMg6sAAAIAAhTMA6sAAAIADAAIAABTgAdUlmMg6sAAAIAAhTMA6sAAAIADAAIAABTgAdUoRMg6sAAAIAAhTMA6sAAAIADAAIAABTgAdUqvMg6sAAAIAAhTMA6sAAAIADAAIAABTgAdUtIMg6oAAAIAAhTMA6oAAAIAIAAIAABTgAdUvnMg6oAAAIAAhTMA6oAAAIAIAAIAABTgAdUyKMg6oAAAIAAhTMA6oAAAIAIAAIAABTgAdU0oMg6oAAAIAAhTMA6oAAAIAIAAIAABTgA9b3BIAAhTMA6vAAAIAABTgA9b5gIAAhTMA6vAAAIAABTgA9b8KIAAhTMA6vAAAIAABTgA9b+pIAAhTMA6vAAAIAABTgEAdUghCMg6qAAAIAAhTMA6qAAAIAGAAIAABTgEAdUgjgMg6qAAAIAAhTMA6qAAAIAGAAIAABTgEAdUgmDMg6qAAAIAAhTMA6qAAAIAGAAIAABTgEAdUgoiMg6qAAAIAAhTMA6qAAAIAGAAIAABTgEAdUgq7Mg6lAAAIAAhTMA6lAAAIAKAAIAABTgEAdUgtZMg6lAAAIAAhMMA6vAAAIAABMg");
	this.shape_4.setTransform(250.4,551.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("EgdXAufIAAg9MA6tAAAIAAhUMg6tAAAIAAhLMA6tAAAIAAhTMg6tAAAIAAhQMA6tAAAIAAhTMg6tAAAIAAhMMA6tAAAIAAhTMg6tAAAIAAmSIAHAAMA6oAAAIAABbMg6tAAAIAABTMA6tAAAIAABLMg6tAAAIAABTMA6tAAAIAAK3gA9QdJIgHAAIAAhLIAHAAMA6oAAAIAABLgA9QarIgHAAIAAhGMA6vAAAIAABGgA9XYSIAAhMMA6vAAAIAABMgA9XV0IAAhRMA6vAAAIAABRgA9XTRIAAhMMA6vAAAIAABMgA9XQyIAAhGIAFAAMA6qAAAIAABGgA9SOZIgFAAIAAhLIAFAAMA6qAAAIAABLgA9SL7IgFAAIAAhYIAFAAMA6qAAAIAABYgA9SJQIgFAAIAAhMIAFAAMA6qAAAIAABMgA9SGxIgFAAIAAhGMA6tAAAIAAhTMg6tAAAIAAhLMA6tAAAIAAhTMg6tAAAIAAhQMA6tAAAIAAhSMg6tAAAIAAhLMA6tAAAIAAhTMg6tAAAIAAmQIACAAMA6tAAAIAABYMg6tAAAIAABTMA6tAAAIAABMMg6tAAAIAABTMA6tAAAIAAK9gA9VqpIgCAAIAAhLIACAAMA6tAAAIAABLgA9VtHIgCAAIAAhGIAHAAMA6oAAAIAABGgA9QvgIgHAAIAAhMIAHAAMA6oAAAIAABMgA9Qx+IgHAAIAAhRIAHAAMA6oAAAIAABRgA9Q0hIgHAAIAAhMIAHAAMA6oAAAIAABMgA9Q3AIgHAAIAAhGMA6vAAAIAABGgA9X5ZIAAhLMA6vAAAIAABLgA9X73IAAhYMA6vAAAIAABYgA9X+iIAAhMMA6vAAAIAABMgEgdXghBIAAtdIAKAAMA6lAAAIAABMMg6lAAAIAABTMA6lAAAIAABGMg6qAAAIAABTMA6qAAAIAABLMg6qAAAIAABTMA6qAAAIAABQMg6qAAAIAABTMA6qAAAIAABLMg6qAAAIAABTMA6qAAAIAABGg");
	this.shape_5.setTransform(250,558.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Fondo de interfaz
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202294").s().p("A98FfIAAq+MA75AAAIAAK+g");
	this.shape_6.setTransform(247.4,218.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,581.5,428,869);
// library properties:
lib.properties = {
	id: 'BC6DB0F1857F1740979A5FE4041F5703',
	width: 500,
	height: 1015,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Tutorial_yeipii_atlas_.png?1551630753482", id:"Tutorial_yeipii_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BC6DB0F1857F1740979A5FE4041F5703'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;