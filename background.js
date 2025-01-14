chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'executeScript') {
      chrome.tabs.executeScript({
        target: { tabId: request.tabId },
        func: request.func,
      }, function(result) {
        sendResponse(result);
      });
    }
  });