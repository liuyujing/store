
window.pageTools = window.pageTools || {};
(function () {


    function Goods(superSelector,datas,callback) {
        this.callback = callback;
        this.superView = $(superSelector||"");
        this.datas = datas||[];
        this.createView();
    }
    Goods.prototype.createView = function () {
      var goods_container = $('<ul class="goods_container"></ul>');
      this.superView.append(goods_container);

      this.datas.forEach(function (obj) {
          var item = $('<li class="item" id="'+obj.id+'"><div class="addr" style="background-image: url('+obj.addr+')"></div><h3 class="title">'+obj.title+'</h3></li>');
          goods_container.append(item);
          var goods = $('<ul class="goods"></ul>')
          item.append(goods);
          console.log(item);
          obj.des.forEach(function (info) {
              var goods_item = $('<li class="goods_item"><a href="views/goods.html?id='+info.id+'&kind='+obj.kind+'"><img class="image" src="'+info.image+'" alt=""><p class="name">'+info.name+'</p><p class="price">￥'+info.price+'</p><button>抢购</button></a></li>');
              goods.append(goods_item);
          });
      });
    };

    pageTools.Goods = Goods;
})();

