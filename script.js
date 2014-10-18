var socket;
var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '',
          {preload: preload, create: create, update: update});
var bg;
var bg01;
var bg02;
var bg03;
var cow = [];
var cow2 = [];

//// 강승화

var tractor;
var birds = [];
var lift;
var tree = [];
var train;
var house01;
var crane;
var sea;

var village01;
var farm;
var snow;
var snowEmitter;

//// 신창무
var parasol3

//// 주란
var streetlamp = [];
var windmill;
var seesaw;
var circle;
var trapeze;
var clock_tower;
var airballoon;
var cowEmitter;
var restaurant;
var farmcar;

function preload() {
	game.load.spritesheet('cow', 'assets/cow.png',100 , 50);
	game.load.image('bg02', 'assets/bg02.png');
	game.load.image('bg01', 'assets/bg01.png');
	
	
	//강승화 프리로드
	game.load.spritesheet('tractor', 'assets/tractor.png', 82,110);
	game.load.spritesheet('bird', 'assets/bird01.png', 86,109);
	game.load.spritesheet('lift', 'assets/lift.png', 56,40);
	game.load.spritesheet('tree', 'assets/tree01.png', 184,159);
	game.load.spritesheet('train', 'assets/train.png', 551,72);
	game.load.image('house01', 'assets/house01.png');
	
	game.load.spritesheet('crane', 'assets/crane.png', 309/*width*/,318/*height*/);
	game.load.spritesheet('village01', 'assets/village01.png', 371/*width*/,422/*height*/);
	game.load.spritesheet('snow', 'assets/snow.png', 8/*width*/,8/*height*/);
	game.load.spritesheet('sea', 'assets/sea.png',3840/*width*/,670/*height*/);
	game.load.image('farm', 'assets/farm.png');
	

	//신창무 프리로드
	game.load.spritesheet('parasol3', 'assets/parasol3.png', 300, 300);
	
	//주란 프리로드
	game.load.spritesheet('streetlamp', 'assets/streetlamp.png', 39, 204);
	game.load.spritesheet('windmill', 'assets/windmill.png', 176, 201);
	 // 주란 추가 이미지
	game.load.spritesheet('cow2', 'assets/cow2.png', 84, 45);
	game.load.spritesheet('circle', 'assets/circle.png', 106, 126);
	game.load.spritesheet('seesaw', 'assets/seesaw.png', 77, 103);
	game.load.spritesheet('trapeze', 'assets/trapeze.png', 321, 112);
	game.load.spritesheet('clock_tower', 'assets/clock_tower.png', 66, 215);
	game.load.spritesheet('airballoon', 'assets/airballoon.png', 310, 540);
	game.load.spritesheet('truck', 'assets/truck.png', 120, 65);
	game.load.image('bg_playground', 'assets/bg_playground.png');
	game.load.image('bg_air2', 'assets/bg_airballoon2.png');
	game.load.image('bg_air1', 'assets/bg_airballoon1.png');
	game.load.image('bg_farm2', 'assets/bg_farm2.png');
	game.load.image('bg_farm1', 'assets/bg_farm1.png');
	game.load.image('bg_construction2', 'assets/bg_construction2.png');
	game.load.image('bg_construction1', 'assets/bg_construction1.png');

	//
	game.load.image('restaurant', 'assets/restaurant.png');
	game.load.spritesheet('farmcar', 'assets/farmcar.png', 48, 120); 
	
}
function create() {
	// 기본 배경
	bg= game.add.sprite(0,0, 'bg01');	
	
	
	//강승화 생성

	sea = game.add.sprite(0,1491, 'sea');
	sea.animations.add('searun');
	sea.animations.play('searun', 7, true);

	farm= game.add.sprite(738,1041, 'farm');
	

	train = game.add.sprite(3000, 440, 'train'); //기차
	train.animations.add('shiny');
	train.inputEnabled = true;
	train.events.onInputDown.add(trainClick, this);

	truck = game.add.sprite(1544,1324, 'truck'); // 트럭
	truck.animations.add('truck_drive');
	truck.inputEnabled = true;
	truck.events.onInputDown.add(truckClick, this);

	bg= game.add.sprite(0,0, 'bg02'); // 트럭과 기차를 위한 이미지

	house01= game.add.sprite(1323,999, 'house01');
	

	

	tractor = game.add.sprite(900, 1080, 'tractor'); // 트렉터
	tractor.animations.add('move', [0, 1, 2, 3, 4, 5, 6], 11/*속도*/, true, true);
	tractor.moveAnim = tractor.animations.add('move2');
	var moveCompleted = function() {
	    tractor.animations.play('move');
	}
	tractor.moveAnim.onComplete.add(moveCompleted, this);
	tractor.inputEnabled = true;
	tractor.events.onInputDown.add(tractorClick, this);
	tractor.animations.play('move');


	birds[0] = game.add.sprite(790,1330, 'bird');
	birds[0].animations.add('fly');
	birds[0].animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);

	birds[1] = game.add.sprite(900,1000, 'bird');
	birds[1].animations.add('fly');
	birds[1].animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);

	birds[2] = game.add.sprite(400,1500, 'bird');
	birds[2].animations.add('fly');
	birds[2].animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);

	lift = game.add.sprite(2400, 180, 'lift'); //리프트
	lift.animations.add('swing');
	lift.inputEnabled = true;
	lift.events.onInputDown.add(liftClick, this);

	
	treeAnimation(0,0,500);
	treeAnimation(1,100,500);
	treeAnimation(2,200,500);
	treeAnimation(3,300,500);

	treeAnimation(4,40,650);
	treeAnimation(5,140,650);
	treeAnimation(6,240,650);
	treeAnimation(7,340,650);
	treeAnimation(8,440,650);
	
	treeAnimation(9,-15,800);
	treeAnimation(10,85,800);
	treeAnimation(11,185,800);
	treeAnimation(12,285,800);

	treeAnimation(13,40,1000);
	treeAnimation(14,140,1000);

	treeAnimation(15,-30,1150);
	treeAnimation(16,70,1150);
	treeAnimation(17,170,1150);	
	treeAnimation(18,270,1150);
	treeAnimation(19,370,1150);

	village01 = game.add.sprite(2472,921, 'village01');
	village01.animations.add('move_1', [0, 1], 3/*속도*/, true, true);
	village01.moveAnim = village01.animations.add('move_2');
	var move_1Completed = function() {
	    village01.animations.play('move_1');
	}
	village01.moveAnim.onComplete.add(move_1Completed, this);
	village01.inputEnabled = true;
	village01.events.onInputDown.add(village01Click, this);
	village01.animations.play('move_1');
		

	
	

	birds[0].wander = game.add.tween(birds[0])
		.to({ x: 890, y: 1380 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 790, y: 1330 }, 2000, Phaser.Easing.Linear.None);

	tractor.wander = game.add.tween(tractor)
		.to({ x: 1180, y: 980 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 950, y: 980 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 1180, y: 1060 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 900, y: 1060 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 1180, y: 1120 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 800, y: 1120 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 1180, y: 1200 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 900, y: 1200 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 900, y: 1080 }, 2000, Phaser.Easing.Linear.None);

	
	//신창무 생성
	parasol3= game.add.sprite(3000, 1500, 'parasol3');
	parasol3.animations.add('walk');
	parasol3.inputEnabled = true;
	parasol3.events.onInputDown.add(parsil5Click, this);
	
	//주란 생성
	
	bg= game.add.sprite(2778,458, 'bg_playground');
	bg= game.add.sprite(2878, 804, 'bg_air2');	
	bg= game.add.sprite(1604, 458, 'bg_farm2');
	bg= game.add.sprite(1604, 860, 'bg_farm1');
	bg= game.add.sprite(866, 423, 'bg_construction2');
	bg= game.add.sprite(866, 819, 'bg_construction1');


	

	streetlamp[0] = game.add.sprite(2908,746, 'streetlamp');
	streetlamp[0].animations.add('lamp');
	streetlamp[0].animations.play('lamp', 5, true);

	windmill = game.add.sprite(2036,400, 'windmill');
	windmill.animations.add('spin');
	windmill.animations.play('spin', 5, true);

	/*추가 이미지*/
	circle = game.add.sprite(3242,584, 'circle');
	circle.animations.add('circle_play');
	circle.inputEnabled = true;
	circle.events.onInputDown.add(circleClick, this);
	
	seesaw = game.add.sprite(3730,620, 'seesaw');
	seesaw.animations.add('seesaw_play');
	seesaw.inputEnabled = true;
	seesaw.events.onInputDown.add(seesawClick, this);	
	
	trapeze = game.add.sprite(3400,574, 'trapeze');
	trapeze.animations.add('trapeze_play');
	trapeze.inputEnabled = true;
	trapeze.events.onInputDown.add(trapezeClick, this);


	clock_tower = game.add.sprite(3210,1096, 'clock_tower');
	clock_tower.animations.add('clock_run');
	clock_tower.inputEnabled = true;
	clock_tower.events.onInputDown.add(clock_towerClick, this);
	
	bg= game.add.sprite(2878, 1105, 'bg_air1');

	airballoon = game.add.sprite(3342,680, 'airballoon');
	airballoon.animations.add('airballoon_play');
	airballoon.inputEnabled = true;
	airballoon.events.onInputDown.add(airballoonClick, this);

	crane = game.add.sprite(1250, 500, 'crane'); //크레인
	//crane.animations.add('moving', [0, 1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16], 10/*속도*/, true, true);
	crane.movingAnim = crane.animations.add('moving2');
	var movingCompleted = function() {
	    crane.animations.play('moving');
	}
	crane.movingAnim.onComplete.add(movingCompleted, this);
	crane.inputEnabled = true;
	crane.events.onInputDown.add(craneClick, this);
	crane.animations.play('moving');

	restaurant= game.add.sprite(2470,465, 'restaurant');
	
	farmcar = game.add.sprite(1670,576, 'farmcar');
	farmcar.animations.add('farmcar_play',[0, 1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13],5,true,true);
	farmcar.animations.play('farmcar_play');
	
	cowAnimation(0,1977,640);
	cowAnimation(1,2150,730);
	cowAnimation(2,2250,830);
	cowAnimation(3,1870,810);

	cowAnimation2(0,1960,708);
	cowAnimation2(1,2260,750);
	cowAnimation2(2,2060,840);

}
function update() {	

	if(train.x === -600){
		train.x=3840;
		game.add.tween(train).to( { x: '-840' }, 1000, Phaser.Easing.Linear.None, true);
	}
	if(truck.x === -200){
		truck.x=3840;
		game.add.tween(truck).to( { x: '-2296' }, 4000, Phaser.Easing.Linear.None, true);
	}
}
function cowClick() {
	cow.animations.play('walk', 10, false);	

}

