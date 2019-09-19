/* 이벤트 준비 */
$(document).ready(function() {
    /* join_Content 의 전체 너비의 절반 값을 저장 */
    var join_marginLeft = $(".join_Content").outerWidth() / 2;
    
    /* join_Content 의 전체 높이의 절반 값을 저장 */
    var join_marginTop = $(".join_Content").outerHeight() / 2;
    
    /* main_join_btn 클릭시 */
    $("#main_join_btn").click(function() {
    
        /* join 화면을 천천히 나타남 */
        $("#join").fadeIn("slow");
    
        /* join_Content 의 margin을 지정 */
        $(".join_Content").css({ "margin-top": -join_marginTop, "margin-left": -join_marginLeft });
    
        /* join_business_num 에 포커스를 줌 */
        $("#join_business_num").focus();
    });
    
    /* close 클릭시 */
    $("#close").click(function() {
    
        try {
            /* 각 값을 공백으로 만듬 */
            $('#join_business_num').val() = "";
            $('#join_id').val() = "";
            $('#join_pw').val() = "";
    
            /* 처리과정에서 오류 발생시 */
        } catch (err) {
    
            /* 현재 화면을 새로고침 */
            window.location.reload(true);
        }
    
        /* join를 화면에서 사라지게 함 */
        $("#join").fadeOut("slow");
    });
    
    });