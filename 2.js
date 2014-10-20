var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '', {preload: preload, create: create});
var bg;
var bg01;
var bg02;
var cow;
var cow2;
var streetlamp = [];
var windmill;
var seesaw;
var circle;
var trapeze;
var clock_tower;
var airballoon;

function preload(){
	game.load.image('bg02', 'assets/bg02.png');
	game.load.image('bg01', 'assets/bg01.png');
	game.load.spritesheet('cow', 'assets/cow.png', 100, 50);
	game.load.spritesheet('cow2', 'assets/cow2.png', 84, 45);
	game.load.spritesheet('streetlamp', 'assets/streetlamp.png', 39, 204);
	game.load.spritesheet('windmill', 'assets/windmill.png', 176, 201);

	/*추가 이미지*/
	game.load.spritesheet('circle', 'assets/circle.png', 106, 126);
	game.load.spritesheet('seesaw', 'assets/seesaw.png', 77, 103);
	game.load.spritesheet('trapeze', 'assets/trapeze.png', 321, 112);
	game.load.spritesheet('clock_tower', 'assets/clock_tower.png', 66, 215);
	game.load.spritesheet('airballoon', 'assets/airballoon.png', 310, 540);
	game.load.spritesheet('truck', 'assets/truck.png', 120, 65);

	game.load.image('bg', 'assets/bg.jpg');
}

function create(){
	// 기본 배경
	bg= game.add.sprite(0,0, 'bg01');	

	truck = game.add.sprite(1544,1324, 'truck'); // 트럭
	truck.animations.add('truck_drive');
	truck.inputEnabled = true;
	truck.events.onInputDown.add(truckClick, this);

	bg= game.add.sprite(0,0, 'bg02'); // 트럭과 기차를 위한 이미지
	//주란 생성
	cow = game.add.sprite(1948,640, 'cow');
	cow.animations.add('eat', [0,1,2,3,4,5], 9, true, true );
	cow.walkAnim = cow.animations.add('walk',[6,7,8,9],9,true,true);
	var walkCompleted = function(){
		cow.animations.play('eat');
	}
	cow.walkAnim.onComplete.add(walkCompleted, this);

	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick0, this);
	cow.animations.play('eat');
	cow2 = game.add.sprite(1960,708, 'cow2');

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

	airballoon = game.add.sprite(3342,680, 'airballoon');
	airballoon.animations.add('airballoon_play');
	airballoon.inputEnabled = true;
	airballoon.events.onInputDown.add(airballoonClick, this);

}
function update() {	

	if(truck.x === -200){
		truck.x=3840;
		game.add.tween(truck).to( { x: '-2296' }, 4000, Phaser.Easing.Linear.None, true);
	}
}

function cowClick() {
// 	cows[0].animations.play('walk', 10, false);
// 	cows[1].animations.play('walk', 20, false);
// 	cows[2].animations.play('walk', 30, false);

// 	cow2.animations.play('walk', 10, false);
}

function cowClick0(){
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

function truckClick() {
	truck.animations.play('truck_drive', 8, true);
	if (truck.x === 1544)
	{
		game.add.tween(truck).to( { x: '-1744' }, 2000, Phaser.Easing.Linear.None, true);	
	}
}
