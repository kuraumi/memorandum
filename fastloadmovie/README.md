# FastLoadMovie

Youtube動画遅延を防止するために作成。  
Youtubeと書いてますが他動画埋め込みサービスでもカスタマイズすれば使えると思います。  
notjQueryで記載しています。

## 内容について


### HTML5

```html
<div class="only-sp" data-youtube="https://www.youtube.com/embed/SX_ViT4Ra7k?autoplay=1&rel=0&showinfo=0" onclick="fastLoadYoutube('photos',this)">
    <span class="ico-movie">
        <img class="img-youtube" id="photos" src="https://picsum.photos/560/315" alt="">
    </span>
</div>
```

URLをJavaScriptで読み込む際に必要な`data-youtube`属性を付与。

### JavaScript

```javascript
    const thumbnail = document.getElementById(imageId);
    const imgWidth = thumbnail.width;
    const imgHeight = thumbnail.height;
```

デモではあまり生かされていませんが、クリックされた画像の大きさに合わせて動画も表示されるようにimgタグに対して`id="photos"`を指定。  
上記Javascriptではクリックしたときの画像の横幅・高さを取得しています。

```javascript
    if(window.matchMedia("(max-width: 768px)").matches){
        const reloadMovie = '<iframe width="'+ imgWidth +'" height="' + imgHeight + '" src=' + ele.getAttribute('data-youtube') + '" frameborder="0"></iframe>';
        ele.innerHTML = reloadMovie;
    } else {
        // 処理なし
    }
```

HTML5で読み込んでいた`data-youtube`をgetAttributeで値を返しURLを読み込む。  
`imgWidth`、`imgHeight`も使用してiframeを生成し、innerHTMLを実行させる。

## おまけ：Youtubeを別タブで飛ばす

```html
<a class="ico-movie only-pc" href="https://www.youtube.com/watch?v=SX_ViT4Ra7k" target="_blank">
    <div class="box-youtube"><img class="img-youtube" src="https://picsum.photos/560/315" alt=""></div>
</a>
```
余談ですがPCの時は`target="_blank"`で別タブにリンクを飛ばしています。

## 参考サイト
- [埋め込みyoutubeが想像以上に戦犯級だった件](https://myscreate.com/youtube-defer/)