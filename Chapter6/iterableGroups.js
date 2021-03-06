/*Third exercise from chapter 6 of Eloquent JavaScript */
/*Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you
aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array.
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  constructor() {
    this.content = [];
  }
  add(value) {
    if (!this.has(value)) this.content.push(value);
    else console.log("Duplicate element ", value);
  }
  delete(value) {
    this.content = this.content.filter(e => value !== e);
  }
  has(value) {
    return this.content.includes(value);
  }
  static from (collection) {
    let grp = new Group();
    for (let el of collection) {
      grp.add(el);
    }
    return grp;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}
class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }
  next() {
    if (this.i >= this.group.content.length) return {done : true};
    else return {value : this.group.content[this.i++], done : false}
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
