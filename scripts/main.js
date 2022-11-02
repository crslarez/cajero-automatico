//Declaración de variables.
let user = null;     
let totalBills = 0;

// Crea una lista de objetos para los billetes, cada objeto tiene el tipo de billete, la cantidad de billetes y el total de la suma de todos los billets ingresados de ese tipo.
const bills = [
  {
    type: 5000,
    amount: 0,
    total: 0,
  },
  {
    type: 10000,
    amount: 0,
    total: 0,
  },
  {
    type: 20000,
    amount: 0,
    total: 0,
  },
  {
    type: 50000,
    amount: 0,
    total: 0,
  },
  {
    type: 100000,
    amount: 0,
    total: 0,
  },
];

// Crea lista de objetos de usuario, cada objeto contiene el nombre, número de documento, contraseña y tipo de cada usuario. El usuario No.1 es administrador y el No.2 es cliente.

const users = [
  {
    name: "Carlos",
    numberDoc: 1234,
    password: "1234",
    typeUser: 2,
  },
  {
    name: "Pedro",
    numberDoc: 2345,
    password: "2345",
    typeUser: 2,
  },
  {
    name: "Juan",
    numberDoc: 3456,
    password: "3456",
    typeUser: 1,
  },
];

// Función para iniciar sesión, es un bucle que se ejecutará hasta que el usuario escriba los datos correctos. Se usa un .find() para recorrer el array de usuarios y comparar el número de documento que tiene guardado con el que se está ingresando y si coincide retorna al usuario y se termina el bucle. Si éste usuario que se retornó es tipo 1 (administrador) se ejecuta la función de ingresarDinero(), si es cliente y el cajero está en cero le dirá que está en mantenimiento y que vuelva pronto sinó se ejecuta la función de retirar().
function askUser() {
  while (!user) {
    numberDoc = Number(prompt("Indroduce tu numero de documento"));
    password = Number(prompt("Indroduce tu numero de documento"));
    user = users.find((element) => element.numberDoc === numberDoc);
    if (!user) {
      console.log("Usuario no valido");
    }
  }

  if (user.typeUser === 1) {
    ingresarDinero();
  } else {
    if (totalBills === 0) {
      console.log("Cajero en mantenimiento, vuelva pronto");
    } else {
      retirar();
    }
  }
}

function ingresarDinero() {
  bills.forEach((element) => {
    element.amount = Number(
      prompt(`Cuantos billetes de ${element.type} va a ingresar`)
    );
    element.total = element.amount * element.type;
    totalBills += element.total;
    console.log(`Ingresaste ${element.total} en billetes de ${element.type}`);
  });
  console.log(`En total ingresaste ${totalBills}`);
  user = null;
  setTimeout(() => {
    window.console.clear();
    askUser();
  }, 5000);
}

function retirar() {
  console.log(`Puedo entregar ${totalBills} en billetes de:`);

  bills.forEach((element) => {
    console.log(
      `Tengo disponible ${element.amount} billetes de ${element.type}`
    );
  });

  setTimeout(() => {
    let retiro = Number(prompt("Cuanto dinero quires sacar?"));
  }, 3000);
}
