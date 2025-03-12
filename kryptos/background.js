let lastPasswordData = { password: "", strength: 0 };

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "PASSWORD_SCAN") {
        lastPasswordData = { password: message.password, strength: message.pointEarned };
        console.log("Password scanned:", lastPasswordData);
    } else if (message.type === "GET_PASSWORD_DATA") {
        console.log("Sending password data:", lastPasswordData);
        sendResponse(lastPasswordData);
    }
    return true; // Keeps response channel open if needed
});
