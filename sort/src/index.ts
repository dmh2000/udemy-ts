import { LinkedList } from "./LinkedList";

interface Sortable {
  cmp: (i: number, j: number, a: any) => boolean;
  swp: (i: number, j: number, a: any) => any;
  len: (a: any) => number;
}

class Sorter {
  col: Sortable;

  constructor(col: Sortable) {
    this.col = col;
  }

  sort(collection: any): any {
    for (let i = 0; i < this.col.len(collection); i++) {
      for (let j = i + 1; j < this.col.len(collection); j++) {
        if (this.col.cmp(i, j, collection)) {
          collection = this.col.swp(i, j, collection);
        }
      }
    }
    return collection;
  }
}

class NSort implements Sortable {
  cmp(i: number, j: number, a: number[]): boolean {
    return a[i] > a[j];
  }

  swp(i: number, j: number, a: number[]): any {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
    return a;
  }

  len(a: number[]): number {
    return a.length;
  }
}

class SSort implements Sortable {
  cmp(i: number, j: number, a: string): boolean {
    return a[i].toString() > a[j].toString();
  }

  swp(i: number, j: number, s: string): string {
    let a = s.split("");
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
    const b = a.join("");
    return b;
  }

  len(a: string): number {
    return a.length;
  }
}

let b = [4, 9, 6, 2, 7, 11];
let c = [5, 4, 3, 2, 1];
let d = "90z23740ab1";

const s2 = new Sorter(new NSort());
b = s2.sort(b);
console.log(b);
c = s2.sort(c);
console.log(c);

const s3 = new Sorter(new SSort());
d = s3.sort(d);
console.log(d);

class LSort {
  cmp(i: number, j: number, list: LinkedList): boolean {
    return list.compare(i, j);
  }

  swp(i: number, j: number, list: LinkedList): LinkedList {
    list.swap(i, j);
    return list;
  }

  len(list: LinkedList): number {
    return list.length;
  }
}

const ls = new Sorter(new LSort());
let list = new LinkedList();
list.add(5);
list.add(2);
list.add(10);
list.add(1);
list.add(0);
list = ls.sort(list);
list.print();
