(function ($) {
  Drupal.behaviors.menu_headers = {
    attach: function(){
      //checkElements();
      addHeaders();
    }
  };
  function addHeaders(){
    headers = Drupal.settings.menu_headers;
    for(i in headers) {
      var item = $('.menu-item-' + headers[i].mlid)[0];
      var text = headers[i].header;
      var fontSize = 'h' + headers[i].size;
      if(item && text) {
        var header = document.createElement(fontSize);
        var headerText = document.createTextNode(text);
        header.appendChild(headerText);
        header.className = 'menu-headers menu-headers-' + fontSize;
        item.insertBefore(header, item.firstChild);
      }
    };
  }
})(jQuery);