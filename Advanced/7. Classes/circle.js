class Circle {
    
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        let d = 2*this.radius;
        return d;
    }
    set diameter(value) {
        this.radius = value/2;
        
    }
    get area() {
        let a = Math.PI * (this.radius ** 2);
        return a;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
