var tiles = require("./tilesettings.json");
var wall = tiles.wall;
var spike = tiles.spike;
module.exports = {
	"config": {
		"name": "Second Level",
		"startX": 1,
		"startY": 1,
		"endX": 5,
		"endY": 3,
		"nextMap": "./map1.js"
	},
	"tiles": {
		"1x3": wall,
		"2x3": wall,
		"3x3": wall,
		"4x4": wall,
		"5x1": spike,
		"5x3": "★"
	}
};