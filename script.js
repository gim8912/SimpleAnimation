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
var beach_parasol_yellow = [];

//// 주란
var streetlamp = [];
var streetlamp2 = [];
var windmill;
var seesaw;
var circle;
var trapeze;
var clock_tower;
var airballoon;
var airballoon_flag = 1;
var cowEmitter;
var restaurant;
var farmcar;
var stone;
var palm_tree2 = [];
var r_palm_tree2 = [];
var palm_tree1 = [];
var hammock;
var lighthouse;
var yellowboat;
var surfboard;

var parasol_orange = [];
var parasol_green = [];
var parasol_puple = [];

var fitting_room;

//추가
var duck;
var store1;
var sea_bridge;
var rescuebuilding;
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
	game.load.spritesheet('beach_parasol_yellow', 'assets/sea/beach_umbrella_yellow.png', 70, 70);
	
	//주란 프리로드
	game.load.spritesheet('streetlamp', 'assets/streetlamp.png', 39, 204);
	game.load.spritesheet('streetlamp2', 'assets/streetlamp.png', 27, 170);
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
	game.load.image('bg_construction', 'assets/bg_construction.png');

	//
	game.load.image('restaurant', 'assets/restaurant.png');
	game.load.spritesheet('farmcar', 'assets/farmcar.png', 48, 110); 
	game.load.spritesheet('duck', 'assets/sea/duck.png', 390, 225); 
	game.load.image('store1','assets/sea/store1.png',230,180);
	game.load.spritesheet('sea_bridge','assets/sea/seabridge.png',265,400);
	game.load.spritesheet('stone','assets/sea/stone.png',330,180);
	game.load.spritesheet('rescuebuilding','assets/sea/rescuebuilding.png',190,190);
	game.load.spritesheet('palm_tree2','assets/sea/palm_tree_1-2.png',110,140);
	game.load.spritesheet('r_palm_tree2','assets/sea/r_palm_tree_1-2.png',110,140);
	game.load.spritesheet('hammock','assets/sea/hammock.png',110,70);
	
	game.load.spritesheet('lighthouse','assets/sea/lighthouse.png',800,800);
	game.load.spritesheet('yellowboat','assets/sea/yellowboat.png',170,170);
	game.load.spritesheet('surfboard','assets/sea/surfboard.png',100,100);

	game.load.spritesheet('palm_tree1','assets/sea/palm_tree_1-1.png',120,155);
	
	game.load.spritesheet('parasol_green','assets/sea/parasol_green.png',58,58);
	game.load.spritesheet('parasol_puple','assets/sea/parasol_puple.png',58,58);
	game.load.spritesheet('parasol_orange','assets/sea/parasol_orange.png',58,58);
	game.load.spritesheet('fitting_room','assets/sea/fitting_room.png',180,140);
	
	
	

	
	
	
	
}
function create() {
	// 기본 배경
	bg= game.add.sprite(0,0, 'bg01');	
	
	
	//강승화 생성

	

	farm= game.add.sprite(738,1041, 'farm');
	

	train = game.add.sprite(3000, 440, 'train'); //기차
	train.animations.add('shiny');
	train.inputEnabled = true;
	train.events.onInputDown.add(trainClick, this);

	truck = game.add.sprite(1544,1324, 'truck'); // 트럭
	truck.animations.add('truck_drive');
	truck.inputEnabled = true;
	truck.events.onInputDown.add(truckClick, this);

	

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
	
	//공사장
	bg= game.add.sprite(800, 430, 'bg_construction');
	bg= game.add.sprite(0,0, 'bg02'); // 트럭과 기차를 위한 이미지
	
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

	//마을
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

	

	
	//놀이터	
	bg= game.add.sprite(2778,458, 'bg_playground');
	
	//농장
	bg= game.add.sprite(2878, 804, 'bg_air2');	
	bg= game.add.sprite(1604, 422, 'bg_farm2');
	bg= game.add.sprite(1604, 860, 'bg_farm1');



	

	streetlamp[0] = game.add.sprite(2908,746, 'streetlamp');
	streetlamp[0].animations.add('lamp');
	streetlamp[0].animations.play('lamp', 5, true);

	streetlamp[1] = game.add.sprite(3800,746, 'streetlamp');
	streetlamp[1].animations.add('lamp');
	streetlamp[1].animations.play('lamp', 5, true);



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


	//열기구 장소
	bg = game.add.sprite(2878, 1105, 'bg_air1');

	//레스토랑
	restaurant= game.add.sprite(2470,465, 'restaurant');
	
	// 농장 트렉터
	farmcarAnimation(1670,576);
	
	// 소 애니메이션 부분 
	cowAnimation(0,1977,640);
	cowAnimation(1,2150,730);
	cowAnimation(2,2250,830);
	cowAnimation(3,1870,810);

	cowAnimation2(0,1960,708);
	cowAnimation2(1,2260,750);
	cowAnimation2(2,2060,840);

	airballoonAnimation(3342,680);


	streetlamp[2] = game.add.sprite(3290,1106, 'streetlamp');
	streetlamp[2].animations.add('lamp');
	streetlamp[2].animations.play('lamp', 5, true);
	streetlamp[3] = game.add.sprite(3390,1106, 'streetlamp');
	streetlamp[3].animations.add('lamp');
	streetlamp[3].animations.play('lamp', 5, true);

	//해변가
	sea = game.add.sprite(0,1510, 'sea');
	sea.animations.add('searun');
	sea.animations.play('searun', 6, true);
	
	lighthouseAnimation(-170,980);

	yellowboatAnimation(1690,2050);

	rescuebuilding = game.add.sprite(1500,1460, 'rescuebuilding');
	rescuebuilding.animations.add('rescuebuilding_run');
	rescuebuilding.animations.play('rescuebuilding_run', 20, true);
	
	farmtreeAnimation2(0,1800,1475);
	r_farmtreeAnimation2(0,1900,1475);

	//스토어 옆 나무들
	farmtreeAnimation1(0,2340,1465); // 팜나무2보다 크기가 약간 큼
	r_farmtreeAnimation2(1,2670,1475);
	//스토어 옆 피팅룸
	fitting_room = game.add.sprite(2700,1550, 'fitting_room');

	

	hammock_Animation(1850,1540);

	stone = game.add.sprite(1070,1560,'stone');

	store1= game.add.sprite(2430,1460, 'store1');

	duck = game.add.sprite(3460,1730, 'duck');
	duck.animations.add('duck_run');
	duck.inputEnabled = true;
	duck.events.onInputDown.add(duckClick, this);

	beach_parasol_yellow_Animation(0,2480,1680);
	beach_parasol_yellow_Animation(1,2780,1680);

	surfboardAnimation(1950,1600);
	sea_bridge_Animation(1350,1740);

	//0그린 1퍼플 2오렌지
	parasol_Animation(0,0,2200,1750);
	parasol_Animation(1,0,1970,1720);

	parasol_Animation(0,1,2100,1830);
	parasol_Animation(2,1,1850,1810);
	parasol_Animation(3,1,1738,1750);

	parasol_Animation(0,2,2300,1700);



	//갈매기
	birdAnimation(0,790,1330,10);//인덱스,x,y,속도
	birdAnimation(1,900,1000,10);
	birdAnimation(2,400,1400,10);
	birdAnimation(3,560,1650,10);
	birdAnimation(4,250,1710,10);
	birdAnimation(5,1240,1340,10);
	
	birds[0].wander = game.add.tween(birds[0])
		.to({ x: 1700, y: 1780 }, 6000, Phaser.Easing.Linear.None)
		.to({ x: 790, y: 1330 }, 6000, Phaser.Easing.Linear.None)
		.loop()
		.start();
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


//주란 함수

function seesawClick() {
	seesaw.animations.play('seesaw_play',16,false);
}
function circleClick() {
	circle.animations.play('circle_play',6,false);
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
function duckClick() {
	duck.animations.play('duck_run', 22, false);
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
//농장 트렉터 애니메이션
	var farmcarAnimation = function(x, y){
	farmcar = game.add.sprite(x,y, 'farmcar');
	farmcar.animations.add('farmcar_move', [0,1,2,3,4,5]);
	farmcar.animations.add('farmcar_play', [6,7,8,9,10,11,12,13] );
		var farmcarTouch = function() {
			farmcar.animations.play('farmcar_play', 9, false);
	}
	farmcar.inputEnabled = true;
	farmcar.events.onInputUp.add(farmcarTouch, this);
	farmcar.animations.play('farmcar_move', 5, true);
}
//해변가 파라솔 애니메이션
var beach_parasol_yellow_Animation = function (a,x,y){
	beach_parasol_yellow[a]= game.add.sprite(x, y, 'beach_parasol_yellow');
	beach_parasol_yellow[a].animations.add('beach_parasol_yellow_run');
	var beach_parsol_yellow_Click = function() {
		beach_parasol_yellow[a].animations.play('beach_parasol_yellow_run', 15, false);
	}
	beach_parasol_yellow[a].inputEnabled = true;
	beach_parasol_yellow[a].events.onInputDown.add(beach_parsol_yellow_Click, this);
}
var parasol_Animation = function (a,color,x,y){ // 파라솔 그린 퍼플 오렌지
	if(color === 0){ // 그린
		parasol_green[a]= game.add.sprite(x, y, 'parasol_green');
		parasol_green[a].animations.add('parasol_green_run');
		var parasol_green_Click = function() {
			parasol_green[a].animations.play('parasol_green_run', 15, false);
		}
		parasol_green[a].inputEnabled = true;
		parasol_green[a].events.onInputDown.add(parasol_green_Click, this);
	}
	else if(color === 1){ // 퍼플
		parasol_puple[a]= game.add.sprite(x, y, 'parasol_puple');
		parasol_puple[a].animations.add('parasol_puple_run');
		var parasol_puple_Click = function() {
			parasol_puple[a].animations.play('parasol_puple_run', 15, false);
		}
		parasol_puple[a].inputEnabled = true;
		parasol_puple[a].events.onInputDown.add(parasol_puple_Click, this);
	}
	if(color === 2){ // 오렌지
		parasol_orange[a]= game.add.sprite(x, y, 'parasol_orange');
		parasol_orange[a].animations.add('parasol_orange_run');
		var parasol_orange_Click = function() {
			parasol_orange[a].animations.play('parasol_orange_run', 15, false);
		}
		parasol_orange[a].inputEnabled = true;
		parasol_orange[a].events.onInputDown.add(parasol_orange_Click, this);
	}	
}

var sea_bridge_Animation = function (x,y){
	sea_bridge= game.add.sprite(x, y, 'sea_bridge');
	sea_bridge.animations.add('sea_bridge_run');
	var sea_bridge_Click = function() {
		sea_bridge.animations.play('sea_bridge_run', 15, false);
	}
	sea_bridge.inputEnabled = true;
	sea_bridge.events.onInputDown.add(sea_bridge_Click, this);
}
// 열기구 애니메이션
airballoon_flag=0;
var airballoonAnimation = function(x, y){
	airballoon = game.add.sprite(x,y, 'airballoon');
	airballoon.animations.add('airballoon_ready', [0]);
	airballoon.animations.add('airballoon_up', [1,2,3,4,5,6,7,8]);
	airballoon.animations.add('airballoon_down', [8,9,10,11,12,13,14,15] );
	airballoon.animations.add('airballoon_play',19);

	var airballoonTouch = function() {
		if(airballoon_flag === 0){
			airballoon.animations.play('airballoon_up', 10, false);
			airballoon_flag = 1;
		}
		else if(airballoon_flag === 1){
			airballoon.animations.play('airballoon_down', 10, false);
			airballoon_flag = 0;
		}
	}
	airballoon.animations.play('airballoon_ready', 1, true);
	airballoon.inputEnabled = true;
	airballoon.events.onInputUp.add(airballoonTouch, this);
}
var farmtreeAnimation2 = function(a,x,y) {
	palm_tree2[a] = game.add.sprite(x,y, 'palm_tree2');
	palm_tree2[a].animations.add('palm_tree2_run');
	palm_tree2[a].animations.play('palm_tree2_run', 5, true);
}
var r_farmtreeAnimation2 = function(a,x,y) {
	r_palm_tree2[a] = game.add.sprite(x,y, 'r_palm_tree2');
	r_palm_tree2[a].animations.add('r_palm_tree2_run');
	r_palm_tree2[a].animations.play('r_palm_tree2_run', 5, true);
}
var farmtreeAnimation1 = function(a,x,y) {
	palm_tree1[a] = game.add.sprite(x,y, 'palm_tree1');
	palm_tree1[a].animations.add('palm_tree1_run');
	palm_tree1[a].animations.play('palm_tree1_run',4, true);
}

var lighthouseAnimation = function(x,y) {
	lighthouse = game.add.sprite(x,y, 'lighthouse');
	lighthouse.animations.add('lighthouse_run');
	lighthouse.animations.play('lighthouse_run', 8, true);
}

var hammock_Animation = function (x,y){
	hammock= game.add.sprite(x, y, 'hammock');
	hammock.animations.add('hammock_run');
	var hammock_Click = function() {
		hammock.animations.play('hammock_run', 9, false);
	}
	hammock.inputEnabled = true;
	hammock.events.onInputDown.add(hammock_Click, this);
}

var yellowboatAnimation = function (x,y){
	yellowboat = game.add.sprite(x, y, 'yellowboat');
	yellowboat.animations.add('yellowboat_run');
	var yellowboat_Click = function() {
		yellowboat.animations.play('yellowboat_run', 7, false);
	}
	yellowboat.inputEnabled = true;
	yellowboat.events.onInputDown.add(yellowboat_Click, this);
	yellowboat.wander = game.add.tween(yellowboat)
		.to({y: 2020 }, 1100, Phaser.Easing.Linear.None)
		.to({y: 2000 }, 1100, Phaser.Easing.Linear.None)
		.loop()
		.start();
	//
	//game.add.tween(yellowboat).to( { y: '2000' }, 2000, Phaser.Easing.Linear.None, true);
}
var surfboardAnimation = function (x,y){
	surfboard= game.add.sprite(x, y, 'surfboard');
	surfboard.animations.add('surfboard_run');
	var surfboard_Click = function() {
		surfboard.animations.play('surfboard_run', 9, false);
	}
	surfboard.inputEnabled = true;
	surfboard.events.onInputDown.add(surfboard_Click, this);
}
var birdAnimation = function(a,x,y,speed){
	birds[a] = game.add.sprite(x,y, 'bird');
	birds[a].animations.add('fly');
	birds[a].animations.play('fly', speed/*속도조절*/, true);
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
