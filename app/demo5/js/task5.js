/**
 * Created by HaiSheng5458 on 2015/11/9.
 */
$(document).ready(function(){
    var flag = 0;
   $("#btn-menu").click(function(){
       if(flag == 0){
           $("#web").animate({marginLeft:"80%"});
           flag = 1;
       }else{
           $("#web").animate({marginLeft:0});
           flag = 0;
       }
   });
});