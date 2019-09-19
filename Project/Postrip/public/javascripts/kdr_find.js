$(document).ready(function () {

    $('#find_find_btn').click(function(){
        const find_id_email = $('#find_id_email').val();
        const find_id_name = $('#find_id_name').val();

        const find_pw_email = $('#find_pw_email').val();
        const find_pw_id = $('#find_pw_id').val();

        const params = {
            find_id_email,
            find_id_name,
            find_pw_email,
            find_pw_id
        };

        $.post('find_idpw_db', params, function() {
            window.location.reload();
        });
    });

    $('#find_close_btn').click(function(){
        $.post('find_session', function() {
            window.close();
        });
    });
});