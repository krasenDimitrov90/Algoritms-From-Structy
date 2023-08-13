function Vector(components) {
    this.components = components;
};

Vector.prototype.add = function (v) {
    if (this.components.length !== v.components.length) throw new Error('Different length');
    this.components = this.components.map((c, i) => c + v.components[i]);
    return this;
}

Vector.prototype.subtract = function (v) {
    if (this.components.length !== v.components.length) throw new Error('Different length');
    this.components = this.components.map((c, i) => c - v.components[i]);
    return this;
}

Vector.prototype.dot = function (v) {
    if (this.components.length !== v.components.length) throw new Error('Different length');
    return this.components.reduce((a, c, i) => a + c * v.components[i], 0);
}

Vector.prototype.norm = function (v) {
    return Math.sqrt(this.components.reduce((a, c, i) => a + c*c, 0));
}

Vector.prototype.toString = function () {
    return '(' + this.components.join(',') + ')';
}

Vector.prototype.equals = function (v) {
    let i = 0;
    for (const c of this.components) {
        if (c !== v.components[i++]) return false;
    }
    return true;
}

const a = new Vector([1,2,3])
const b = new Vector([3,4,5])
const c = new Vector([4,6])

// a.norm();
console.log(a.add(b).toString())