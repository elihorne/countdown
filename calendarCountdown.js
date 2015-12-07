console.log("Identity:", chrome.identity);

$("#authorize").click(
	function () {
		console.log("Identity:", chrome.identity);
		chrome.identity.getAuthToken({interactive:true}, function(token) {
      console.log(chrome.runtime.lastError, token);
    });
	});
