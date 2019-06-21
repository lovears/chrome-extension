// $("#qrcode").qrcode( "http://www.runoob.com"); 
chrome.tabs.onUpdated.addListener(onUpdated);
chrome.tabs.onCreated.addListener(onCreated);

chrome.tabs.getCurrent(function(tab){
	console.log(tab);
})

getCurrentUrl(function(url){
	createQrCode(url); 
})

$("#generate").click(function(){
	getCurrentUrl(function(url){
			createQrCode(url); 
		})
})

function onCreated(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		// if(callback) callback(tabs.length ? tabs[0].url: null);
		chrome.tabs.update(tabs[0].id,{url:"https://lovears.github.io/2019/06/18/todo-list"},function(tab){
			console.log(tab);
		})	
	});
}


function createQrCode(url) {
	_qcode = $("#qrcode");
	if (!_qcode) {
		 document.write('<div id="qrcode"></div>');
	}
	$("body").empty();
	if (url) {
		new QRCode(document.body, url); 
	}else{
		getCurrentUrl(function(url){
			new QRCode(document.body, url||"none"); 
		})
	}
}
function onUpdated(tabId,changeInfo,tab) {
	// console.log("tabId",tabId);
	// console.log("tab:",tab);
	// console.log("url:",tab.url);
	// console.log("changeInfo",changeInfo);
		createQrCode(tab.url)
}
