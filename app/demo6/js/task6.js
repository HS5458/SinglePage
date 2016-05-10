/**
 * Created by HaiSheng5458 on 2015/11/11.
 */
function playmusic() {
    var mp = document.getElementById("mymusic");
    if(mp.paused){
        mp.play()
    }else{
        mp.pause();
    }
}
