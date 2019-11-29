//Object property shorthand
const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const {label: productLabel, stock, rating = 5} = product; //rename variable name
// console.log(productLabel);
// console.log(rating);

// const transaction = (type, {label, stock}) => {
//     console.log(type, label, stock);
// }
// transaction("order", product);