// using terra.js
// rileyjshaw.com/terra
var cellSize = 14;
var height = window.innerHeight / cellSize;
var width = document.documentElement.clientWidth / cellSize;

var c1 = [39, 174, 96];
var c2 = [52, 152, 219];

var lifeWithoutDeath = new terra.Terrarium(width, height, {
  background: c1,
  cellSize: cellSize,
  periodic: true,
  trails: 0.9
});

terra.registerCA({
  type: 'LwD',
  color: c2,
  colorFn: function () { return this.alive ? this.color + ',1' : '0,0,0,0'; },
  process: function (neighbors, x, y) {
    var surrounding = neighbors.filter(function (spot) {
      return spot.creature.alive;
    }).length;
    if (!this.alive && surrounding === 3) return this.alive = true;
    else return false;
  }
}, function () {
  this.alive = Math.random() < 0.02;
});

!function go () {
	// swap the colors
  c1.forEach(function (c, i) {
    c1[i] = c2[i];
    c2[i] = c;
  });
  
  lifeWithoutDeath.canvas.style.background = 'rgb(' + c1 + ')';
	lifeWithoutDeath.grid = lifeWithoutDeath.makeGrid('LwD');
	lifeWithoutDeath.animate(0, go);
}();
