chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "modifyLocalStorage") {
    const newData = {
      "elements": [
        {"text":"물","emoji":"💧","discovered":false},
        {"text":"불","emoji":"🔥","discovered":false},
        {"text":"바람","emoji":"🌬️","discovered":false},
        {"text":"땅","emoji":"🌍","discovered":false}
      ]
      //"darkMode": false
    };
    
    localStorage.setItem('infinite-craft-data', JSON.stringify(newData));
    alert('번역 완료! 페이지를 새로고침해주세요.');
  }
});
