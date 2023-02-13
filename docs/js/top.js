$(document).ready(function(){

    //햄버거버튼
    $(".ham1 span").text("");
   $(".sub_t").slideUp(0);
   //$(".nav_wrap_t").css("display","none");
   k=1
   ;
  $(".ham1").click(function(){
      $(this).addClass("active1");
    $(".nav_wrap_t:not(:animated)").animate({right:"0"});
    if( k%2 ==0 ){
        $(".ham1").removeClass("active1");
        $(".nav_wrap_t").stop().animate({right:"-50%"});
    }
    k++
    return false;
    });
     


    //메뉴
    $(".nav_t li").click(function(){
        $(".sub_t").stop().slideUp();
        $(".sub_t",this).stop().slideDown();
        return false;
    });

   //검색창
   $("#search").hide();
   $("#search2").hide();

   s=1;
   $(".search_b>a>img").click(function(){
    $("#search").show();
    $("#search2").show();
    if( s%2 ==0 ){
        $("#search").hide();
        $("#search2").hide();
    }
    s++
    return false;
   });

    //배경태그추가
    $(".nav_wrap").before("<div class='bg'></div>");

    $(".bg, .sub").hide();
    
    $(".nav_wrap>ul> li").mouseenter(function(){
        $(".bg, .sub",this).stop().slideDown("fast");
        $(".bg, .sub",this).css("background-color","#ffffff");
  
    }).mouseleave(function(){
        $(".bg, .sub").stop().slideUp("fast");
    });
    $(".bg").mouseover(function(){
        $(this).stop().show();//보이는상태유지
        $(".sub").stop().show();
    }).mouseout(function(){
        $(this).stop().slideUp();
        $(".sub").stop().slideUp();
    });
    

  



});//end
