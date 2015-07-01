var term = require('terminal-kit').terminal
var keypress = require('keypress')
  , tty = require('tty');
var map = require("./map1.js");
var tiles = require("./tilesettings.json");
var config = require("./config.json");
var x = 0, y = 0, name = "";

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

console.reset = function () {
  return process.stdout.write('\033c');
}

removePreviousPlayer = function(direction) {
	switch (direction) {
		case "up":
			term.moveTo(x, y+1)(" ");
			break;
		case "down":
			term.moveTo(x, y-1)(" ");
			break;
		case "left":
			term.moveTo(x+1, y)(" ");
			break;
		case "right":
			term.moveTo(x-1, y)(" ");
			break;
	}
}

canMove = function(direction) {
	var lX = x;
	var lY = y;
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
	if ((y-1 === 0 && direction === "up") || (y === term.height-1 && direction === "down") ||
		(x-1===0 && direction === "left") || (x === term.width-1 && direction === "right")) {
		term.bell();
		return false;
	} else if (map.tiles[key] === tiles.wall) {
		term.bell();
		return false;
	} else if (map.tiles[key] === tiles.spike) {
		init();
		return false;
	}
	return true;
}

move = function(direction) {
	if (canMove(direction)) {
		if (direction === "up") {
		  	y--;
		} else if (direction === "down") {
		  	y++;
		} else if (direction === "left") {
		  	x--;
		} else if (direction == "right") {
	  		x++;
		}
		removePreviousPlayer(direction);
		term.moveTo(x, y).red(config.character)	
		if (x === map.config.endX && y === map.config.endY) {
			map = require(map.config.nextMap);
			init();
		}
	}
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

init = function() {
	x = map.config.startX;
	y = map.config.startY;
	term.windowTitle(map.config.name);
	console.reset()
	term.fullscreen(true);
	for (var key in map.tiles) {
		var point = key.split("x");
		term.moveTo(point[0], point[1]);
		term(map.tiles[key]);
	}

	term.hideCursor();
	term.saveCursor();
	term.moveTo(x, y).red(config.character)

}
intro = function() {
	term('Please enter your name: ');
	 
	term.inputField(function(error, input) {
		name = input;
		config.character = name.substr(0, 1);
		term("\nWelcome, %s! Would you like to start [y|n]?\n", name);
		term.yesOrNo({yes: ['y', 'ENTER'], no: ['n']} , function(error, result) {
		    if (result) {
		        setupKeypress();
		        init();
		    } else {
		        term.red("Ok, bye");
		        process.exit();
		    }
		});
	});
};

intro();