function showPhone() {
    const wrapper = document.getElementById("phone-btn-wrapper");
    const phoneParts = ["600", "965", "914"];
    const phone = phoneParts.join(" ");
    const telHref = "tel:" + phoneParts.join("");
    wrapper.innerHTML = `<a href="${telHref}" class="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition inline-block text-center">${phone}</a>`;
}

function showEmail() {
    const wrapper = document.getElementById("email-btn-wrapper");
    const user = "zenek1967";
    const domain = "interia";
    const tld = "pl";
    const email = `${user}@${domain}.${tld}`;
    wrapper.innerHTML = `
        <div class="w-full">
            <button onclick="copyEmail()" class="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-100 transition text-center">${email}</button>
            <div id="copy-msg" class="hidden mt-2 text-green-700 bg-green-100 rounded px-3 py-1 text-sm text-center"></div>
        </div>
    `;
}

function copyEmail() {
    const user = "zenek1967";
    const domain = "interia";
    const tld = "pl";
    const email = `${user}@${domain}.${tld}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email);
    } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    showCopyMessage();
}

function showCopyMessage() {
    const msg = document.getElementById("copy-msg");
    if (msg) {
        msg.textContent = "Adres email został skopiowany do schowka!";
        msg.classList.remove("hidden");
        setTimeout(() => {
            msg.classList.add("hidden");
        }, 3000);
    }
}

window.showPhone = showPhone;
window.showEmail = showEmail;
window.copyEmail = copyEmail;