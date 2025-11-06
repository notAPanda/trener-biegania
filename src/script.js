function showPhone() {
	const wrapper = document.getElementById("phone-btn-wrapper");
	// Phone number is split and joined at runtime
	const phoneParts = ["600", "965", "914"];
	const phone = phoneParts.join(" ");
	const telHref = "tel:" + phoneParts.join("");
	wrapper.innerHTML = `<a href="${telHref}" class="px-8 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition inline-block">${phone}</a>`;
}

function showEmail() {
	const wrapper = document.getElementById("email-btn-wrapper");
	// Email is built from parts at runtime
	const user = "zenek1967";
	const domain = "interia";
	const tld = "pl";
	const email = `${user}@${domain}.${tld}`;
	wrapper.innerHTML = `<button onclick=\"copyEmail()\" class=\"px-8 py-3 border border-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-100 transition\">${email}</button>`;
}

function copyEmail() {
	// Email is built from parts at runtime
	const user = "zenek1967";
	const domain = "interia";
	const tld = "pl";
	const email = `${user}@${domain}.${tld}`;
	if (navigator.clipboard) {
		navigator.clipboard.writeText(email);
		alert("Adres email został skopiowany do schowka!");
	} else {
		// fallback
		const textarea = document.createElement("textarea");
		textarea.value = email;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert("Adres email został skopiowany do schowka!");
	}
}

window.showPhone = showPhone;
window.showEmail = showEmail;
window.copyEmail = copyEmail;