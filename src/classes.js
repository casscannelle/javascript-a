// Reescrito para ficar mais simples

class Animal {

    constructor(especie, fala, come, dorme) {
    this.especie = especie;
    this.fala = fala;
    this.come = come;
    this.dorme = dorme;
    }
    }
    
    const cachorro = new Animal ("Cachorro", "Late", "Ração", "Dorme 12h");
    
    const gato = new Animal ("Gato", "Mia", "Leite", "Dorme 18h");
    
    console.log(cachorro)
    console.log(gato)