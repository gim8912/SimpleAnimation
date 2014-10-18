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