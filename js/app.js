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
            var r = jQuery.parseJSON(response.responseText);
            $('.wrongCredentials').html(r.message);
            $('.wrongCredentials').removeClass("hide");
        },
        success: function(response) {
            window.location.href = "dashboard.html";
        }
    });
}

$('#cancel').click(function(e) {
    e.preventDefault();
    $("#username").removeClass("hide");
    $("#user-active").addClass("hide");
});





