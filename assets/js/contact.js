$(document).ready(function () {
    var form = $('form');
    
        // Success function
    function done_func(response) {
        form.each(function(key, val) {
            val.reset();
        });
        notie.alert({
            type: 1,
            text: 'Ваша заявка успешно отправлена'
        });
    }

    // fail function
    function fail_func(data) {
         notie.alert({
            type: 3,
            text: 'С отправкой заявки возникли проблемы, попробуйте позже'
        });
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: form_data
        })
    .done(done_func)
    .fail(fail_func);
});
});