//강승화 함수
function tractorClick() {
	
	tractor.animations.play('walk', 7, false);
}
function village01Click() {
	village01.animations.play('move_2', 22, false);
}
/*
function tractorClick(){
	tractor.animations.play('walk', 7, false);
	tractor.x-=100;

	if (tractor.x < -tractor.width) 
	{
		//tractor.x =game.bg.width;
		tractor.x =game.bg.width;
	};
}
function update() {
	tractor.x-=2;

	if (tractor.x < -tractor.width) 
	{
		//tractor.x =game.bg.width;
		tractor.x =game.bg.width;
	};

}
*/
function liftClick() {
	lift.animations.play('swing', 8, false);
}

function trainClick() {
	train.animations.play('shiny', 8, false);
	if (train.x === 3000)
	{
		game.add.tween(train).to( { x: '-3600' }, 2000, Phaser.Easing.Linear.None, true);	
	}
}
function tractorClick() {
	tractor.animations.play('move2', 13, false);

	tractor.wander.start();
}
function craneClick() {
	crane.animations.play('moving2', 10, false);

	//crane.wander.start();
}
	



//신창무 함수
function parsil5Click() {
  parasol3.animations.play('walk', 10, false);
}

//주란 함수

function seesawClick() {
	seesaw.animations.play('seesaw_play',16,false);
}
function circleClick() {
	circle.animations.play('circle_play',6,true);
}
function trapezeClick() {
	trapeze.animations.play('trapeze_play',16,false);
}
function airballoonClick() {
	airballoon.animations.play('airballoon_play',16,false);
}
function clock_towerClick() {
	clock_tower.animations.play('clock_run', 26, false);
}

