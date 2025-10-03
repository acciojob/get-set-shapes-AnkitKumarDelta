//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	area(width,height){
		return width*height;
	}
	getwidth(){
		return this._width;
	}
	getheight(){
		return this._height;
	}
}

class Square extends Animal {
	constructor(side){
		this._side = side;
	}
	perimeter(side){
		return 4*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
