
window.pageTools = window.pageTools || {};

(function () {

    function ScaleView(superSelector) {
        this.superView = $(superSelector||"");
        this.init();
    }
    ScaleView.prototype.init = function(){

        var scaleView = $("<div class='scale_container'></div>");
        this.superView.append(scaleView);

        scaleView.css({
            "background-image":this.superView.css("background-image")
        });


        this.superView.mouseenter(function () {
            scaleView.css("display","block");
        }).mousemove(function (event) {

            scaleView.css({
                "background-position":(-event.offsetX+200)+"px "+(-event.offsetY+200)+"px"
            });

        }.bind(this)).mouseout(function () {
            scaleView.css("display","none");
        });
    };
    pageTools.ScaleView = ScaleView;
})();
