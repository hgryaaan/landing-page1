$(document).ready(function() {
    /*botão menu*/
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    /*botões home*/
    const $items = $('.home-item');
    let currentIndex = 0;

    function showItem(index) {
        if ($(window).width() <= 1048) {
            $items.hide(); 
            $items.eq(index).show();
        } else {
            $items.show(); 
        }
    }

    function checkWidth() {
        if ($(window).width() <= 1048) {
            showItem(currentIndex);
            $('.controls').show(); 
        } else {
            $('.controls').hide(); 
            $items.show(); 
        }
    }

    checkWidth();

    $('.fa-chevron-right').click(function() {
        if ($(window).width() <= 1048) {
            currentIndex = (currentIndex + 1) % $items.length; 
            showItem(currentIndex);
        }
    });

    $('.fa-chevron-left').click(function() {
        if ($(window).width() <= 1048) {
            currentIndex = (currentIndex - 1 + $items.length) % $items.length;
            showItem(currentIndex);
        }
    });

    $(window).resize(function() {
        checkWidth();
    });
    

    /*formulario*/
    document.getElementById("newsletterForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var emailInput = document.getElementById("emailInput").value;
        if (emailInput === "") {
            alert("Por favor, digite um e-mail.");
        } else {
            alert("E-mail cadastrado com sucesso!");
        }
    });    
});
