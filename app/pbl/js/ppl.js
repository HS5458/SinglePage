<<<<<<< HEAD
window.onload = function(){
    img_location("container","box");
    var img_data = {
        "data":[
            {"src":"a.jpg"},
            {"src":"b.jpg"},
            {"src":"c.jpg"},
            {"src":"d.jpg"},
            {"src":"e.jpg"},
            {"src":"f.jpg"},
            {"src":"g.jpg"},
            {"src":"h.jpg"},
            {"src":"i.jpg"},
            {"src":"k.jpg"},
            {"src":"l.jpg"},
            {"src":"m.jpg"},
            {"src":"n.jpg"},
            {"src":"o.jpg"}
        ]
    };
    window.onscroll = function(){
        if( check_scroll("container","box") ){
            var dparent = document.getElementById("container");
            for(var i = 0; i < img_data.data.length ; i++){
                var ddiv = document.createElement("div");
                ddiv.className = "box";
                dparent.appendChild(ddiv);
                //
                var boximg = document.createElement("div");
                boximg.className = "box-img";
                ddiv.appendChild(boximg);
                //
                var img = document.createElement("img");
                img.src = "img/" + img_data.data[i].src;
                boximg.appendChild(img);
            }
            img_location("container","box");
        }
    };
};

function img_location(parent,content){
    var par = document.getElementById(parent);
    var content_arry = get_child_element(par,content);
    var num_width = get_width(par,content_arry);
    min_image_location(num_width,content_arry);
}
function get_child_element(parent,content){
    var content_arry = [];
    var all_arry = parent.getElementsByTagName("*");
    for(var i = 0;i < all_arry.length; i++){
        if(all_arry[i].className == content){
            content_arry.push(all_arry[i]);
        }
    }
    return content_arry;
}
function get_width(parent,content_arry){
    var img_width = content_arry[1].offsetWidth;
    var win_width = document.body.clientWidth;
    var num_width = Math.floor(win_width / img_width);

    parent.style.cssText = "width:" + (img_width+1) * num_width + "px";
    return num_width;
}
function min_image_location(num_width,content_arry){
    var box_height_arry = [];
    for(var i = 0; i < content_arry.length; i ++){
        if( i < num_width ){
            box_height_arry[i] = content_arry[i].offsetHeight;
        }else{
            var min_height = Math.min.apply(null,box_height_arry);
            var min_index = get_min_height_index(box_height_arry,min_height);
            content_arry[i].style.position = "absolute";
            content_arry[i].style.top = min_height + "px";
            content_arry[i].style.left = content_arry[min_index].offsetLeft + "px";
            box_height_arry[min_index] += content_arry[i].offsetHeight;
        }
    }
}
function get_min_height_index(box_height_arry,min_height){
    for(var i = 0; i< box_height_arry.length; i++){
        if(box_height_arry[i] == min_height)
            return i;
    }
}

function check_scroll(parent,content){
    var dparent = document.getElementById(parent);
    var dcontent = get_child_element(document.getElementById(parent),content);
    var last_content_height = dcontent[dcontent.length - 1].offsetTop; //获取最后一张图片距离浏览器顶部的高度
    var scroll_top = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条距离顶部的高高度
    var win_height = document.documentElement.clientHeight || document.body.clientHeight; //获取屏幕的高度
    if(last_content_height < scroll_top + win_height){
        return true;
    }
=======
window.onload = function(){
    img_location("container","box");
    var img_data = {
        "data":[
            {"src":"a.jpg"},
            {"src":"b.jpg"},
            {"src":"c.jpg"},
            {"src":"d.jpg"},
            {"src":"e.jpg"},
            {"src":"f.jpg"},
            {"src":"g.jpg"},
            {"src":"h.jpg"},
            {"src":"i.jpg"},
            {"src":"k.jpg"},
            {"src":"l.jpg"},
            {"src":"m.jpg"},
            {"src":"n.jpg"},
            {"src":"o.jpg"}
        ]
    };
    window.onscroll = function(){
        if( check_scroll("container","box") ){
            var dparent = document.getElementById("container");
            for(var i = 0; i < img_data.data.length ; i++){
                var ddiv = document.createElement("div");
                ddiv.className = "box";
                dparent.appendChild(ddiv);
                //
                var boximg = document.createElement("div");
                boximg.className = "box-img";
                ddiv.appendChild(boximg);
                //
                var img = document.createElement("img");
                img.src = "img/" + img_data.data[i].src;
                boximg.appendChild(img);
            }
            img_location("container","box");
        }
    };
};

function img_location(parent,content){
    var par = document.getElementById(parent);
    var content_arry = get_child_element(par,content);
    var num_width = get_width(par,content_arry);
    min_image_location(num_width,content_arry);
}
function get_child_element(parent,content){
    var content_arry = [];
    var all_arry = parent.getElementsByTagName("*");
    for(var i = 0;i < all_arry.length; i++){
        if(all_arry[i].className == content){
            content_arry.push(all_arry[i]);
        }
    }
    return content_arry;
}
function get_width(parent,content_arry){
    var img_width = content_arry[1].offsetWidth;
    var win_width = document.body.clientWidth;
    var num_width = Math.floor(win_width / img_width);

    parent.style.cssText = "width:" + (img_width+1) * num_width + "px";
    return num_width;
}
function min_image_location(num_width,content_arry){
    var box_height_arry = [];
    for(var i = 0; i < content_arry.length; i ++){
        if( i < num_width ){
            box_height_arry[i] = content_arry[i].offsetHeight;
        }else{
            var min_height = Math.min.apply(null,box_height_arry);
            var min_index = get_min_height_index(box_height_arry,min_height);
            content_arry[i].style.position = "absolute";
            content_arry[i].style.top = min_height + "px";
            content_arry[i].style.left = content_arry[min_index].offsetLeft + "px";
            box_height_arry[min_index] += content_arry[i].offsetHeight;
        }
    }
}
function get_min_height_index(box_height_arry,min_height){
    for(var i = 0; i< box_height_arry.length; i++){
        if(box_height_arry[i] == min_height)
            return i;
    }
}

function check_scroll(parent,content){
    var dparent = document.getElementById(parent);
    var dcontent = get_child_element(document.getElementById(parent),content);
    var last_content_height = dcontent[dcontent.length - 1].offsetTop; //获取最后一张图片距离浏览器顶部的高度
    var scroll_top = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条距离顶部的高高度
    var win_height = document.documentElement.clientHeight || document.body.clientHeight; //获取屏幕的高度
    if(last_content_height < scroll_top + win_height){
        return true;
    }
>>>>>>> 587db7152d33b92f72add19faf9d89d273c870dd
}