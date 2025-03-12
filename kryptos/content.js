function listenForPass() {
    console.log("Hello");
    const allInputs = document.querySelectorAll("input[type='password']");
    
    allInputs.forEach((i) => {
        let password = i.value;
        let pointEarned = passwordStrengthCheck(password);

        try {
            chrome.runtime.sendMessage({ type: "PASSWORD_SCAN", password, pointEarned });
        } catch (error) {
            console.error("Error sending message:", error);
        }
    });
}

function passwordStrengthCheck(password) {
    let point = 0;
    if (password.length >= 12) point += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) point += 1;
    if (/[0-9]/.test(password)) point += 1;
    if (/[^A-Za-z0-9]/.test(password)) point += 1;
    return point;
}

window.addEventListener("DOMContentLoaded", listenForPass)
window.setInterval(listenForPass, 3000);
