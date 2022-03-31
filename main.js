import $ from 'jquery';
import cd from "./modules/countdown/countdown";
import cd2 from "./modules/countdown/countdown";
import axios from 'axios';




$(document).ready(function () {
    let el = document.getElementById('countdown');
    let el2 = document.getElementById('countdown2');
    let elStart = document.getElementById('cd-start');
    let elReset = document.getElementById('cd-reset');
    let elStop = document.getElementById('cd-stop');

    cd.init(el, 1000, 'MMMM Do YYYY, h:mm:ss a');
    cd2.init(el2, 1000, 'h:mm:ss a');

    let ax = axios.get('https://api.openweathermap.org/data/2.5/weather?q=Poprad,sk&appid=ed938096f01cc28bdcc146f44dcbe646');

    setInterval(refresh, 10000);

    function refresh() {
        ax.then(response => {
            console.log(response.data.main.temp);
            let div = document.getElementById('temp');
            let time = document.getElementById('date');
            div.innerText = response.data.main.temp;
            time.innerText = (new Date()).toISOString();
        });
    }



    elStart.addEventListener('click', cd.start);
    elReset.addEventListener('click', cd.reset);
    elStop.addEventListener('click', cd.stop);

});








