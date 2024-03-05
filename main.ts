let GuestList =["Saba","Sana","Laila" ,"Ayesha"];

let dontCome = GuestList[0];

console.log(dontCome," Nahi Aah sakti");

GuestList.splice(0, 1, "Raghisa");

GuestList.forEach(Guest => console.log(`salam ${Guest}, would yor like to Dinner with me?`));