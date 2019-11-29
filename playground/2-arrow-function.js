// const event = {
//     name: "Birthday Party",
//     printGuestList: function () {
//         console.log("Guest list for " + this.name); //Guest list for Birthday Party
//     }

//     /** BAD: arrow function will return undefined for this.name so not a good idea to use arrow func here */
//     // printGuestList = () => console.log("Guest list for " + this.name);

//     /** GOOD: use es6 funciton which has access to this keyword! */
//     // printGuestList() { console.log("Guest list for " + this.name); } //Guest list for Birthday Party
// }
const event = {
    name: "Birthday Party",
    guestList: ["Sam", "Josh", "Lisa"],
    printGuestList() { 
        console.log("Guest list for " + this.name); 
        //BAD this.guestList.forEach( function(guest) {
        //     console.log(guest + " is attending " + this.name) //this.name --> Undefined!
        // });
        /** use arrow func! */
        this.guestList.forEach(guest => {
            console.log(guest + " is attending " + this.name) //this.name --> Undefined!
        });
    }
}

event.printGuestList();