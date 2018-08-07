window.pageTools = window.pageTools || {};

(function () {

    function Login(isLogin, superViewSelector, eventListiner) {
        this.isLogin = isLogin;
        this.superView = $(superViewSelector);
        this.init();
        this.eventListiner = eventListiner;
    }

    Login.prototype.init = function () {
        var isShow = this.isLogin ? "none" : "block";
        var buttonText = this.isLogin ? "登录" : "注册";
        this.box = $("<div class='box'><button class='close_button'>x</button><div class='input_box'><input type='text' placeholder='用户名'><input type='password' placeholder='密码'><input type='password' placeholder='确认密码' class='again_pw'><button class='login_button'></button></div></div>");
        this.superView.append(this.box);
        $(".again_pw").css("display", isShow);

        $(".login_button").text(buttonText).click(function () {
            this.box.remove();
            this.box = null;
            this.eventListiner();
        }.bind(this));
        $(".close_button").click(function () {
            this.box.remove();
            this.box = null;
            this.eventListiner();
        }.bind(this));

    };
    window.pageTools.Login = Login;
})();