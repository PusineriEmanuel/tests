const { Console } = require("console");

const array = [1, 2, 3, 4, 5];
const new_array = array;

array.push(6);

console.log(array);
array;

array.pop();
array;

new_array.push(6);
new_array;
array;

const array2 = [...array];

console.log(array2);
array2;

array2.push("ejemplo");
console.log(array2);
array2;

array.pop();
array.pop();
console.log(array);
console.log(new_array);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(obj.c);
obj.d = 4;
console.log(obj);

const obj2 = { ...obj };

console.log(obj2);
obj2.e = 5;
console.log(obj2);
console.log(obj);

const colores = ["red", "blue", "green"];
colores.push("black");

colores.forEach(function (e, i) {
  console.log(`<li id="${i}"> ${e} </li>`);
});

const objeto = {
  nombre: "ema",
  apellido: "pusineri",
  edad: 22,
  redes: {
    fc: "Emanuel Agustin Pusineri",
    email: "emanuelpusineri@outlook.com",
  },
  hobbys: ["self taught", "gaming", "draw"],
};

console.log(objeto["nombre"]);
console.log(objeto["apellido"]);
console.log(objeto.edad);
console.log(objeto.redes.email);
console.log(objeto["redes"]["email"]);
console.log(objeto.hobbys[2]);
console.log(objeto["hobbys"][1]);

function test() {
  const arrayDeObjeto = [];

  const objetoConObjeto = {
    Luna: {
      edad: 25,
    },
    Sebas: {
      edad: 7,
    },
    Marce: {
      edad: 34,
    },
    Nicky: {
      edad: 15,
    },
  };

  for (const keys in objetoConObjeto) {
    if (objetoConObjeto[keys]["edad"] < 18) {
      arrayDeObjeto.push(objetoConObjeto[keys]["edad"]);
    }
  }
  return arrayDeObjeto;
}

console.log(test());

const objetoConObjeto = {
  Luna: {
    edad: 25,
  },
  Sebas: {
    edad: 7,
  },
  Marce: {
    edad: 34,
  },
  Nicky: {
    edad: 15,
  },
};

for (const x in objetoConObjeto) {
  console.log(`${x}:${objetoConObjeto[x]}`); //${x} = key // objetoConObjeto[x] = value;
}

function cuentas(a, b) {
  let total = 0;
  total = a + b;
  return total;
}

cuentas(10, 15);

let v = 3;
console.log(v++);
console.log(++v);

console.log(!!true);
//operador ternario
let edad = 18;
let eresMayor = edad >= 18 ? "eres mayor de edad" : "eres menor de edad";
console.log(eresMayor);

let dia = 1;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;

  default:
    console.log("El dia no existe");
    break;
}

let contador = 0;
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}

do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10);

const numeross = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
for (i = 0; i < numeross.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeross[i]);
}

const coloress = [
  "blue",
  "green",
  "red",
  "orange",
  "purple",
  "white",
  "grey",
  "black",
  "cyan",
  "brown",
];
for (i = 0; i < numeross.length; i++) {
  if (numeross[i] === "orange") {
    continue;
  }
  console.log(coloress[i]);
}

//comprobacion y/o declaracion de errores
let numeroError = "y";
try {
  if (isNaN(numeroError)) {
    throw new Error("el caracter introducido no es un numero");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`se a producido el siguiente ${error}`);
}
