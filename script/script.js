$(function () {

    /* GNB 서브메뉴 풀다운 */
    $("#gnb a").mouseover(function(){
        $("#gnb ul.subMenu").stop().fadeIn(400);
        $("#subBG").stop().fadeIn(400);
    });
    $("#gnb a").mouseout(function(){
        $("#gnb ul.subMenu").stop().fadeOut(600);
        $("#subBG").stop().fadeOut(600);
    });
    /* GNB 서브메뉴 풀다운 */


    /* 슬라이드쇼 BTT */
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate({
                "margin-top": "-300px"
            },
            1000,
            function() {
            $("#slide a:first-child").insertAfter("#slide a:last-child");
            $("#shuttleFrame").css({"margin-top":"0"});
        }

        );
    }
    /* 슬라이드쇼 BTT */


    /* 레이어 팝업 */
    $("#contents span.noticePoint").click(function () {
        $("#layerBG").css({
            "display": "block"
        });
    });
    $("#layerBtn #closeBtn").click(function () {
        $("#layerBG").css({
            "display": "none"
        });
    });
    /* 레이어 팝업 */

});
