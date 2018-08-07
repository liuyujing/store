(function () {

    function Page(url) {
        this.loadData(url).then(function (res) {
            this.init(res);
        }.bind(this));
    }
    Page.prototype.loadData = function(url){
        return new Promise(function (success,fail) {
            $.get(url).then(function (res) {
                console.log(res);
                success(res);
            })
        });
    };

    Page.prototype.init = function (data) {
        this.nav(data.nav);
        this.login();
        this.banner(data.banner);
        this.typeNav(data.typeNav);
        this.goodsList(data.goods);
        this.addLeftBar(data.goods);
        this.addRightBar();
    };

    Page.prototype.nav = function (data) {
        new pageTools.Nav(".nav_container",data,function (text) {
            console.log(text)
        });
    };
    Page.prototype.login = function () {
        var loginView = null;
        function loginAction(event) {
            event.preventDefault();
            if (!loginView){
                var type = event.target.dataset.type;
                console.log(type,event);
                loginView = new pageTools.Login(type==="login","body",function () {
                    loginView = null;
                });
            }
        }

        $(".login").click(loginAction);
        $(".register").click(loginAction);

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
    Page.prototype.typeNav = function (data) {
        new pageTools.TypeNav(".goods_type_container",data,function (res) {
            console.log(res);
        });
    };
    Page.prototype.goodsList = function (data) {
        new pageTools.Goods(".main_container",data,function (res) {
            console.log(res);
        });
    };

    Page.prototype.addLeftBar = function (data) {
        var bar = $("<ul class='left_bar'></ul>");
        data.forEach(function (info) {
           var item = $("<li><a href='#"+info.id+"'>"+info.title+"</a></li>");
           bar.append(item);
        });
        $(document.body).append(bar);
    };
    Page.prototype.addRightBar = function () {
        var bar = $("<ul class='right_bar'></ul>");
        var data = ["客服","回到顶部"];
        data.forEach(function (info) {
            if (info === "客服"){

                bar.append($("<li><a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=812667555&site=qq&menu=yes\"><img border=\"0\" src=\"http://wpa.qq.com/pa?p=2:812667555:52\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></li>"));
            }else {
                var item = $("<li><a href=''>"+info+"</a></li>");
                item.click(function (event) {
                    event.preventDefault();
                    $('html,body').animate({scrollTop:0},'slow');
                });
                bar.append(item);
            }

        });
        $(document.body).append(bar);
    };
    //主函数
    function main() {
        new Page("res/datas.json");
    }

    main();

})();