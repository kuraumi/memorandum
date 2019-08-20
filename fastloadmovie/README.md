# FastLoadMovie

Youtube動画遅延を防止するために作成。
Youtubeと書いてますが他動画埋め込みサービスでもカスタマイズすれば使えると思います。
notjQueryで記載しています。

## 内容

```html
<div class="only-sp" youtube="https://www.youtube.com/embed/SX_ViT4Ra7k?autoplay=1&rel=0&showinfo=0" onclick="fastLoadYoutube('photos',this)">
    <span class="ico-movie">
        <img class="img-youtube" id="photos" src="https://picsum.photos/560/315" alt="">
    </span>
</div>
```

URLを読み込ませるため、`youtube`属性を付与。  
デモではあまり生かされていませんが、クリックされた画像の大きさに合わせて動画も表示されるようにimgタグに対して`id="photos"`を指定。

## 参考サイト
- [埋め込みyoutubeが想像以上に戦犯級だった件](https://myscreate.com/youtube-defer/)