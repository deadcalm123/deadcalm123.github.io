function cls() {
    console.clear();
}

$(function () {
    var loading = false;
    Particles.init({
        selector: '.background',
        color: ['#DA0463', '#404B69', '#DBEDF3'],
        connectParticles: true,
        maxParticles: 150
    });

    function load() {
        loading = true;
        var gallery = $('.gallery');
        var gallery1 = gallery.get(0);
        var gallery2 = gallery.get(1);
        var gallery3 = gallery.get(2);
        var gallery4 = gallery.get(3);

        for (var i = 1; i < 17; i++) {
            var gallery1Height = [gallery1.scrollHeight, gallery2.scrollHeight, gallery3.scrollHeight, gallery4.scrollHeight];

            if (gallery1.scrollHeight == 0 && gallery2.scrollHeight == 0 && gallery3.scrollHeight == 0 && gallery4.scrollHeight == 0) {
                $(gallery1).append("<div class='gallery-item'>" +
                    "<img src='./img/" + i + ".jpg' style='width: 100%;'><span>aaaa</span></div>");
                i++;
                $(gallery2).append("<div class='gallery-item'>" +
                    "<img src='./img/" + i + ".jpg' style='width: 100%;'><span>aaaa</span></div>");
                i++;
                $(gallery3).append("<div class='gallery-item'>" +
                    "<img src='./img/" + i + ".jpg' style='width: 100%;'><span>aaaa</span></div>");
                i++;
                $(gallery4).append("<div class='gallery-item'>" +
                    "<img src='./img/" + i + ".jpg' style='width: 100%;'><span>aaaa</span></div>");
            } else {
                var min = Math.min.apply(Math, gallery1Height);
                var index = gallery1Height.indexOf(min);
                $(gallery[index]).append("<div class='gallery-item'>" +
                    "<img src='./img/" + i + ".jpg' style='width: 100%;'><span>aaaa</span></div>");
            }
        }

        loading = false;
    }

    load();

    $(".main").scroll(function () {
        var $this = $(this),
            viewH = $this.height(),//可见高度
            contentH = $this.get(0).scrollHeight,//内容高度
            scrollTop = $this.scrollTop();//滚动高度

        if (scrollTop / (contentH - viewH) >= 0.55) { //到达底部100px时,加载新内容
            if (!loading && $('.gallery-item').length < 500) {
                load();
                console.log("加载中")
            }
        }
    });
});
