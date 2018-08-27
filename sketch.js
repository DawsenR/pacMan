function setup() {
	createCanvas(windowWidth, windowHeight);
	level = new Level();
}

function draw() {
	background(0);
	level.levelUpdate();
}
