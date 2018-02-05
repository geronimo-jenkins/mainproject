/* global $ */
$('#submit-contact-form').click(function(ev){
    if ($('form')[0].checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/nazarko681@gmail.com", 
            method: "POST",
            data: {
                visitorName: $('#visitor-name').val(),
                visitorEmail: $('#visitor-email').val(),
                visitorInfo: $('#visitor-info').val()
            },
            dataType: "json"
        }).done(function() {
            $('form')[0].reset();
            $('#form-msg').html('<p>Thank you for contacting us!</p>')
        }).fail(function(){
            $('#form-msg').html('<p>Sorry! An error has occured!</p>')
        });
    }
});