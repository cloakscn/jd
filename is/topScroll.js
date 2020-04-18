//控制顶部搜索栏的显示与隐藏

window.onscroll = function() {
	//1.获取滚动条滚动距离
	var top = document.documentElement.scrollTop;
	//2.获取顶部div class="nav"
	var nav = document.getElementsByClassName('nav')[0];
	
	if(top >= 730) {
		nav.style.position = "fixed";
		nav.style.top = "0";
		nav.style.height = "48px";
		nav.style.display = "block";
		nav.style.zIndex = 1000;
	} else {
		nav.style.display = "none";
		nav.style.height = "0";
	}
}