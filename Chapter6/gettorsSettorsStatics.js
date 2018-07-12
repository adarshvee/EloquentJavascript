let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
}

console.log(varyingSize.size);
//49
console.log(varyingSize.size);
//96

class Temperature {
  constructor(celcius) {
    this.celcius = celcius;
  }

  get farenheit() {
    return this.celcius * 1.8 + 32;
  }
  set farenheit(value) {
    this.celcius = (value - 32)/1.8;
  }
  //Static methods are attached to the constructor and usually act as factory methods
  static fromFarenheit(value) {
    return new Temperature((value - 32)/1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.farenheit);
//71.6
temp.farenheit = 86;
console.log(temp.celcius);
//30


//A Symmetric matrix
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x,y) => undefined) {
    super(size, size, (x,y) => {
      if(x < y) return element(y, x);
      else return element(x, y);
    })
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let mat = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix.get(2,3));
