(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Tutorial_yeipii_atlas_", frames: [[0,1515,259,259],[0,644,428,869],[0,0,642,642],[261,1515,247,71]]}
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



(lib.YEiPiiLogoRecuadroAzul1fw = function() {
	this.spriteSheet = ss["Tutorial_yeipii_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.YEiPiiwhite = function() {
	this.spriteSheet = ss["Tutorial_yeipii_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("A7kDDQgyAAAAg8IAAlJMA4tAAAIAAFJQAAA8gyAAg");
	this.shape.setTransform(181.5,265.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A8WTQMAAAgliQAAg9AyAAMA3JAAAQAyAAAAA9MAAAAlig");
	this.shape_1.setTransform(181.5,123.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,363.1,285.4), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EgdXAy2MAAAhlrMA6vAAAMAAABlrg");
	this.shape.setTransform(188,325.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,376,650.9), null);


(lib.Interpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.YEiPiiLogoRecuadroAzul1fw();
	this.instance.parent = this;
	this.instance.setTransform(-42,-42,0.131,0.131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.Iniciarbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LETRAS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBDIAAiFIASAAIAAB0IA9AAIAAARg");
	this.shape.setTransform(149.3,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBDIgOghIg/AAIgNAhIgWAAIA8iFIAPAAIA6CFgAAZASIgZg9IAAAAIgYA9IAxAAg");
	this.shape_1.setTransform(136.9,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBDIAAiFIARAAIAACFg");
	this.shape_2.setTransform(127.6,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBDIghg7IgVAAIAAA7IgSAAIAAiFIAvAAQAQAAAKAGQAJAGAEAIQAEAJgBAIQAAAJgEAIQgEAHgHAFQgHAFgLABIAnA9gAgdgHIAYAAQAHAAAGgCQAHgBAEgFQAEgFAAgJQAAgJgEgEQgEgFgHgCQgGgBgHAAIgYAAg");
	this.shape_3.setTransform(119.8,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgQAAgUQAAgTAJgQQAJgQAQgJQAQgKATAAQAUAAARAKQAPAJAJAQQAJAQAAATQAAAUgJAQQgJAQgPAJQgRAJgUABQgTgBgQgJgAgagtQgLAHgGAMQgHAMAAAOQAAAPAHAMQAGAMALAHQAMAHAOABQAPgBAMgHQALgHAHgMQAGgMAAgPQAAgOgGgMQgHgMgLgHQgMgHgPgBQgOABgMAHg");
	this.shape_4.setTransform(105.4,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBDIAAh0IgsAAIAAgRIBoAAIAAARIgrAAIAAB0g");
	this.shape_5.setTransform(92.1,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaA/QgMgIgGgLQgHgMAAgPIAAhVIASAAIAABSQAAAGACAGQABAHAEAGQAFAFAGAEQAGAEAJAAQAJAAAHgEQAGgEAEgFQAEgGACgHQACgGgBgGIAAhSIATAAIAABVQAAAPgHAMQgHALgMAIQgMAGgOAAQgOAAgMgGg");
	this.shape_6.setTransform(79.9,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBDIAAh0IgsAAIAAgRIBoAAIAAARIgrAAIAAB0g");
	this.shape_7.setTransform(67.8,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBDIghg7IgVAAIAAA7IgSAAIAAiFIAvAAQAQAAAKAGQAJAGAEAIQAEAJgBAIQAAAJgEAIQgEAHgHAFQgHAFgLABIAnA9gAgdgHIAYAAQAHAAAGgCQAHgBAEgFQAEgFAAgJQAAgJgEgEQgEgFgHgCQgGgBgHAAIgYAAg");
	this.shape_8.setTransform(51.9,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBDIgOghIg/AAIgNAhIgWAAIA8iFIAPAAIA6CFgAAZASIgZg9IAAAAIgYA9IAxAAg");
	this.shape_9.setTransform(38.7,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBDIAAiFIARAAIAACFg");
	this.shape_10.setTransform(29.4,27.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBBQgNgGgKgKQgIgKgFgNQgFgMAAgNQAAgUAJgQQAIgQAQgJQAQgKAUAAQAJAAAIADQAKACAHAEQAHAFAGAHIgPAMQgGgIgJgEQgIgEgKAAQgOABgLAHQgLAHgHAMQgFANgBAOQABAOAFAMQAHAMAKAHQAMAHAOABQAMAAAJgFQAIgFAHgIIAPALIgGAGIgJAIQgHAEgJADQgIADgMAAQgPgBgMgFg");
	this.shape_11.setTransform(20.2,27.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBDIAAiFIARAAIAACFg");
	this.shape_12.setTransform(10.7,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBDIhKhtIAAAAIAABtIgSAAIAAiFIAXAAIBKBtIAAhtIASAAIAACFg");
	this.shape_13.setTransform(0.5,27.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIBDIAAiFIARAAIAACFg");
	this.shape_14.setTransform(-9.7,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// RECUADRO
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ADADAD").s().p("AuOETQg6AAgBgyIAAnBQABgyA6AAIcdAAQA7AAAAAyIAAHBQAAAyg7AAg");
	this.shape_15.setTransform(71,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,0,193.9,55);


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


(lib.logoAnimacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Interpolación4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},23).to({scaleX:1,scaleY:1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


// stage content:
(lib.Tutorialyeipii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{inicio:0,bienvenido:12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.IniciarBTN.on('click', function(){
		/*
		Mueve la cabeza lectora a la etiqueta de fotograma especificada en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay('bienvenido');
		});
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.IniciarBTN.on('click', function(){
		/*
		Mueve la cabeza lectora a la etiqueta de fotograma especificada en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay('bienvenido');
		});
	}
	this.frame_32 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(1));

	// Logo Animacion
	this.instance = new lib.logoAnimacion();
	this.instance.parent = this;
	this.instance.setTransform(253.8,501.5,0.595,0.595,0,0,0,42.1,42.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({regX:42,regY:42,scaleX:0.62,scaleY:0.62,x:253.7,y:497.9,alpha:0.111},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:494.4,alpha:0.222},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:491,alpha:0.333},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:487.5,alpha:0.444},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:484,alpha:0.556},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:480.5,alpha:0.667},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:477,alpha:0.778},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:473.5,alpha:0.889},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:470,alpha:1},0).wait(1));

	// Recuadro
	this.instance_1 = new lib.Símbolo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.5,498,0.234,0.234,0,0,0,181.5,142.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({regY:142.7,scaleX:0.32,scaleY:0.32,alpha:0.125},0).wait(1).to({scaleX:0.41,scaleY:0.41,alpha:0.25},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:498.1,alpha:0.375},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.625},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.75},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.875},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:1},0).wait(13));

	// Botón
	this.IniciarBTN = new lib.Iniciarbtn();
	this.IniciarBTN.name = "IniciarBTN";
	this.IniciarBTN.parent = this;
	this.IniciarBTN.setTransform(341.2,798,1,1,0,0,0,83,27.5);
	new cjs.ButtonHelper(this.IniciarBTN, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.IniciarBTN).to({_off:true},12).wait(21));

	// Fondo
	this.instance_2 = new lib.Símbolo1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(251.1,512.5,1,1,0,0,0,188,325.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(10));

	// Telefono
	this.instance_3 = new lib.phoneblack();
	this.instance_3.parent = this;
	this.instance_3.setTransform(36,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33));

	// Menú
	this.instance_4 = new lib.Btnmenu();
	this.instance_4.parent = this;
	this.instance_4.setTransform(107.8,223.2,0.97,0.972,0,0,0,12.7,10.9);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33));

	// YEiPii
	this.instance_5 = new lib.YEiPiiwhite();
	this.instance_5.parent = this;
	this.instance_5.setTransform(199,209,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33));

	// Info
	this.instance_6 = new lib.Info();
	this.instance_6.parent = this;
	this.instance_6.setTransform(390,223,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33));

	// Fondo de interfaz 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(17,19,123,0.698)").s().p("A7VFgIAAq/MA2rAAAIAAK/g");
	this.shape.setTransform(250.1,218.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(247,247,247,0.749)").s().p("EgbVAuAMAAAhb/MA2rAAAMAAABb/g");
	this.shape_1.setTransform(250.1,547.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(33));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(33));

	// Fondo de interfaz
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202294").s().p("A98FfIAAq+MA75AAAIAAK+g");
	this.shape_6.setTransform(247.4,218.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(33));

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
		{src:"images/Tutorial_yeipii_atlas_.png?1551640971367", id:"Tutorial_yeipii_atlas_"}
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