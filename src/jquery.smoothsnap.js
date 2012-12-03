(function($){
  $.fn.smoothsnap = function(opts, callback){
    var target = $("body");

    if(typeof callback != 'function') callback = function(arg){};
    var self = this;
    this.css("-webkit-user-select", "none");
    this.css("-moz-user-select", "none");

    var snap = new (function(selector){
      var self = this;
      this.points = [];
      for(var i = 0; i < selector.length; i++){
        self.points.push(selector[i].offsetTop);
      }

      this.point = function(point){
        if(self.points.length == 0) return null;
        if(self.points.length == 1) return self.points[0];

        var dist = null;
        var dist_p = Math.abs(point - self.points[0]);
        for(var i = 1; i < self.points.length; i++){
          dist = Math.abs(point - self.points[i]);
          if(dist_p < dist) return self.points[i-1];
          dist_p = dist;
        }
        return self.points[ self.points.length-1 ];
      };
    })(opts.snap);

    var start = {
      mouse : null,
      target : null
    };
    var mouse_pressing = false;

    self.mousedown(function(e){
      mouse_pressing = true;
      start.mouse = e.screenY;
      start.target = window.scrollY;
    });
    self.mouseup(function(){
      mouse_pressing = false;
      start.mouse = null;
    });

    var distance = function(num){
      if(num > 0){
        return Math.exp(num/30);
      }
      else if(num < 0){
        return -1*Math.exp(Math.abs(num)/30);
      }
      else{
        return 0;
      };
    };

    self.mousemove(function(e){
      if(mouse_pressing){
        var dy = e.screenY - start.mouse;
        var y = start.target + distance(dy);
        window.scrollTo(window.scrollX, snap.point(y));
      }
    });
    return this;
  };
})(jQuery);