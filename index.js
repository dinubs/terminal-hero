var term = require('terminal-kit').terminal
var keypress = require('keypress')
  , tty = require('tty');
var map = require("./map1.js");
var tiles = require("./tilesettings.json");
var config = require("./config.json");
var character = require("./character.js");
var enemySprites = require("./enemySprites.js");

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

console.reset = function () {
  return process.stdout.write('\033c');
}

removePreviousPlayer = function(direction) {
	switch (direction) {
		case "up":
			term.moveTo(character.x, character.y+1)(" ");
			break;
		case "down":
			term.moveTo(character.x, character.y-1)(" ");
			break;
		case "left":
			term.moveTo(character.x+1, character.y)(" ");
			break;
		case "right":
			term.moveTo(character.x-1, character.y)(" ");
			break;
	}
}

canMove = function(direction) {
	var lX = character.x;
	var lY = character.y;
	if (direction === "up") {
	  	lY--;
	} else if (direction === "down") {
	  	lY++;
	} else if (direction === "left") {
	  	lX--;
	} else if (direction == "right") {
  		lX++;
	}
	var key = lX + "x" + lY;
	if ((character.y-1 === 0 && direction === "up") || (character.y === term.height-1 && direction === "down") ||
		(character.x-1===0 && direction === "left") || (character.x === term.width-1 && direction === "right")) {
		term.bell();
		return false;
	} else if (map.tiles[key]) {
    return map.tiles[key].event(character, term, map, initWithMap)
		term.bell();
	} 
	return true;
}

updateEnemies = function() {
  map.enemies.forEach(function(enemy) {
    var yDir = 1;
    if (character.y < enemy.y) {
      yDir = -1;
    } else if (character.y == enemy.y) {
      yDir = 0;
    }
    var xDir = 1;
    if (character.x < enemy.x) {
      xDir = -1;
    } else if (character.x == enemy.x) {
      xDir = 0;
    }
    term.moveTo(enemy.x, enemy.y)(" ");
    enemy.x += xDir;
    enemy.y += yDir;
    term.moveTo(enemy.x, enemy.y).red(enemySprites.easy);
  });
}

move = function(direction) {
	if (canMove(direction)) {
		if (direction === "up") {
	  	character.y--;
		} else if (direction === "down") {
	  	character.y++;
		} else if (direction === "left") {
	  	character.x--;
		} else if (direction == "right") {
  		character.x++;
		}
		removePreviousPlayer(direction);
		term.moveTo(character.x, character.y).brightBlue(character.fChar)	
		if (character.x === map.config.endX && character.y === map.config.endY) {
			map = require(map.config.nextMap);
			init();
		}
	}
  updateEnemies();
}

setupKeypress = function() {
	// listen for the "keypress" event
	process.stdin.on('keypress', function (ch, key) {
	  // console.log('got "keypress"', key);
	  move(key.name);
	  if (key && key.ctrl && key.name == 'c') {
	    process.stdin.pause();
	  }
	});

	if (typeof process.stdin.setRawMode == 'function') {
	  process.stdin.setRawMode(true);
	} else {
	  tty.setRawMode(true);
	}
	process.stdin.resume();
}

term.createMessage = function(message) {
  term.moveTo(1, 26);
  term.cyan(message);
};

init = function(message) {
  delete require.cache[require.resolve(map.config.mapUrl)];
  map = require(map.config.mapUrl);

	character.x = map.config.startX;
	character.y = map.config.startY;
	term.windowTitle(map.config.name);
	console.reset()
	term.fullscreen(true);
	for (var key in map.tiles) {
		var point = key.split("x");
		term.moveTo(point[0], point[1]);
    if (map.tiles[key].char == tiles.star) {
      term.brightYellow(map.tiles[key].char);
    } else {
		  term(map.tiles[key].char);
    }
	}
  map.enemies.forEach(function(key) {
    term.moveTo(key.x, key.y);
    term.red(enemySprites.easy);
  })
  if (message) {
    term.createMessage(message);
  }

	term.hideCursor();
	term.saveCursor();
	term.moveTo(character.x, character.y).brightBlue(character.fChar)

}
initWithMap = function(character, newMap, message) {
  map = newMap;
  init(message);
}
intro = function() {
  console.reset();
	term('Please enter your name: ');
	 
	term.inputField(function(error, input) {
		character.name = input;
		character.fChar = character.name.substr(0, 1);
		term("\nWelcome, %s! Would you like to start [y|n]?\n", character.name);
		term.yesOrNo({yes: ['y', 'ENTER'], no: ['n']} , function(error, result) {
	    if (result) {
        setupKeypress();
        init("Welcome to Terminal Hero. You are the bright blue "+character.fChar+" up above (check the top left)\n"+
                     "Your goal is to get to the star, this will make you go to the next level, good luck!");
	    } else {
        term.red("Ok, bye");
        process.exit();
	    }
		});
	});
};

intro();