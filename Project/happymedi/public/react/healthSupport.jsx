class InfoHealth extends React.Component {
    render() {
        //console.log(this.state.count)
        const title_h2 = {
            marginBottom: 30,
            textAlign: "center",
            paddingTop: 76,
        }

        const label = {
            marginRight: 15,
            fontSize: 20,
            color: "#666",
            verticalAlign: "middle",
        }

        const select = {
            height: 40,
            padding: "5px 17px 5px 18px",
            border: "1px solid #e0e0e0",
            fontSize: 17,
            color: "#999",
            background: "#fff",
            borderRadius: 5,
            marginRight: 10,
        }

        const ul = {
            width: "100%",
            margin: "auto",
            display: "table",
            // width: "100%",
            /* tableLayout: "fixed", */
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: 0,
            marginInlineEnd: 0,
            paddingInlineStart: 40,
        }

        const h2 = {
            textAlign: "center",
            marginTop: -2,
            fontFamily: "NotoSans-Regular",
            fontSize: 30,
            lineHeight: 1,
        }

        const p = {
            marginTop: 8,
            fontSize: 14,
            color: "#bbb",
            textAlign: "center",
        }
        const divForm = {
            textAlign: "center",
        }

        const styleForm = {
            width: "100%",
            marginBottom: 30,
        }

        const li = {
            display: "table-Cell",
            float: "none",
            textAlign: "center",
            position: "relative",
        }

        const a = {
            //height: 100,
            position: "relative",
            display: "block",
            fontSize: 20,
            color: "#2f76be",
            textDecoration: "none",
        }

        const inputSearch = {
            height: 40,
            padding: "0 15px 0 18px",
            border: "1px solid #e0e0e0",
            fontSize: 17,
            color: "#999",
            width: 320,
            marginRight: 10,
        }

        const list = {
            arginTop: "50px !important",
        }

        const box_search_div = {
            position: "relative",
            marginBottom: 50,
            padding: "24px 0",
            border: "1px solid #e0e0e0",
            textAlign: "center",
            backgroundColor: "#f8f8f8",
        }

        const box_search = {
            paddingTop: 76,
        }

        const searchBtn = {
            width: 60,
            height: 40,
            marginLeft: 3,
            padding: "0 10px",
            verticalAlign: "top",
            color: "#fff",
            borderColor: "#3284b6",
            backgroundColor: "#3284b6",
            fontSize: "medium",
        }

        const bo = {
            display: "inline-block",
            textAlign: "left !important",
        }



        const display_table = {
            fontSize: 12,
            textAlign: "center",
        }

        const li_div = {
            width: "20%",
            paddingRight: 35,
            marginBottom: 30,
        }

        const li_search = {
            display: "inline-block",
            verticalAlign: "middle",
            listStyle: "none",
        }

        const li_search_ment = {

        }

        const li_chosung = {
            float: "left",
            marginLeft: 6,
        }

        const li_a = {
            display: "block",
            height: 46,
            fontSize: 16,
            color: "#666",
        }

        const tablist_ul = {
            width: "100%",
            display: "table",
        }

        const tablist_li = {
            border: "1px solid #e0e0e0",
            backgroundColor: "#f0f0f0",
            display: "table-Cell",
            float: "none",
            textAlign: "center",
            position: "relative",
            height: 80,
        }

        const chosung_span = {
            marginRight: 15,
            fontSize: 20,
            color: "#666",
            verticalAlign: "middle",
        }

        const chosung_a = {
            display: "inline - block",
            width: 40,
            height: 40,
            border: "1px solid #e0e0e0",
            background: "#fff",
            fontSize: 17,
            color: "#999",
            textAlign: "center",
            textDecoration: "none",
        }

        

        return (
            <div style={divForm} >
                <div style={title_h2}>
                    <h2 style={h2} >건강정보</h2>
                    <p style={p}> 건강상식, 질병에 관한 정확한 정보를 알려드립니다.</p>
                </div>
                <div>
                    <ul style={ul} >
                        <li style={li} ><a style={a} href="#" >질병정보</a></li>
                        <li style={li} ><a style={a} href="#" >검사정보</a></li>
                        <li style={li} ><a style={a} href="#" >복약정보</a></li>
                        <li style={li} ><a style={a} href="#" >영양정보</a></li>
                    </ul>
                    <selection>
                        <div style={box_search}>
                            <div style={box_search_div}>
                                <div style={bo}>
                                    <form style={styleForm}>
                                        <label style={label}>질병 검색</label>
                                        <select style={select} name="sKey">
                                            <option value="t" >제목</option>
                                            <option value="c" >내용</option>
                                        </select>
                                        <input style={inputSearch} placeholder="검색어를 입력하세요."></input>
                                        <button style={searchBtn}><i>검색</i></button>

                                    </form>
                                    {/* <div >
                                <span style={chosung_span}>초성 검색</span>
                                <ul style={li_search} >
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㄱ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㄴ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㄷ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㄹ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅁ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅂ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅅ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅇ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅈ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅊ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅋ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅌ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅍ</a></li>
                                    <li style={li_chosung} ><a style={chosung_a} href="#" >ㅎ</a></li>
                                </ul>
                            </div> */}
                                    <div >
                                        <ul >
                                            <li>본 질환정보는 백병원 의료진이 제공하는 건강정보로서, 이를 무단으로 배포하는 경우 법적제재를 받을 수 있습니다.</li><br />
                                            <li>본 질환정보는 참고자료로 활용하실 수 있으나, 정확한 질병에 관한 정보는 직접 의료진과 상담하시기 바랍니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            {/* <ul role="tablist" style={tablist_ul}>
                            <li role="tab" style={tablist_li} ><a role="presentation" style={li_a}>ㄱ - ㄹ</a></li>
                            <li role="tab" style={tablist_li} ><a role="presentation" style={li_a}>ㅁ - ㅇ</a></li>
                            <li role="tab" style={tablist_li} ><a role="presentation" style={li_a}>ㅈ - ㅎ</a></li>
                        </ul>
                        <div>기역 니은 디귿</div>
                        <div>리을 미음 비읍</div>
                        <div>시옷 이응 지읒 치읓</div>
                        <div>키읔 티긑 피읖 히흫</div> */}
                        <a href="#">우울증</a>
                        {/* <div id="test">여기</div> */}
                        </div>
                    </selection>
                </div>
            </div >
        );
    }
}

ReactDOM.render(
    <InfoHealth />,
    document.getElementById('InfoHealth')
);