function Shape(name, sides, sideLength){
    this.name = name
    this.sides = sides
    this.sideLength = sideLength
}

Shape.prototype.calcPerimeter = function(){
    return console.log(this.sides * this.sideLength);
}

var square = new Shape("square", 6, 5);
square.calcPerimeter();
console.log("Kết quả sai với mong muốn vì hình vuông thường có 4 cạnh");
console.log("Kết quả chỉ đúng với trường hợp sides = 4")
var triangle = new Shape("triangle", 6, 4);
triangle.calcPerimeter();
console.log("Kết quả sai với mong muốn vì hình tam giác có 3 cạnh");
console.log("Nếu sides = 3 thì chỉ đúng với trường hợp tam giác đều");
console.log("Cần thêm chiều dài của 2 cạnh nữa nếu chiều siles");

