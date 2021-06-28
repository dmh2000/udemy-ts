function A() {
 if (!(this instanceof A)) {
   return new A();
 }
}

A.prototype.x = () => {
  console.log("x");
}

const q = new A();
q.x();

const r = A();
r.x();

let B = (function() {
  function B() {

  }

  B.prototype.y = () => {
    console.log("y");
  }

  return B;
}());

B = new B();
B.y();