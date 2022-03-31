import jQuery from "jquery";
const $ = jQuery;

let Countdown = {
    init: (elSelector, options = {}) {
        // tu by som mal logiku
        //#julius, {}
        // na #julius by vytvorila countdown
        if (!elSelector) return;

        document.querySelector(elSelector).createElement("p").innerHtml("sdkfjsdkofj<strin>")

        $(elSelector).add("p").text("hahah");



        $(elSelector)
            .append("div")
            .append("div")
            .append("div")

        setInterval(() => {

        }, 1000)

        //$("elSelector")

    }
}

// Countdown.init(elSelector, options)