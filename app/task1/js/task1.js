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
        colorName="��ɫ";
    }else if(colorNum == 2){
        color = "blue";
        colorName = "��ɫ";
    }else{
        color = "green";
        colorName  = "��ɫ";
    }
    var elem = document.getElementById("fath").getElementsByTagName("div");
    elem[number].style.backgroundColor = color;
    number++;
    console.log("����"+  number +" ����� "+colorName);
}
setInterval("colorChange()",1000);