
window.pageTools = window.pageTools || {};

(function(){
    function Nav(superSelector,datas,callback) {
        this.width = 1226;
        this.callback = callback;
        this.datas = datas||[];
        this.superView = $(superSelector||"");
        this.createView();
    }
    //创建界面
    Nav.prototype.createView = function(){

        var nav = $("<ul class='nav'></ul>");
        this.datas.forEach(function (info) {
            var item = $("<li class='nav_item' style='width: "+this.width/this.datas.length+"px'><a href='"+info.url+"'><img class='icon' src='"+info.image+"' alt=''><span>"+info.title+"</span></a></li>");
            nav.append(item);
        }.bind(this));
        this.superView.append(nav);
        var self = this;
        $(".nav_item").click(function (event) {
            if(!$(this).attr("href")){
                event.preventDefault();
            }
            self.callback($(this).text());
        });
    };

    window.pageTools.Nav = Nav;
})();