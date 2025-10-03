//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	getarea(){
		return this._width*this._height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side);
		this._side = side;
	}
	getperimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
