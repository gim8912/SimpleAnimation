var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '',
          {preload: preload, create: create, /*update: update */});
var cow;

function preload() {
	game.load.spritesheet('cow', 'assets/cow.png',100 , 50);
	game.load.image('bg', 'assets/bg.jpg');
}

function create() {
	bg = game.add.sprite(0,0, 'bg')
	cow = game.add.sprite(100, 100, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);
}

function cowClick() {
	cow.animations.play('walk', 5, false);
}
