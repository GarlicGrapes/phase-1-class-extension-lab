// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((currentValue, nextValue) => currentValue + nextValue, 0)
    }
}

class Triangle extends Polygon {    
    get isValid() {
        let highestToLowest = this.sides.sort((a, b) => b-a);
        if (highestToLowest[0] < highestToLowest[1] + highestToLowest[2]) {
            return true
        }
        else {return false}
    }
}

class Square extends Polygon {
    get isValid() {
        return ((this.sides[0] == this.sides[1]) && (this.sides[0] == this.sides[2]) && (this.sides[0] == this.sides[3]))
    }
    get area(){
        return this.sides[0] * this.sides[0]
    }
}