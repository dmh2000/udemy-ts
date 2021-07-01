"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Sorter = /** @class */ (function () {
    function Sorter(col) {
        this.col = col;
    }
    Sorter.prototype.sort = function (collection) {
        for (var i = 0; i < this.col.len(collection); i++) {
            for (var j = i + 1; j < this.col.len(collection); j++) {
                if (this.col.cmp(i, j, collection)) {
                    collection = this.col.swp(i, j, collection);
                }
            }
        }
        return collection;
    };
    return Sorter;
}());
var NSort = /** @class */ (function () {
    function NSort() {
    }
    NSort.prototype.cmp = function (i, j, a) {
        return a[i] > a[j];
    };
    NSort.prototype.swp = function (i, j, a) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
        return a;
    };
    NSort.prototype.len = function (a) {
        return a.length;
    };
    return NSort;
}());
var SSort = /** @class */ (function () {
    function SSort() {
    }
    SSort.prototype.cmp = function (i, j, a) {
        return a[i].toString() > a[j].toString();
    };
    SSort.prototype.swp = function (i, j, s) {
        var a = s.split("");
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
        var b = a.join("");
        return b;
    };
    SSort.prototype.len = function (a) {
        return a.length;
    };
    return SSort;
}());
var b = [4, 9, 6, 2, 7, 11];
var c = [5, 4, 3, 2, 1];
var d = "90z23740ab1";
var s2 = new Sorter(new NSort());
b = s2.sort(b);
console.log(b);
c = s2.sort(c);
console.log(c);
var s3 = new Sorter(new SSort());
d = s3.sort(d);
console.log(d);
var LSort = /** @class */ (function () {
    function LSort() {
    }
    LSort.prototype.cmp = function (i, j, list) {
        return list.compare(i, j);
    };
    LSort.prototype.swp = function (i, j, list) {
        list.swap(i, j);
        return list;
    };
    LSort.prototype.len = function (list) {
        return list.length;
    };
    return LSort;
}());
var ls = new Sorter(new LSort());
var list = new LinkedList_1.LinkedList();
list.add(5);
list.add(2);
list.add(10);
list.add(1);
list.add(0);
list = ls.sort(list);
list.print();
