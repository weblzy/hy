/**
 * Created by hxsd on 2017/6/22.
 */
$(function(){
    //轮播图时间设置
    $('.carousel').carousel({
        interval: 3000
    });

    $(".fixed_icon").find("li").mouseover(function(){
        $(this).stop().animate({"right":0},300);

    });
    $(".fixed_icon").find("li").mouseout(function(){
        $(this).stop().animate({"right":-70},300);
    });

    //点击返回顶部
    $(window).scroll(function(){
        $(".backtop").click(function(){

            $("html,body").stop().animate({"scrollTop":0},1000);
        });
    });










});