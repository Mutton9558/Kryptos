function displayPasswordStrength(){
    chrome.runtime.sendMessage({ type: "GET_PASSWORD_DATA" }, (response) => {
        if (response) {
            document.getElementById("password-found").innerText = response.password || "No password detected";
            
            const strengthBar = document.getElementById("password-scale");
            const strengthText = document.getElementById("password-strength-caption");
            const strengthLevels = ["10%", "25%", "50%", "75%", "100%"];
            const strengthTitle = ["Very Weak", "Weak", "Average", "Strong", "Very Strong"]
            strengthBar.style.width = strengthLevels[response.strength] || "10%";
            strengthBar.style.background = response.strength >= 3 ? "green" : response.strength >= 2 ? "orange" : "red";
            strengthText.innerHTML = strengthTitle[response.strength] || "Very Weak";
            strengthText.style.color = response.strength >= 3 ? "green" : response.strength >= 2 ? "orange" : "red";
        }
    });
}

window.addEventListener("DOMContentLoaded", displayPasswordStrength)
window.setInterval(displayPasswordStrength, 3000);
