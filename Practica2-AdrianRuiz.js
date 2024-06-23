// Clase base Vehículo
class Vehiculo {
    constructor(marca, modelo, año, color, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.tipo = tipo;
    }

    descripcion() {
        return `${this.marca} ${this.modelo} del año ${this.año} de color ${this.color} tipo ${this.tipo}`;
    }

    arrancar() {
        return `El ${this.modelo} está arrancando`;
    }

    detener() {
        return `El ${this.modelo} se detuvo`;
    }
}

// Clase Carro que hereda de Vehículo
class Carro extends Vehiculo {
    constructor(marca, modelo, año, color, tipo) {
        super(marca, modelo, año, color, tipo);
    }

    tocarBocina() {
        return `El carro ${this.modelo} está tocando la bocina`;
    }
}

// Clase Moto que hereda de Vehículo
class Moto extends Vehiculo {
    constructor(marca, modelo, año, color, tipo) {
        super(marca, modelo, año, color);
        this.tipo = tipo;
    }

    acelerar() {
        return `La moto ${this.modelo} está acelerando`;
    }
}

// Crear 2 objetos de la clase Coche
const carro1 = new Carro("Porshe", "Tycan", 2022, "blanco", "deportivo");
const carro2 = new Carro("Toyota", "4Runner", 2021, "gris", "todo terreno");

// Crear 2 objetos de la clase Moto
const moto1 = new Moto("Suzuki", "Hayabusa", 1999, "rojo", "deportiva");
const moto2 = new Moto("Yamaha", "VX Cruiser", 2020, "gris", "cruiser");

// Mostrar descripciones y métodos
console.log(carro1.descripcion());
console.log(carro1.arrancar());
console.log(carro1.tocarBocina());

console.log(carro2.descripcion());
console.log(carro2.arrancar());
console.log(carro2.tocarBocina());

console.log(moto1.descripcion());
console.log(moto1.arrancar());
console.log(moto1.acelerar());

console.log(moto2.descripcion());
console.log(moto2.arrancar());
console.log(moto2.acelerar());