var GuestList = ["Saba", "Sana", "Laila", "Ayesha"];
var dontCome = GuestList[0];
console.log(dontCome, " Nahi Aah sakti");
GuestList.splice(0, 1, "Raghisa");
GuestList.forEach(function (Guest) { return console.log("salam ".concat(Guest, ", would yor like to Dinner with me?")); });
