// 获取当前选项卡url
function getCurrentUrl(callback){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].url: null);
	});
}
