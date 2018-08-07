(function () {

    function Page(url) {
        var idString = location.search.replace("?","");

        var temp = idString.split("&");
        var id = temp[0].replace("id=","");
        var kind = temp[1].replace("kind=","");

        this.loadData(url).then(function (res) {
            var info = res.goods[kind].des[id];
            console.log(info);
            this.init(res);
            this.goods(info);
            this.scaleView();
        }.bind(this));
    }
    Page.prototype.init = function (data) {
        this.nav(data.nav);
        this.banner(data.banner);
    };
    Page.prototype.loadData = function(url){
        return new Promise(function (success,fail) {
            $.get(url).then(function (res) {
                console.log(res);
                success(res);
            })
        });
    };
    Page.prototype.banner = function (data) {
        var swiper = new Swiper('.swiper-container', {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var banners = $(".top_banner_container .swiper-wrapper");

        data.forEach(function(item){
            var view = $("<div class='swiper-slide' style='background-image: url("+item+")'></div>");
            banners.append(view);
        })
    };
    Page.prototype.nav = function (data) {
        new pageTools.Nav(".nav_container",data,function (text) {
            console.log(text)
        });
    };
    Page.prototype.goods = function (data) {
        console.log(data.image);
        $(".left_goods").css("background-image","url("+data.image+")");
        $(".title").text(data.title);
        $(".price").text(data.price);
    };
    Page.prototype.scaleView = function () {
        new pageTools.ScaleView(".left_goods");
    };

    function main() {

        new Page("../res/datas.json");
    }
    main();

})();