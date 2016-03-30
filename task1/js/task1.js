/**
 * Created by HaiSheng5458 on 2015/11/26.
 */
function colorChange(){
    var number = Math.floor(Math.random()*9);
    var colorNum = Math.floor(Math.random()*3 + 1);
    var color = "Black";
    var colorName;
    if(colorNum == 1){
        color = "red";
        colorName="红色";
    }else if(colorNum == 2){
        color = "blue";
        colorName = "蓝色";
    }else{
        color = "green";
        colorName  = "绿色";
    }
    var elem = document.getElementById("fath").getElementsByTagName("div");
    elem[number].style.backgroundColor = color;
    number++;
    console.log("格子"+  number +" 变成了 "+colorName);
}
setInterval("colorChange()",1000);