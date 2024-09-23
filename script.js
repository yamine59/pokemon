class pokemon {
    constructor(nom, hp, attaque, defense,sort) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = attaque;
        this.defense = defense;
        this.sort = sort
    }
    attaquer(cible) {
        const degats = this.attaque - cible.defense
        cible.hp -= degats;
    }

    utiliserSort(cible) {
        this.sort(cible)
        console.log(`${this.nom} a lance un sort sur ${cible.nom}`);

    }

    afficherStats() {
        console.log(`le pokemon ${this.nom} a ${this.hp} hp, ${this.attaque} de force, ${this.defense} de defense ,`)
    }

    estKO() {
        if (this.hp == 0 || this.hp <= 0) {
            return true
        } return false
    }
}

class dresseur {
    constructor(nom) {
        this.nom = nom
        this.pokemons = [];
        this.inventaire = [];

    }
    ajouterPokemon(pokemon) {
        return this.pokemons.push(pokemon)
    }
    choisirPokemon(x) {


        return this.pokemons.splice(x, 1) /// pas sur que ce soit la bonne chose a faire
    }

    ajouterObjet(Objet) {
        return this.inventaire.push(Objet)
    }

    utiliserObjet(cible, Objet) {
        this.effet(cible)
        this.inventaire.splice(0, Objet)

    }

    TousPokemonKO() {

        // this.pokemons.every(pokemon =>pokemon.estKO())  meilleur tech
        let nko = 0
        console.log(this.pokemons);

        this.pokemons.forEach(pokemon => {
            console.log(pokemon.estKO());

            if (pokemon.estKO() == true) {

                nko = nko + 1
            }
        });
        console.log(nko);

        if (nko == this.pokemons.length) {
            console.log("touts les pokemon sont ko");

        }

    }
}

class Objet {
    constructor(nom, effet ){
        this.nom = nom
        this.effet = effet
    }

    utiliser(cible){
        this.effet(cible)
    }
}

const y = new pokemon("pikachu", 100, 20, 10, )
const ye = new pokemon("bulbizarre", 100, 20, 10, "est")
y.afficherStats()
y.estKO()
console.log(y.estKO());

const yamine = new dresseur("yamine")
const sacha = new dresseur("sacha")

yamine.ajouterPokemon(y)
yamine.ajouterPokemon(ye)
console.log(yamine);



yamine.TousPokemonKO()



