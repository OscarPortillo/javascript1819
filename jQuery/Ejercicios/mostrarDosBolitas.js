$(document).ready(function () {
    $(function () {
        $("#espacio").on("click", ".bolica", efectoBolitas);
    });
});

function efectoBolitas() {
    
    var bolica = $(".bolica")
    var bolicaRoja = $(".bolicaroja")
    
    for (i of bolica) {
        i.onclick = function () {
            console.log($(this))
            $(this).parent().append('<div class="bolica"></bolica>')
            $(this).hide(1000)
        }
    }
    for (m of bolicaRoja) {
        m.onclick = function () {
            console.log($(this).append())
            $(this).parent().append('<div class="bolica bolicaroja"></bolica>')
            $(this).parent().append('<div class="bolica bolicaroja"></bolica>')
            $(this).hide(1000)
        }
    }

}
