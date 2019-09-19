$(document).ready(function () {

    $('#login_form').submit(function () {
        event.preventDefault();

        const login_id = $(this).find('[name=login_id]').val();
        const login_pw = $(this).find('[name=login_pw]').val();

        const params = {
            login_id,
            login_pw
        };

        $.post('/login_db', params, function (data, state) {
            alert(data);
            let DB = JSON.parse(data);
            location.replace('/mypage2');
        });
    });

    $('#find_btn').click(function(){
        window.open('/find_idpw', 'Find ID/PW', 'width= 370px; height= 580px; left= 800;');
    });

});