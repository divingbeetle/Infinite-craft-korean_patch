document.getElementById('translateButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "modifyLocalStorage"}, function(response) {
        if (chrome.runtime.lastError) {
            document.getElementById('status').textContent = "Error: " + chrome.runtime.lastError.message;
        } 
    });
  });
});
