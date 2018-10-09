$(document).ready(function () {
        getProducts();
        getSummary();
        getHistory();
});

function getSummary() {
    $.ajax({
        method: "GET",
        url: "https://efigence-camp.herokuapp.com/api/data/summary",
        error: function(response) {

        },
        success: function(response) {
            console.log(response);
            $(".balance").html(response.content[0].balance+" PLN");
            $(".funds").html(response.content[0].funds+" PLN");
            $(".payments").html(response.content[0].payments+" PLN");
        }
    });
}



function getProducts() {
    $.ajax({
        method: "GET",
        url: "https://efigence-camp.herokuapp.com/api/data/products",
        error: function(response) {

        },
        success: function(response) {
            console.log(response)

            const productsContainer = document.querySelector(".product-list");


            // var icon;
            // switch(productData.type) {
            //     case "Wallet":
            //         icon = "icon-wallet";
            //         break;
            //         default:
            //             icon = "icon-default";
            //}

            for(var i = 0; i < response.content.length; i++) {

                const template = "<div class='product'>" +
                    "<h6>"+response.content[i].type+"</h6><span class='amount'>"+response.content[i].amount+"</span><span>"+response.content[i].currency+"</span></div>";

                productsContainer.insertAdjacentHTML("beforeend", template);
            }


        }
    });
}

function getHistory() {
    $.ajax({
        method: "GET",
        url: "https://efigence-camp.herokuapp.com/api/data/history",
        error: function(response) {

        },
        success: function(response) {
            console.log(response)

            const historyContainer = document.querySelector(".history-list");

            for(var i = 0; i < response.content.length; i++) {
                const historyTemplate = "<div class='history-pane'>"+
                                        "<span>"+response.content[i].date+"</span>" +
                                        "<span>"+response.content[i].description+"</span>" +
                                        "<span class='text-right'>"+response.content[i].amount+"</spanclass>" +
                                        "</div>";

                historyContainer.insertAdjacentHTML("beforeend", historyTemplate);
            }

        }
    });
}



