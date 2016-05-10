/**
 * Created by HaiSheng5458 on 2015/11/14.
 */
$(document).ready(function(){
    //菜单下方的白色条条
    $("#menu-list ul li").hover(function(){
        var dai = $("#menu-list ul li");
        var dai2 = $("#menu-list ul li div");
        var index = dai.index(this);
        dai2.eq(index).addClass("show");
        for(var i = 0;i < dai.length; i++){
            if(i != index){
                    dai.eq(i).find(".show").removeClass("show");
            }
        }
    });
    //图片轮转
    $("#photo .prev").click(function(){
        var replace = $("#photo-z img");
        var index = $("#photo-z .top-img").index();
        if(index == 0){
            index = replace.length - 1;
        }else{
            index--;
        }
        replace.eq(index).addClass("top-img").siblings().removeClass("top-img");
        $("#circle-index ul li").eq(index).addClass("circle-color").siblings().removeClass("circle-color");
    });
    $("#photo .next").click(function(){
        var replace = $("#photo-z img");
        var index = $("#photo-z .top-img").index();
        if(index == replace.length - 1){
            index = 0;
        }else{
            index++;
        }
        replace.eq(index).addClass("top-img").siblings().removeClass("top-img");
        $("#circle-index ul li").eq(index).addClass("circle-color").siblings().removeClass("circle-color");
    });
    //学员选择
    $("#good-study .g-study").click(function(){
        var replace = $("#good-study .g-study");
       var index =  replace.index(this);
        replace.eq(index).addClass("g-choose").siblings().removeClass("g-choose");
        $("#good-study .g-index li").eq(index).addClass("g-color").siblings().removeClass("g-color");
    });
    $("#good-study .g-index li").click(function(){
        var replace = $("#good-study .g-index li");
        var index = replace.index(this);
        replace.eq(index).addClass("g-color").siblings().removeClass("g-color");

    })
});