const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



//a)  Las pizzas que tengan un id impar.

const imPares = pizzas.filter((pizza) => { 
  return pizza.id % 2 !== 0; 
  });
  imPares.forEach((pizza) => { 
  console.log (`Las pizzas ${pizza.nombre} tienen id impar`)
  }); 

//  b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaBarata = pizzas.some(function(pizza){
  return pizza.precio < 600;
  }); 
  
  if (pizzaBarata == true) {
  console.log("Hay una pizza mas barata");
  } else{
  console.log("No hay ninguna");
  }

  //c) El nombre de cada pizza con su respectivo precio.

  const carta = pizzas.filter((pizza) => {
    return pizza;
    });
    
    carta.forEach((pizza) => {
    console.log(`${pizza.nombre} el precio es de: ${pizza.precio}`);
    })

    // Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 
    
    const mostrameIngredientes = pizzas.filter((pizza) =>{
      return pizza.ingredientes
      });
      mostrameIngredientes.forEach((pizza) => { 
      console.log (`Pizzas: ${pizza.nombre} Ingredientes: ${pizza.ingredientes}`)
      }); 
      