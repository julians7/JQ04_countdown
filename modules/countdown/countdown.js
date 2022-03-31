import $ from 'jquery';
import moment from 'moment';

let countdown = {
    datetime: null,
    seconds: 0,
    el: null,
    rene: null,
    speed: 0,
    started: false,
    format: '',

    /**
     * Inicializujem hodiny
     * @param el
     * @param speed
     */
    init: function (el, speed, format) {
        if (!el) {
            console.error('ERROR: Neexistuje element!');
            return; // nevykona sa co je dalej....
        }

        countdown.speed = speed;
        countdown.el = el;
        countdown.datetime = new Date();
        countdown.format = format;

        countdown.reset();
        countdown.render();
    },

    /**
     * Resetujem
     */
    reset: function () {
        countdown.seconds = 0;
    },

    /**
     * Tick - kazdu sekundu
     */
    tick: function () {
        countdown.seconds++;
        countdown.render();
    },

    /**
     * Vykresli (vyrenderuje) html alebo hocico co ide do DOM
     */
    render: function () {
        $(countdown.el).text(countdown.seconds + ' ' + moment(countdown.datetime).add(countdown.seconds, 'seconds').format(countdown.format));
    },

    /**
     * Spustia sa hodiny
     */
    start: function () {
        if (countdown.el === null) {
            console.error('Neinicializoval si hodiny, najpr musis inicializovat!');
            return;
        }


        if (countdown.started === false) {
            countdown.rene = setInterval(countdown.tick, countdown.speed);
            countdown.started = true;
        }
    },

    stop: function () {
        if (countdown.rene !== null) {
            clearInterval(countdown.rene);
            countdown.started = false;
        }

    }
};


export default countdown;