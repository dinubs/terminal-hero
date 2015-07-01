var tiles = require("./tilesettings.json");
var wall = tiles.wall;
var spike = tiles.spike;
module.exports = {
	"config": {
		"name": "First Level",
		"startX": 1,
		"startY": 1,
		"endX": 5,
		"endY": 5,
		"nextMap": "./map2.js"
	},
	"tiles": {
		"1x2": wall,
		"2x2": wall,
		"3x2": wall,
		"4x2": wall,
		"5x2": spike,
		"5x5": "★"
	}
};