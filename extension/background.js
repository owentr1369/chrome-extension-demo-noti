chrome.runtime.onInstalled.addListener(() => {
  // Open new tab to google.com
  chrome.tabs.create({ url: "https://google.com" });
});

chrome.runtime.onStartup.addListener(() => {
  // Log the startup event
  console.log("onStartup");

  // Query the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      // Send a message to the content script in the active tab
      chrome.tabs.sendMessage(tabs[0].id, { message: "startup" });
    }
  });
});