function truckClick() {
	truck.animations.play('truck_drive', 8, true);
	if (truck.x === 1544)
	{
		game.add.tween(truck).to( { x: '-1744' }, 2000, Phaser.Easing.Linear.None, true);	
	}
}

var cowAnimation = function(a, x, y){
	cow[a] = game.add.sprite(x,y, 'cow');
	cow[a].anchor.x = 0.5;
	cow[a].anchor.y = 0.5;
	cow[a].animations.add('eat', [0,1,2,3,4,5]);
	cow[a].animations.add('walk', [6,7,8,9] );

	var cowDown = function() {
		game.add.tween(cow[a].scale).to({x:4,y:4},1000,Phaser.Easing.Elastic.Out,true);
		// cow.scale.x = 4;
		// cow.scale.y = 4;
		cow[a].animations.play('walk', 9, true);
	}

	var cowUp = function() {
		game.add.tween(cow[a].scale).to({x:1,y:1},1000,Phaser.Easing.Elastic.Out,true);

		// cow.scale.x = 1;
		// cow.scale.y = 1;
		cow[a].animations.play('eat', 9, true);
	}


	cow[a].inputEnabled = true;
	cow[a].input.enableDrag(true);
	cow[a].events.onInputDown.add(cowDown, this);
	cow[a].events.onInputUp.add(cowUp, this);
	cow[a].animations.play('eat', 9, true);
}

