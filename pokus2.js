class Clovek {
    #vek = 0;
    #pohlavie = '';

    nastavVek(vek) {
        this.#vek = vek;
    }

    getVek() {
        return this.#vek;
    }

    displayVek() {
        console.log(this.#vek);
    }
}

class Osoba extends Clovek {
    #fullname;

    getVek() {
        return null;
    }

    setFulname(fullname) {
        this.#fullname = fullname;
    }

    pokus() {
    }
}

let julius;

julius = new Osoba();
julius.nastavVek(35);
julius.displayVek();
julius.setFulname('Julius hyben');


let a = [1, 2, 3];

let b = [4, 5, 6];