let clovek = {
    vek: 0,
    pohlavie: '',
    pridajRok: function () {
        this.vek++;
    },
    odpocitajRok: function (pocet = 1) {
        this.vek = this.vek - pocet;
    }
}


(function () {
    let ludia = [];
    for (let i = 0; i <= 1000; i++) {
        let cl = {...clovek}

        cl.vek = i;

        cl.pohlavie = (i < 50) ? 'Muz' : 'Zena';

        if (i === 200)
            cl.odpocitajRok(100);

        if (cl.pohlavie === 'Zena')
            cl.pridajRok();

        ludia[i] = cl;
    }

    console.log(ludia);
}());


(function () {
    let ludia = [];
    for (let i = 0; i <= 1000; i++) {
        let cl = {...clovek}

        cl.vek = i;

        cl.pohlavie = (i < 50) ? 'Muz' : 'Zena';

        if (cl.pohlavie === 'Zena')
            cl.pridajRok();

        ludia[i] = cl;
    }

    console.log(ludia);
}());


(function () {
    let ludia = [];
    for (let i = 0; i <= 1000; i++) {
        let cl = {...clovek}

        cl.vek = i;

        cl.pohlavie = (i < 50) ? 'Zena' : 'Osol';

        if (cl.pohlavie === 'Zena')
            cl.pridajRok();

        ludia[i] = cl;
    }

    console.log(ludia);
}());


let login = {
    meno: '',
    heslo: '',
    init() {
    ....
    },
    over: function (meno, heslo) {

    }
}


let r = {
    ..
    ..
    ..
    ..

    vek: 0,
    pridaj: function () {
        ..
        .a
            .toExponential(

            )
        let a = 10;
        let v = 'assfsrfs';
        this.vek++;
        return this;
    },

    uber: function () {
        this.vek--;
        return this;
    },

    reset: function () {
        this.vek = 0;
    },

    getVek: function () {
        return this.vek;
    }
}

