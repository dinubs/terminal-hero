var tiles = require("./tilesettings.json");
var fx = require("./tileFunctions.js");
var wall = tiles.wall;
var spike = tiles.spike;
var star = tiles.star
module.exports = {
	"config": {
		"name": "Second Level",
		"startX": 2,
		"startY": 2,
		"endX": 5,
		"endY": 3,
		"nextMap": "./map1.js"
	},
	"tiles": {
		"1x1": {"char": wall,"event": fx.hitWall},"1x2": {"char": wall,"event": fx.hitWall},"1x3": {"char": wall,"event": fx.hitWall},"1x4": {"char": wall,"event": fx.hitWall},"1x5": {"char": wall,"event": fx.hitWall},"1x6": {"char": wall,"event": fx.hitWall},"1x7": {"char": wall,"event": fx.hitWall},"1x8": {"char": wall,"event": fx.hitWall},"1x9": {"char": wall,"event": fx.hitWall},"1x10": {"char": wall,"event": fx.hitWall},"1x11": {"char": wall,"event": fx.hitWall},"1x12": {"char": wall,"event": fx.hitWall},"1x13": {"char": wall,"event": fx.hitWall},"1x14": {"char": wall,"event": fx.hitWall},"1x15": {"char": wall,"event": fx.hitWall},"1x16": {"char": wall,"event": fx.hitWall},"1x17": {"char": wall,"event": fx.hitWall},"1x18": {"char": wall,"event": fx.hitWall},"1x19": {"char": wall,"event": fx.hitWall},"1x20": {"char": wall,"event": fx.hitWall},"1x21": {"char": wall,"event": fx.hitWall},"1x22": {"char": wall,"event": fx.hitWall},"1x23": {"char": wall,"event": fx.hitWall},"1x24": {"char": wall,"event": fx.hitWall},"1x25": {"char": wall,"event": fx.hitWall},"1x1": {"char": wall,"event": fx.hitWall},"2x1": {"char": wall,"event": fx.hitWall},"3x1": {"char": wall,"event": fx.hitWall},"4x1": {"char": wall,"event": fx.hitWall},"5x1": {"char": wall,"event": fx.hitWall},"6x1": {"char": wall,"event": fx.hitWall},"7x1": {"char": wall,"event": fx.hitWall},"8x1": {"char": wall,"event": fx.hitWall},"9x1": {"char": wall,"event": fx.hitWall},"10x1": {"char": wall,"event": fx.hitWall},"11x1": {"char": wall,"event": fx.hitWall},"12x1": {"char": wall,"event": fx.hitWall},"13x1": {"char": wall,"event": fx.hitWall},"14x1": {"char": wall,"event": fx.hitWall},"15x1": {"char": wall,"event": fx.hitWall},"16x1": {"char": wall,"event": fx.hitWall},"17x1": {"char": wall,"event": fx.hitWall},"18x1": {"char": wall,"event": fx.hitWall},"19x1": {"char": wall,"event": fx.hitWall},"20x1": {"char": wall,"event": fx.hitWall},"21x1": {"char": wall,"event": fx.hitWall},"22x1": {"char": wall,"event": fx.hitWall},"23x1": {"char": wall,"event": fx.hitWall},"24x1": {"char": wall,"event": fx.hitWall},"25x1": {"char": wall,"event": fx.hitWall},"26x1": {"char": wall,"event": fx.hitWall},"27x1": {"char": wall,"event": fx.hitWall},"28x1": {"char": wall,"event": fx.hitWall},"29x1": {"char": wall,"event": fx.hitWall},"30x1": {"char": wall,"event": fx.hitWall},"31x1": {"char": wall,"event": fx.hitWall},"32x1": {"char": wall,"event": fx.hitWall},"33x1": {"char": wall,"event": fx.hitWall},"34x1": {"char": wall,"event": fx.hitWall},"35x1": {"char": wall,"event": fx.hitWall},"36x1": {"char": wall,"event": fx.hitWall},"37x1": {"char": wall,"event": fx.hitWall},"38x1": {"char": wall,"event": fx.hitWall},"39x1": {"char": wall,"event": fx.hitWall},"40x1": {"char": wall,"event": fx.hitWall},"41x1": {"char": wall,"event": fx.hitWall},"42x1": {"char": wall,"event": fx.hitWall},"43x1": {"char": wall,"event": fx.hitWall},"44x1": {"char": wall,"event": fx.hitWall},"45x1": {"char": wall,"event": fx.hitWall},"46x1": {"char": wall,"event": fx.hitWall},"47x1": {"char": wall,"event": fx.hitWall},"48x1": {"char": wall,"event": fx.hitWall},"49x1": {"char": wall,"event": fx.hitWall},"50x1": {"char": wall,"event": fx.hitWall},"51x1": {"char": wall,"event": fx.hitWall},"52x1": {"char": wall,"event": fx.hitWall},"53x1": {"char": wall,"event": fx.hitWall},"54x1": {"char": wall,"event": fx.hitWall},"55x1": {"char": wall,"event": fx.hitWall},"56x1": {"char": wall,"event": fx.hitWall},"57x1": {"char": wall,"event": fx.hitWall},"58x1": {"char": wall,"event": fx.hitWall},"59x1": {"char": wall,"event": fx.hitWall},"60x1": {"char": wall,"event": fx.hitWall},"61x1": {"char": wall,"event": fx.hitWall},"62x1": {"char": wall,"event": fx.hitWall},"63x1": {"char": wall,"event": fx.hitWall},"64x1": {"char": wall,"event": fx.hitWall},"65x1": {"char": wall,"event": fx.hitWall},"66x1": {"char": wall,"event": fx.hitWall},"67x1": {"char": wall,"event": fx.hitWall},"68x1": {"char": wall,"event": fx.hitWall},"69x1": {"char": wall,"event": fx.hitWall},"70x1": {"char": wall,"event": fx.hitWall},"71x1": {"char": wall,"event": fx.hitWall},"72x1": {"char": wall,"event": fx.hitWall},"73x1": {"char": wall,"event": fx.hitWall},"74x1": {"char": wall,"event": fx.hitWall},"75x1": {"char": wall,"event": fx.hitWall},"76x1": {"char": wall,"event": fx.hitWall},"77x1": {"char": wall,"event": fx.hitWall},"78x1": {"char": wall,"event": fx.hitWall},"79x1": {"char": wall,"event": fx.hitWall},"80x1": {"char": wall,"event": fx.hitWall},"81x1": {"char": wall,"event": fx.hitWall},"82x1": {"char": wall,"event": fx.hitWall},"83x1": {"char": wall,"event": fx.hitWall},"84x1": {"char": wall,"event": fx.hitWall},"85x1": {"char": wall,"event": fx.hitWall},"86x1": {"char": wall,"event": fx.hitWall},"87x1": {"char": wall,"event": fx.hitWall},"88x1": {"char": wall,"event": fx.hitWall},"89x1": {"char": wall,"event": fx.hitWall},"90x1": {"char": wall,"event": fx.hitWall},"91x1": {"char": wall,"event": fx.hitWall},"92x1": {"char": wall,"event": fx.hitWall},"93x1": {"char": wall,"event": fx.hitWall},"94x1": {"char": wall,"event": fx.hitWall},"95x1": {"char": wall,"event": fx.hitWall},"96x1": {"char": wall,"event": fx.hitWall},"97x1": {"char": wall,"event": fx.hitWall},"98x1": {"char": wall,"event": fx.hitWall},"99x1": {"char": wall,"event": fx.hitWall},"100x1": {"char": wall,"event": fx.hitWall},"1x25": {"char": wall,"event": fx.hitWall},"2x25": {"char": wall,"event": fx.hitWall},"3x25": {"char": wall,"event": fx.hitWall},"4x25": {"char": wall,"event": fx.hitWall},"5x25": {"char": wall,"event": fx.hitWall},"6x25": {"char": wall,"event": fx.hitWall},"7x25": {"char": wall,"event": fx.hitWall},"8x25": {"char": wall,"event": fx.hitWall},"9x25": {"char": wall,"event": fx.hitWall},"10x25": {"char": wall,"event": fx.hitWall},"11x25": {"char": wall,"event": fx.hitWall},"12x25": {"char": wall,"event": fx.hitWall},"13x25": {"char": wall,"event": fx.hitWall},"14x25": {"char": wall,"event": fx.hitWall},"15x25": {"char": wall,"event": fx.hitWall},"16x25": {"char": wall,"event": fx.hitWall},"17x25": {"char": wall,"event": fx.hitWall},"18x25": {"char": wall,"event": fx.hitWall},"19x25": {"char": wall,"event": fx.hitWall},"20x25": {"char": wall,"event": fx.hitWall},"21x25": {"char": wall,"event": fx.hitWall},"22x25": {"char": wall,"event": fx.hitWall},"23x25": {"char": wall,"event": fx.hitWall},"24x25": {"char": wall,"event": fx.hitWall},"25x25": {"char": wall,"event": fx.hitWall},"26x25": {"char": wall,"event": fx.hitWall},"27x25": {"char": wall,"event": fx.hitWall},"28x25": {"char": wall,"event": fx.hitWall},"29x25": {"char": wall,"event": fx.hitWall},"30x25": {"char": wall,"event": fx.hitWall},"31x25": {"char": wall,"event": fx.hitWall},"32x25": {"char": wall,"event": fx.hitWall},"33x25": {"char": wall,"event": fx.hitWall},"34x25": {"char": wall,"event": fx.hitWall},"35x25": {"char": wall,"event": fx.hitWall},"36x25": {"char": wall,"event": fx.hitWall},"37x25": {"char": wall,"event": fx.hitWall},"38x25": {"char": wall,"event": fx.hitWall},"39x25": {"char": wall,"event": fx.hitWall},"40x25": {"char": wall,"event": fx.hitWall},"41x25": {"char": wall,"event": fx.hitWall},"42x25": {"char": wall,"event": fx.hitWall},"43x25": {"char": wall,"event": fx.hitWall},"44x25": {"char": wall,"event": fx.hitWall},"45x25": {"char": wall,"event": fx.hitWall},"46x25": {"char": wall,"event": fx.hitWall},"47x25": {"char": wall,"event": fx.hitWall},"48x25": {"char": wall,"event": fx.hitWall},"49x25": {"char": wall,"event": fx.hitWall},"50x25": {"char": wall,"event": fx.hitWall},"51x25": {"char": wall,"event": fx.hitWall},"52x25": {"char": wall,"event": fx.hitWall},"53x25": {"char": wall,"event": fx.hitWall},"54x25": {"char": wall,"event": fx.hitWall},"55x25": {"char": wall,"event": fx.hitWall},"56x25": {"char": wall,"event": fx.hitWall},"57x25": {"char": wall,"event": fx.hitWall},"58x25": {"char": wall,"event": fx.hitWall},"59x25": {"char": wall,"event": fx.hitWall},"60x25": {"char": wall,"event": fx.hitWall},"61x25": {"char": wall,"event": fx.hitWall},"62x25": {"char": wall,"event": fx.hitWall},"63x25": {"char": wall,"event": fx.hitWall},"64x25": {"char": wall,"event": fx.hitWall},"65x25": {"char": wall,"event": fx.hitWall},"66x25": {"char": wall,"event": fx.hitWall},"67x25": {"char": wall,"event": fx.hitWall},"68x25": {"char": wall,"event": fx.hitWall},"69x25": {"char": wall,"event": fx.hitWall},"70x25": {"char": wall,"event": fx.hitWall},"71x25": {"char": wall,"event": fx.hitWall},"72x25": {"char": wall,"event": fx.hitWall},"73x25": {"char": wall,"event": fx.hitWall},"74x25": {"char": wall,"event": fx.hitWall},"75x25": {"char": wall,"event": fx.hitWall},"76x25": {"char": wall,"event": fx.hitWall},"77x25": {"char": wall,"event": fx.hitWall},"78x25": {"char": wall,"event": fx.hitWall},"79x25": {"char": wall,"event": fx.hitWall},"80x25": {"char": wall,"event": fx.hitWall},"81x25": {"char": wall,"event": fx.hitWall},"82x25": {"char": wall,"event": fx.hitWall},"83x25": {"char": wall,"event": fx.hitWall},"84x25": {"char": wall,"event": fx.hitWall},"85x25": {"char": wall,"event": fx.hitWall},"86x25": {"char": wall,"event": fx.hitWall},"87x25": {"char": wall,"event": fx.hitWall},"88x25": {"char": wall,"event": fx.hitWall},"89x25": {"char": wall,"event": fx.hitWall},"90x25": {"char": wall,"event": fx.hitWall},"91x25": {"char": wall,"event": fx.hitWall},"92x25": {"char": wall,"event": fx.hitWall},"93x25": {"char": wall,"event": fx.hitWall},"94x25": {"char": wall,"event": fx.hitWall},"95x25": {"char": wall,"event": fx.hitWall},"96x25": {"char": wall,"event": fx.hitWall},"97x25": {"char": wall,"event": fx.hitWall},"98x25": {"char": wall,"event": fx.hitWall},"99x25": {"char": wall,"event": fx.hitWall},"100x25": {"char": wall,"event": fx.hitWall},"100x1": {"char": wall,"event": fx.hitWall},"100x2": {"char": wall,"event": fx.hitWall},"100x3": {"char": wall,"event": fx.hitWall},"100x4": {"char": wall,"event": fx.hitWall},"100x5": {"char": wall,"event": fx.hitWall},"100x6": {"char": wall,"event": fx.hitWall},"100x7": {"char": wall,"event": fx.hitWall},"100x8": {"char": wall,"event": fx.hitWall},"100x9": {"char": wall,"event": fx.hitWall},"100x10": {"char": wall,"event": fx.hitWall},"100x11": {"char": wall,"event": fx.hitWall},"100x12": {"char": wall,"event": fx.hitWall},"100x13": {"char": wall,"event": fx.hitWall},"100x14": {"char": wall,"event": fx.hitWall},"100x15": {"char": wall,"event": fx.hitWall},"100x16": {"char": wall,"event": fx.hitWall},"100x17": {"char": wall,"event": fx.hitWall},"100x18": {"char": wall,"event": fx.hitWall},"100x19": {"char": wall,"event": fx.hitWall},"100x20": {"char": wall,"event": fx.hitWall},"100x21": {"char": wall,"event": fx.hitWall},"100x22": {"char": wall,"event": fx.hitWall},"100x23": {"char": wall,"event": fx.hitWall},"100x24": {"char": wall,"event": fx.hitWall},"100x25": {"char": wall,"event": fx.hitWall},
		"5x2": {
      "char": spike,
      "event": fx.hitSpike
    },
		"5x3": {
      "char": star,
      "event": function(character, term, map, init) {
        var newMap = require("./map2.js");
        init(character, newMap, "");
        return false;
      }
    }
	}
};