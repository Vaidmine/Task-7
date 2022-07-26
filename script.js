/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: "audi",
    model: "A6",
    year: 2005,
    color: "white",

    // getSummary: function() {
    //     return `${this.make}, ${this.model}, ${this.year}, ${this.color}`;
    // },
};

console.log(typeof audi);
// console.log(audi);
// console.log(audi.getSummary());
console.log("Object keys are:" + " " + Object.keys(audi));