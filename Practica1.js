const pets = [
    {name: 'lucho', species: 'dog'},
    {name: 'felix', species: 'cat'},
    {name: 'nemo', spepies: 'fish'}
];
var petsNames1 =[];
for (var i = 0; i < pets.length; i++) {
    petsNames1.push(pets[i].name );
}
console.log(`Pets names >> : ${petsNames1}`);
console.log(`Ejemplo template string A : ${5+5}`);
console.log(`Ejemplo template string B : ${petsNames1.length >3 ? "ok" : "cancel"}`);

//Arrow function
const petNames = pets.map( animal => animal.name);
console.log(`Pets name with map : ${petNames}`);