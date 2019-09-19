$(document).ready(function () {
    //회원가입
    $('#joinReqID').click(function () {
        const email = $('#userEmail').val();
        const userPaswdd = $('#userPaswdd').val();
        const confirmPaswdd = $('#paswddConform').val();
        const name = $('#userName').val();
        const tel = $('#userTel').val();
        const gender=$(":input:radio[name=gender]:checked").val();

        const contact_params = {
            email,
            userPaswdd,
            name,
            tel,
            gender,
        };

        if (userPaswdd === confirmPaswdd) {
            $.post('/joinReq', contact_params, function (data, status) {
                const data_parse = JSON.parse(data);
                alert(data_parse.msg);
                location.href = "/"
                //window.location.reload('/');
            });

        } else if (userPaswdd != confirmPaswdd) {
            alert("입력하신 비밀번호가 일치하지 않습니다. 다시 입력 바랍니다.");
            window.location.reload(true);
        }
    });

    // 로그인
    $('#loginFormID').submit(function () {
        event.preventDefault();

        const id = $("input[name=userID]", document.loginForm).val();
        const paswdd = $("input[name=userPaswrd]", document.loginForm).val();

        const contact_params = {
            id,
            paswdd,
        };
        //alert(contact_params);

        if (id && paswdd) {
            $.post('/loginReq', contact_params, function (data, status) {
                const data_parse = JSON.parse(data);
                //alert(data_parse.msg);
                //alert(data_parse.confirm);
                if (data_parse.confirm) {
                    alert(data_parse.msg + '님 로그인하셨습니다.');

                    //const innerdata = "<h2>"+data_parse.msg+"님</h2><input id='logOut_btn' type='button' value='LogOut' >";
                    //$('#test').html(innerdata);

                    //alert(data_parse);
                    //event.preventDefault();
                    window, location.reload(true);
                } else {
                    alert(data_parse.msg);
                    $("input[name=userID]", document.loginForm).val("");
                    $("input[name=userPaswrd]", document.loginForm).val("");
                    //window,location.reload(true);
                    
                }
                //window.location.reload(true);
            });
        } else {
            alert('아이디와 비밀번호를 입력해주세요.');
            $("input[name=userID]", document.loginForm).val("");
            $("input[name=userPaswrd]", document.loginForm).val("");
        }
        event.preventDefault();
    });

    // 로그아웃

    $('#logOut_btn').click(function () {
        $.get("/logOutReq", function (data, status) {
            alert("로그아웃 되었습니다.");
            location.reload();
        });
        //event.preventDefault();
    });

    // 나의 정보 수정 보기
    $('#see_btn').click(function () {
        const tel= $("#see_paswd").val();
        const send_params = {
            tel
        };
        $.post("/info", send_params, function (data, status) {
            const parsed_data = JSON.parse(data);
            let printData = `<table border=1 style='background-color:white;text-align:center;font-weight: bold;width:100%;height:100%;'>`;
            for (key in parsed_data.msg) {
                printData += `<tr><td>${key}</td><td>${parsed_data.msg[key]}</td></tr>`;
            }
            printData += '</table>';
            $('#see_div').html(`${printData}`);
        });
    });

    // 탈퇴하기
    $('#delete_btn').click(function (res,req) {
        if(confirm("정말 탈퇴하시겠습니까?") ){
            const tel=$('#see_paswd').val();
            const del_params={
                tel
            };        
            $.post("/delete",del_params,function (data,status) {
                try{
                    alert(JSON.parse(data).msg);  
                    $('#userEmail').val()="";   
                }catch(err){
                    location.href = '/';
                }   
                            
            });      
        }else{
            $('#userEmail').val()="";   
        }  
    });


    // 사용자 정보 조회
    $('#find_payinfo').submit(function () {
        event.preventDefault();
        
        const find_tel = $("input[name=find_tel]", document.find_payinfoForm).val();

        const params = {
            find_tel
        };
        
        $.post("/healthinfo", params, function (data, status) {
            const parsed_data = JSON.parse(data);
            alert(parsed_data.msg2);
            console.log(parsed_data.msg2);
            let printData = `<div class="div_table"><div class="div_inlineblock">이메일</div><div class="div_inlineblock">이름</div><div class="div_inlineblock">성별</div><div class="div_inlineblock">전화번호</div></div>`
            printData += `<div class="div_table"><div class="div_inlineblock">${parsed_data.msg.이메일}</div><div class="div_inlineblock">${parsed_data.msg.이름}</div><div class="div_inlineblock">${parsed_data.msg.성별}</div><div class="div_inlineblock">${parsed_data.msg.전화번호}</div></div>`;
            /* for (key in parsed_data.msg || key in parsed_data.msg2) {
                printData += `<tr><td>${key}</td><td>${parsed_data.msg[key]}</td><td>${key}</td><td>${parsed_data.msg2[key]}</td></tr>`;
            }; */
            printData += `<table class="div_table"><th class="th_set">진료날짜</th><th class="th_set">진료기록</th>`;
            for (key in parsed_data.msg2) {
                if(key%2 == 0) {
                    printData += `<tr><td class="td_set">${parsed_data.msg2[key]}</td>`;
                } else {
                    printData += `<td class="td_set">${parsed_data.msg2[key]}</td></tr>`;
                }
            }
            printData += `</table>`;

            $('#table_div').html(`${printData}`);
        });
    });

    // 관리자 권한&& 수정가능
    $('#admin_btn').click(function () {
        const admin_tel = $("#admin_tel").val();
        const send_params = {
            admin_tel
        };
        $.post("/admininfo", send_params, function (data, status) {
            const parsed_data = JSON.parse(data);
            let printData = `<table border=1 style='background-color:white;text-align:center;font-weight: bold;width:100%;height:100%;'>`;
            for (key in parsed_data.msg) {
                printData += `<tr><td>${key}</td><td><input value='${parsed_data.msg[key]}' disabled></td></tr>`
            }
            // printDate += `<tr><td><textarea /></td></tr>`
            printData += `<tr><td>진료 기록</td><td><textarea rows="5" cols="40" name="disease" id="disease"/></td></tr></table><hr>
            <input action="action" type="button" id="save_btn" value="등록"/>`;
            console.log("save~!!");
            $('#table_div').html(`${printData}`);
        });
    });

    // 질병 등록하기 insert
    $(document).on('click', '#save_btn', function () {
        const disease = $("#disease").val();
        const tel = $("#admin_tel").val();

        const save_params = {
            disease,
            tel,
        };

        $.post("/adminReq", save_params, function (data, status) {
            console.log(data, status);
            alert("등록완료");
        })
    })
});