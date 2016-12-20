// ==UserScript==
// @name         osu! Download from mengsky
// @namespace    https://Konano.github.io
// @description  Download beatbaps from mengsky (a mirror site)
// @author       Konano
// @include     *osu.ppy.sh/s*
// @include     *osu.ppy.sh/b*
// @version     1.1
// ==/UserScript==


(function($) {

	var mirrorDown = '<div id="mirroDown" style="float:right;width:100px;"><button id="mirrorMengsky" style="background-color:#0099FF;border:1px solid;border-radius:5px;color:#FFFFFF;cursor:pointer;font-size:1.5em;font-weight:bold;height:130px;margin:4px 1px 0 5px;width:96px;">Download from mengsky</button></div>';

	$('.beatmapDownloadButton:first').before(mirrorDown);

	document.getElementById('mirrorMengsky').onclick = function() {
		location.href = 'http://osu.mengsky.net/api/download/' + $('.beatmapDownloadButton:last a').attr('href').replace('/d/', '');
	}

})(unsafeWindow.$);