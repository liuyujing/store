
window.pageTools = window.pageTools || {};
(function () {

    function TypeNav(superSelector,datas,callback) {
        this.callback = callback;
        this.superView = $(superSelector||"");
        this.datas = datas||[];
        this.createView();
    }
    TypeNav.prototype.createView = function(){
        var self = this;
        var left_type = $('<ul class="left_type"></ul>');
        this.superView.append(left_type);
        this.datas.forEach(function (item) {

            var left_item = $('<li class="left_item"><a href="">'+item.title+'</a></li>');
            left_type.append(left_item);

            left_item.click(function (item) {
                return function (event) {
                    event.preventDefault();
                    self.callback($(this).text());

                    if ($(".right_type")){
                        $(".right_type").remove();
                    }

                    var right_type = $('<ul class="right_type"></ul>');
                    $(this).append(right_type);
                    right_type.css("width",right_type.css("width")!="20rem"?"20rem":"0px");

                    item.des.forEach(function (info) {
                        var right_item = $('<li class="right_item"><a href="">'+info.title+'</a></li>');
                        right_type.append(right_item);
                    });
                }
            }(item));

        }.bind(this));
    };

    window.pageTools.TypeNav = TypeNav;
})();