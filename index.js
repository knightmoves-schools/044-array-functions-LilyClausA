let automobiles = ['car', 'truck', 'motocycle'];
automobiles.push('airplane', 'skateboard');
automobiles.unshift('bike', 'helicopter');
let automobilesCopy = `{automobiles}`
automobiles.pop('skateboard');
automobiles.shift('bike');

document.getElementById("result").innerHTML = automobiles;


//should define a new variable called automobilesCopy and set it equal 
// to a string template that contains the variable automobiles
