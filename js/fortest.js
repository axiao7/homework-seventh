(function (win, doc) {
	var btn = doc.querySelector('.btn');
	btn.addEventListener('click', function () {
		btn.innerHTML = "被点击";
	}, false);
})(window, document)