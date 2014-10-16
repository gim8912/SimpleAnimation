var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '',
          {preload: preload, create: create, update: update});
var bg;
var bg01;
var bg02;
var bg03;
var cow;

//// 강승화

var tractor;
var birds = [];
var lift;
var tree;
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
	game.load.image('house02', 'assets/house02.png');
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
	
}
function create() {
	// 기본 배경
	bg= game.add.sprite(0,0, 'bg01');	
	
	
	//강승화 생성


	farm= game.add.sprite(738,1041, 'farm');
	





	bg= game.add.sprite(0,0, 'bg02'); // 트럭과 기차를 위한 이미지

	house01= game.add.sprite(1323,999, 'house01');
	house02= game.add.sprite(2472,921, 'house02');








	village01 = game.add.sprite(2472,921, 'village01');


	
	//신창무 생성

	
	//주란 생성
	
	bg= game.add.sprite(2778,458, 'bg_playground');
	bg= game.add.sprite(2878, 804, 'bg_air2');	
	bg= game.add.sprite(1604, 458, 'bg_farm2');
	bg= game.add.sprite(1604, 860, 'bg_farm1');
	bg= game.add.sprite(866, 423, 'bg_construction2');
	bg= game.add.sprite(866, 819, 'bg_construction1');


	bg= game.add.sprite(2878, 1105, 'bg_air1');


}
function update() {	

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
function treeClick() {
	tree.animations.play('cut', 16, false);
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
function cowClick0() {
	birds[0].wander.start();
	cow.animations.play('walk',6,false);
}
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


//승훈 함수

//트윈애니메이션(왔다갔다)
  //birds[0].wander = game.add.tween(birds[0])
  //.to({ x: 000, y: 1380}, 2000, phaser.Easing.Linear.None)
  //.to({ x: 000, y: 1380}, 2000, phaser.Easing.Linear.None)
  //.loop()
  //.start();
