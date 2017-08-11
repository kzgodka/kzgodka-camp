$(document).foundation();


    // (function () {
    //     const button = document.querySelector("button[type='submit']");
    //     const loginInput = document.querySelector(".password");
    //
    //     button.addEventListener("click", function () {
    //         event.preventDefault();
    //
    //         if (loginInput.value !== "") {
    //
    //             window.location.href = "dashboard.html";
    //         }
    //         else {
    //             document.getElementById("password").className += " error";
    //         }
    //
    //         console.log(loginInput.value);
    //
    //     });
    //
    // })();

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
            console.log(response.responseText);
        },
        success: function(response) {
            console.log(response);
        }
    });
}

$('#cancel').click(function(e) {
    e.preventDefault();
    $("#username").removeClass("hide");
    $("#user-active").addClass("hide");
});





