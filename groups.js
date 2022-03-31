import $ from 'jquery';
export default {
    showMessage: function(el, msg) {

        $(el).text(msg);
        $(el).attr('class', 'red');


    }
}