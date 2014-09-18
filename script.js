var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '',
          {preload: preload, create: create, update: update});
var bg;
var cow;

//// 강승화
var tractor;
var bird;
var lift;
var tree;
var train;
var house01;

//// 신창무
var parasol3

//// 주란
var streetlamp;
var windmill;


function preload() {
	game.load.spritesheet('cow', 'assets/cow.png',100 , 50);
	game.load.image('bg', 'assets/bg.jpg');
	
	//강승화 프리로드
	game.load.spritesheet('tractor', 'assets/tractor.png', 82,110);
	game.load.spritesheet('bird', 'assets/bird01.png', 86,109);
	game.load.spritesheet('lift', 'assets/lift.png', 56,40);
	game.load.spritesheet('tree', 'assets/tree01.png', 184,159);
	game.load.spritesheet('train', 'assets/train.png', 551,72);
	game.load.image('house01', 'assets/house01.png');
	game.load.image('house02', 'assets/house02.png');
	//신창무 프리로드
	game.load.spritesheet('parasol3', 'assets/parasol3.png', 300, 300);
	
	//주란 프리로드
	game.load.spritesheet('streetlamp', 'assets/streetlamp.png', 39, 204);
	game.load.spritesheet('windmill', 'assets/windmill.png', 176, 201);
	
}
function create() {
	// 기본 배경
	bg= game.add.sprite(0,0, 'bg');	
	
	//강승화 생성
	house01= game.add.sprite(1323,999, 'house01');
	house02= game.add.sprite(2472,921, 'house02');
	cow = game.add.sprite(600, 1000, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);
	
    tractor = game.add.sprite(1000, 1050, 'tractor'); //트렉터
	tractor.animations.add('walk');
	tractor.inputEnabled = true;
	tractor.events.onInputDown.add(tractorClick, this);

	bird = game.add.sprite(790,1330, 'bird');
	bird.animations.add('fly');
	bird.animations.play('fly', 10, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);

	lift = game.add.sprite(2400, 180, 'lift'); //리프트
	lift.animations.add('swing');
	lift.inputEnabled = true;
	lift.events.onInputDown.add(liftClick, this);

	tree = game.add.sprite(300, 1050, 'tree'); //나무
	tree.animations.add('cut');
	tree.inputEnabled = true;
	tree.events.onInputDown.add(treeClick, this);

	train = game.add.sprite(3000, 440, 'train'); //기차
	train.animations.add('shiny');
	train.inputEnabled = true;
	train.events.onInputDown.add(trainClick, this);
	
	//신창무 생성
	parasol3= game.add.sprite(3000, 1500, 'parasol3');
	parasol3.animations.add('walk');
	parasol3.inputEnabled = true;
	parasol3.events.onInputDown.add(parsil5Click, this);
	
	//주란 생성
	streetlamp = game.add.sprite(300,100, 'streetlamp');
	streetlamp.animations.add('lamp');
	streetlamp.animations.play('lamp', 5, true);

	windmill = game.add.sprite(400,100, 'windmill');
	windmill.animations.add('spin');
	windmill.animations.play('spin', 10, true);
}
function update() {	

	if(train.x === -600){
		train.x=3840;
		game.add.tween(train).to( { x: '-840' }, 5000, Phaser.Easing.Linear.None, true);
	}
}
function cowClick() {
	cow.animations.play('walk', 10, false);	
}

//강승화 함수
function tractorClick() {
	tractor.animations.play('walk', 7, false);
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
		//	Here you'll notice we are using a relative value for the tween.
		//	You can specify a number as a string with either + or - at the start of it.
		//	When the tween starts it will take the sprites current X value and add +300 to it.
		game.add.tween(train).to( { x: '-3600' }, 2000, Phaser.Easing.Linear.None, true);	
	}
	
	

}

	



//신창무 함수
function parsil5Click() {
  parasol3.animations.play('walk', 10, false);
}

//주란 함수



//승훈 함수

//트윈애니메이션(왔다갔다)
  //birds[0].wander = game.add.tween(birds[0])
  //.to({ x: 000, y: 1380}, 2000, phaser.Easing.Linear.None)
  //.to({ x: 000, y: 1380}, 2000, phaser.Easing.Linear.None)
  //.loop()
  //.start();
