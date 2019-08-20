/**
 * youtubeを埋め込んだときサイト読み込みが遅延されるのを防止するための関数
 * @param {String} imageId サムネイルで使用する画像のid
 * @param {String} ele this
 */

function fastLoadYoutube(imageId, ele){
    const thumbnail = document.getElementById(imageId);
    const imgWidth = thumbnail.width;
    const imgHeight = thumbnail.height;
    
    if(window.matchMedia("(max-width: 768px)").matches){
        const reloadMovie = '<iframe width="'+ imgWidth +'" height="' + imgHeight + '" src=' + ele.getAttribute('data-youtube') + '" frameborder="0"></iframe>';
        ele.innerHTML = reloadMovie;
    } else {
        // 処理なし
    }
};