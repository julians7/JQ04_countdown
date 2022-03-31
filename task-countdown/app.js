


let countDown = (selector, timeDown, options = null) => {
    //kontola vstupov
    if (!selector || !timeDown) {
        return;
    }

    // jeden element, kontrola, ci output existuje ...if ...
    const outPut = document.querySelector(selector);
    if (!outPut) {
        return;
    }

    const wrap = document.createElement("div");
    wrap.classList.add("countdown");
    outPut.appendChild(wrap);

    if (options && options.backgroundColor) {
        wrap.style.background = options.backgroundColor;
    }

    /*

    //node list (pole) - musim zistit ci nie je prazdne pole, az potom mozem 
    let outPut2 = (document.querySelectorAll(selector)[0]);
    // 
    let outPut2 = (document.querySelectorAll(selector).forEach(function (o) {
        o.
        })


*/

    //vytvorenie bodky
    let separatorSpan = document.createElement("span");
    separatorSpan.classList.add("separator");
    separatorSpan.innerText = ".";

    //created :
    let dividerSpan = document.createElement("span");
    dividerSpan.classList.add("divider");
    dividerSpan.innerText = ":";

    //DOM for DAYS
    const daySpan = document.createElement("span");
    daySpan.classList.add("set-days");
    daySpan.classList.add("digit");
    wrap.appendChild(daySpan);
    wrap.appendChild(separatorSpan);


    const hourSpan = document.createElement("span");
    hourSpan.classList.add("set-hours");
    hourSpan.classList.add("digit");
    wrap.appendChild(hourSpan);
    //outPut.appendChild(separatorSpan.cloneNode(true));
    wrap.appendChild(dividerSpan);

    const minSpan = document.createElement("span");
    minSpan.classList.add("set-min");
    minSpan.classList.add("digit");
    wrap.appendChild(minSpan);
    //outPut.appendChild(separatorSpan.cloneNode(true));
    wrap.appendChild(dividerSpan.cloneNode(true));

    const secSpan = document.createElement("span");
    secSpan.classList.add("set-sec");
    secSpan.classList.add("digit");
    wrap.appendChild(secSpan);


    if (options && options.text) {
        const textDiv = document.createElement("div");
        textDiv.innerText = options.text;
        wrap.appendChild(textDiv);
    }

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }


    //    const daySpan = document.createElement("span").className += " set-days";



    const setupDate = new Date(timeDown).getTime();

    let flashing = true;

    let time = setInterval(() => {


        //today date
        let now = new Date().getTime();

        //
        const calculated = setupDate - now;


        let days = Math.floor(calculated / (1000 * 60 * 60 * 24));
        let hours = Math.floor((calculated % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min = Math.floor((calculated % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((calculated % (1000 * 60)) / 1000);


        daySpan.innerText = pad(days, 2);
        hourSpan.innerText = pad(hours, 2);
        minSpan.innerText = pad(min, 2);
        secSpan.innerText = pad(sec, 2);



        //console.log(a)
        if (calculated < 0) {
            clearInterval(time);
            wrap.innerHTML = "Expired";
            wrap.classList.add("expired");
        }

        wrap.querySelectorAll("span.divider").forEach(divider => {
            divider.innerText = flashing === true ? ":" : " ";
        });


        flashing = !flashing;


    }, 1000);


}