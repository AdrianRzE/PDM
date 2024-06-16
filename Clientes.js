// Paso 1: Crear el arreglo de clientes
let clientes = [
    {
        id: 1,
        name: "Juan",
        lastname: "Pérez",
        age: 30,
        services: [
            { name: "Internet", status: true },
            { name: "TV", status: false }
        ]
    },
    {
        id: 2,
        name: "María",
        lastname: "López",
        age: 25,
        services: [
            { name: "Internet", status: true },
            { name: "TV", status: true }
        ]
    },
    {
        id: 3,
        name: "Carlos",
        lastname: "García",
        age: 35,
        services: [
            { name: "Internet", status: false },
            { name: "TV", status: false }
        ]
    },
    {
        id: 4,
        name: "Ana",
        lastname: "Martínez",
        age: 28,
        services: [
            { name: "Internet", status: true },
            { name: "TV", status: false }
        ]
    },
    {
        id: 5,
        name: "Pedro",
        lastname: "Sánchez",
        age: 40,
        services: [
            { name: "Internet", status: false },
            { name: "TV", status: true }
        ]
    }
];

// Paso 2: Mostrar los objetos en la consola
clientes.forEach(cliente => {
    console.log(`Cliente ID: ${cliente.id}`);
    console.log(`Nombre: ${cliente.name} ${cliente.lastname}`);
    console.log(`Edad: ${cliente.age}`);
    console.log("Servicios:");
    cliente.services.forEach(service => {
        console.log(`  Servicio: ${service.name}`);
        console.log(`  Estado: ${service.status ? "Activo" : "Inactivo"}`);
    });
    console.log("\n");
});
