const cars = ["Fiat", "Mercedes", "odi", "volkswagen", "suzuki"];
// pop supprimer drn el # push
// shift supprimer premier el # unshift
// splice(2, 0) 2 = la position ou on veut ajouter un element, 0 = combien delement a souprimer
// cars.push("Cheery");
// // console.log(cars.join(","));
// console.log(cars.pop());
// console.log(cars.shift())
// console.log(cars)
// console.log(cars.unshift("cheery"))
// console.log(cars)


const fruits = ["bananes", "oranges", "freizes", "sourises"]
const legumes = ["carrots", "pommes de terre", "tomates"]

// console.log(cars.concat(fruits, legumes))

// foreach,
// cars.forEach((i, index) => {
//     console.log(i, index)
// })
//
//map\

// cars.map((i, index) => {
//     console.log(i, index)
// })

// filter
const ages = [10, 12, 18, 25, 35]
const mageur = ages.filter((i, index) => i >= 18)
// console.log(mageur)

// splice

// cars.splice(2, 1, 'tata', 'jac')

// sort

const numbers = [98, 42, 67, 12, 29, 0, 83, 6]
const ordered_numbers = numbers.sort((a, b ) => {
    return b - a;
})
console.log(ordered_numbers)