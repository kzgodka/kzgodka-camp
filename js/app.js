// Brak IIFE
// Proponuję wydzilić kod odpowiedzialny za login do oddzielnego pliku.
// Wszystkie zdarzenia na elementach powinny byc zawarte w funkcji

$(document).foundation();


$(document).ready(function () {
   $('#submit').click(function(e){
       e.preventDefault();
       call();
   });
});



function call() {
    var input = $("#password").val();
    var userinput = $("#username").val();

    $.ajax({
        type: "post",
        data: {
            login: userinput,
            password: input
        },
        url: "https://efigence-camp.herokuapp.com/api/login",
        error: function(response) {
            // Nigdy nie stosujemy jednoliterowych nazw zmiennych. Od tego jest uglifier.
            // Czemu uzywasz jQuery, skoro mozna uzyc natywnego parsera? JSON.parse().
            // Polecam tez: http://youmightnotneedjquery.com/
            var r = jQuery.parseJSON(response.responseText);
            $('.wrongCredentials').html(r.message);
            $('.wrongCredentials').removeClass("hide");
        },
        success: function(response) {
            // Czy tutaj nie powinno byc takze usuwania komunikatu bledu?
            window.location.href = "dashboard.html";
        }
    });
}

$('#cancel').click(function(e) {
    e.preventDefault();
    $("#username").removeClass("hide");
    $("#user-active").addClass("hide");
});

// Po co tyle nowych linii na dole? :)
