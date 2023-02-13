$(document).ready(function(){
    var slider=$(".bxslider").bxSlider({
        auto:true,
        mode:'horizontal',
        pagerCustom:'#bx_pager',/*우리가 만든거로적용*/
        autoHover:true,/*마우스올리면멈춤*/
    });
    $(document).on('click','.bx-pager,#bx_pager,.bx-prev,.bx-next,.main_img',function(){/*강사님이 추가로 넣은 코드, 클릭변경시 멈추는거 방지하려고 넣은것 */
        slider.startAuto();
    });

    //summer collection
    var slider=$(".bxslider_01").bxSlider({
        auto:true,
        mode:"horizontal",
        pager:true,
        pagerCustom:"#bx-pager1",
        autoHover:true,
        autoStart:true,
    });

    $(document).on('click','.bx-pager,#bx-pager1,.bx-prev,.bx-next,.s_banner_wrap',function(){
        slider.startAuto();/*클릭시*/
    });

    $(".h_icon>img").mouseenter(function(){
        $(this).stop().animate({bottom:"15px"},200);

    }).mouseleave(function(){
        $(this).stop().animate({bottom:"-30px"},200);
           
    });

    $(".h_icon>img").click(function(){
        $(this).attr({"src":"images/icon/heart_b.png"});
       
    });
});