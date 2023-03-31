// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
  #nombre;
  #edad;
  #dni;
  #anionacimiento;
  constructor(nombre, edad, dni, sexo, peso, altura, anionacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.#anionacimiento = anionacimiento;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(newNombre) {
    this.#nombre = newNombre;
  }
  get edad() {
    return this.#edad;
  }

  set edad(newEdad) {
    this.#edad = newEdad;
  }

  get dni() {
    return this.#dni;
  }

  set dni(newDni) {
    this.#dni = newDni;
  }

  getSexo() {
    return this.sexo;
  }

  setSexo(newSexo) {
    this.sexo = newSexo;
  }

  getPeso() {
    return this.peso;
  }

  setPeso(newPeso) {
    if (isNaN(newPeso)) {
      alert("Debe Ingresar un numero");
    }
    this.peso = newPeso;
  }

  getAltura() {
    return this.altura;
  }

  setAltura(newAltura) {
    if (isNaN(newAltura)) {
      alert("Debe ingresar un numero");
    }
    this.altura = newAltura;
  }

  get anioNacimiento() {
    return this.#anionacimiento;
  }

  set anioNacimiento(newAnioNacimiento) {
    this.#anionacimiento = newAnioNacimiento;
  }

  mostrarGeneracion() {
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      return `Usted pertenece a la Generación Silenciosa y su rasgo característico es la Austeridad`;
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      return `Usted pertenece a la Generación Baby Boom y su rasgo característico es la Ambición`;
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      return `Usted pertenece a la Generación X y su rasgo característico es la Obsesión por el éxito`;
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      return `Usted pertenece a la Generación Y (Millennials) y su rasgo característico es la Frustración`;
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      return `Usted pertenece a la Generación Z y su rasgo característico es la Irreverencia`;
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert("Es mayor de Edad");
    } else {
      alert("No es mayor de Edad");
    }
  }
  mostrarDatos() {
    alert(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Altura: ${this.altura}
        Año de Nacimiento: ${this.anioNacimiento}`);
    // document.write(`<br>Edad: ${this.edad}`)
    // document.write(`<br>DNI: ${this.dni}`)
    // document.write(`<br>Sexo: ${this.sexo}`)
    // document.write(`<br>Peso: ${this.peso} kg`)
    // document.write(`<br>Altura: ${this.altura} m`)
    // document.write(`<br>Año de Nacimiento: ${this.anionacimiento}<br>`)
  }
}

let formulario = document.getElementById("formulario");
let generacion = document.getElementById("botonGeneracion");
let mayoredad = document.getElementById("mayoredad");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.querySelectorAll("input");
  let nombre = input[0].value;
  let edad = input[1].value;
  let dni = input[2].value;
  let sexo = input[3].value;
  let peso = input[4].value;
  let altura = input[5].value;
  let anionacimiento = input[6].value;
  let persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anionacimiento
  );
  console.log(persona);
  persona.mostrarDatos();

  generacion.addEventListener("click", () =>
    alert(persona.mostrarGeneracion())
  );

  mayoredad.addEventListener("click", () => persona.esMayorDeEdad());
});
