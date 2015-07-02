module.exports = {
	hitWall: function(character, term, map, init) {
	  term.bell();
	  return false;
	},
	hitSpike: function(character, term, map, init) {
        character.deaths++;
        character.deathsToSpikes++;
        var message = "";
        if (character.deathsToSpikes === 1) {
        	message = "That is a spike, you need to avoid those";
        }
        var newCharacter = character;
        init(character, map, message);
        return false;
    }
}