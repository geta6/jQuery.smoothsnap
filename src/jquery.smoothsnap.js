(function($){
  $.fn.smoothsnap = function(target, callback){
    if(!target) target = $("body");
    if(typeof callback != 'function') callback = function(arg){};
    var self = this;

    var start = {
      mouse : { x : null, y : null },
      target : { x : null, y : null }
    };
    var mouse_pressing = false;

    self.mousedown(function(e){
      mouse_pressing = true;
      start.mouse.x = e.screenX;
      start.mouse.y = e.screenY;
      start.target.x = window.scrollX;
      start.target.y = window.scrollY;
    });
    self.mouseup(function(){
      mouse_pressing = false;
      start.mouse.x = null;
      start.mouse.y = null;
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
        var dx = e.screenX - start.mouse.x;
        var dy = e.screenY - start.mouse.y;
        window.scrollTo(start.target.x+distance(dx),
                        start.target.y+distance(dy));
      }
    });
    return this;
  };
})(jQuery);