$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Сообщения отправленно!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
    $('[name="Phone"]').mask("+7(999) 999-9999");
});
