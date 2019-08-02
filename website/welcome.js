let cols, rows,
	current = [],
	previous = [],
	damping = 0.99;

	var go;

function mouseDragged() {
	current[mouseX][mouseY] = 5
}

function setup() {
	pixelDensity(1)
	createCanvas(displayWidth, displayHeight)
	cols = width
	rows = height
	for (let i = 0; i < cols; i++) {
		current[i] = []
		previous[i] = []
		for (let j = 0; j < rows; j++) {
			current[i][j] = 0
			previous[i][j] = 0
		}
	}
	previous[mouseX][mouseY] = 25
go = new Button ("",width/2,height/2,400,200,20,24)
}


function draw() {
	background(90)
	fill(220,180,20);textSize(45);textAlign(CENTER)
	text("welcome to 3D print",width/2,50);
//damping = map(mouseX,0,width,0.9,0.99)
let x= random(width);
let y= random(height);
x= int(x);y=int(y);
		current[x][y] = 7
	loadPixels()
	for (let i = 1; i < cols - 1; i++) {
		for (let j = 80; j < rows - 1; j++) {
			current[i][j] =
				(previous[i - 1][j] + previous[i + 1][j] +
					previous[i][j - 1] + previous[i][j + 1]

	) / 2 - current[i][j];
			current[i][j] = current[i][j] * damping
			let index = (i + j * cols) * 4;
			pixels[index + 0] = current[i][j] * 0
			pixels[index + 1] = current[i][j] * 0
			pixels[index + 2] = current[i][j] * 555
			pixels[index + 3] = 255
		}
	}
	updatePixels()
textSize(30)
text("press here to continue",width/2,height/2);
	//swap buffers
	let temp = previous
	previous = current
	current = temp
}
function mousePressed(){
window.location.pathname = '/'

}
