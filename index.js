let automobiles = ['car', 'truck', 'motocycle'];
automobiles.push('airplane', 'skateboard');
automobiles.unshift('bike', 'helicopter');
let automobilesCopy = {automobiles};
automobiles.pop('skateboard');
automobiles.shift('bike');

document.getElementById("result").innerHTML = automobiles;


//should create a variable named automobiles that contains car, truck, motorcycle
//should add airplane and skateboard to the end of automobiles
//should add bike and helicopter to the front of the automobiles
//should define a new variable called automobilesCopy and set it equal to a string template that contains the variable automobiles
//should remove the last item from the end of the the automobiles
//should remove the first item from the front of the automobiles
//should assign the innerHTML of the HTML element with the id result to automobiles