var cowAnimation2 = function(a, x, y){
	cow2[a] = game.add.sprite(x,y, 'cow2');
	cow2[a].anchor.x = 0.5;
	cow2[a].anchor.y = 0.5;
	cow2[a].animations.add('eat2', [0,1,2,3,4,5]);
	cow2[a].animations.add('walk2', [6,7,8,9,10,11] );

	var cowDown2 = function() {
		game.add.tween(cow2[a].scale).to({x:4,y:4},1000,Phaser.Easing.Elastic.Out,true);
		// cow.scale.x = 4;
		// cow.scale.y = 4;
		cow2[a].animations.play('walk2', 9, true);
	}

	var cowUp2 = function() {
		game.add.tween(cow2[a].scale).to({x:1,y:1},1000,Phaser.Easing.Elastic.Out,true);

		// cow.scale.x = 1;
		// cow.scale.y = 1;
		cow2[a].animations.play('eat2', 9, true);
	}


	cow2[a].inputEnabled = true;
	cow2[a].input.enableDrag(true);
	cow2[a].events.onInputDown.add(cowDown2, this);
	cow2[a].events.onInputUp.add(cowUp2, this);
	cow2[a].animations.play('eat2', 9, true);
}

var treeAnimation = function(a, x, y){
	
	tree[a] = game.add.sprite(x, y, 'tree');
	tree[a].animations.add('swing', [0, 1, 2, 3, 4, 5, 6, 7], 7, true, true);
	tree[a].cutAnim = tree[a].animations.add('cut');
	var cutCompleted = function() {
	    tree[a].animations.play('swing');
	}
	tree[a].cutAnim.onComplete.add(cutCompleted, this);
	tree[a].inputEnabled = true;
	tree[a].events.onInputDown.add(treeClick, this);
	tree[a].animations.play('swing');

	function treeClick() {
		tree[a].animations.play('cut', 16, false);
	}

}
//승훈 함수

//트윈애니메이션(왔다갔다)
  //birds[0].wander = game.add.tween(birds[0])
  //.to({ x: 000, y: 1380}, 2000, phaser.Easing.Linear.None)
  //.to({ x: 000, y: 1380}, 2000, phaser.Easing.Linear.None)
  //.loop()
  //.start();


window.onload = function() {
  socket = io();
  socket.on('touch', function(point){
    truckClick();
    console.log(point);
  });
}
