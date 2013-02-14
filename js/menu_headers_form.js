Drupal.behaviors.menu_headers = {
	attach: function(){
		//checkElements();
		addHeaders();
	}
};
/*var Pair = function() {
	var self = this;
	this.init = function(title, checkbox) {
		this.title = title;
		this.checkbox = checkbox;
		this.addOpenClose();
		this.listen();
	};
	this.listen = function() {
		this.checkbox.addEventListener('click', self.addOpenClose, false);
	};
	this.addOpenClose = function() {
		if(self.checkbox.checked === true) {
			self.title.style.display = 'block';
		} else {
			self.title.style.display = 'none';
		}
	};
};	

function checkElements() {
	var pairObjects = [];
	var pairs = document.getElementsByClassName('menu-pair');
	for(i in pairs) {
		var p = pairs[i].children;
		if(pairs[i].children) {
			var title = p[0].children[0];
			var checkbox = p[1].children[0];
			currPair = new Pair().init(title, checkbox);
			pairObjects[i] = currPair;
		}
	}
}
*/

function addHeaders(){
	headers = Drupal.settings.menu_headers;
	for(i in headers) {
		var item = document.getElementsByClassName('menu-item-' + headers[i].mlid)[0];
		if(item) {
			var header = document.createElement('h3');
			var headerText = document.createTextNode(headers[i].header);
			header.appendChild(headerText);
			header.style.margin = 0;
			header.style.textAlign = 'center';
			item.insertBefore(header, item.firstChild);
		}
	};
}