let user = null;
let totalBills = 0;

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

function askUser() {
  while (!user) {
    numberDoc = Number(prompt("Indroduce tu numero de documento"));
    // password = Number(prompt("Indroduce tu numero de documento"));
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
