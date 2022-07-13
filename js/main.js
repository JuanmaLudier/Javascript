const objetos = [
  { animal: "leon", condicion: "carnivoro" },
  { animal: "tigre", condicion: "carnivoro" },
  { animal: "panda", condicion: "herbivoro" },
]

for (const item of objetos) {
  console.log("De los animales, el " + item.animal + " es " + item.condicion);
}

const animales = ["leon", "tigre", "Jaguar", "panda", "conejo"]
const herbivoro = animales.slice(3, 5)

console.log(herbivoro)


