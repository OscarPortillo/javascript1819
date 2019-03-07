var pares = []
var num = [10,3,4,6,2,7];
pares = num.map((a)=>(a%2==0)?a*2:a)
console.log(pares)

var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

var dogs = []
var edad = []
//dogs=data.map((a)=>(a.type=="dog")?a:{})
for(o of data){
    if(o.type=="dog"){
        dogs.push(o)
        edad.push(o.age*7)
    }
}
var suma = 0
//var suma = edad.reduce((a, b) => a + b)
data.reduce((a, b) =>{
    (b.type=="dog")?suma+=b.age*7:0
},0)

console.log(suma)

console.log(dogs)
console.log(edad)

