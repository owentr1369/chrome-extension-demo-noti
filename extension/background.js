const sampleUrl = "https://google.com";

chrome.runtime.onInstalled.addListener(() => {
  // Open new tab to google.com
  console.log("Extension has been installed");
  chrome.tabs.create({ url: sampleUrl });
});

chrome.runtime.onStartup.addListener(() => {
  console.log("Browser has started up");
  // Perform any initialization tasks here
  // Send message to content script
  chrome.tabs.create({ url: sampleUrl });
});

chrome.windows.onCreated.addListener(() => {
  console.log("A new window has been opened");
  // Perform any tasks needed when a new window is opened
  // For example, send a message to the content script in the new window
  chrome.tabs.create({ url: sampleUrl });
});
