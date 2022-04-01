/**
 * @author Carine Casa Grande <carine.casagrande@hayamax.com.br>
 */

$(document).ready(function () {
    $(document).on("click", "#btn-toggle-mobile-menu", function () {
        $("#navbar-menu-mobile-links").toggle('slow');
    });
});