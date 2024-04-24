function toCase(text) {
    let ans = "";
	ans += text.toLowerCase();
	ans += '-' + text.toUpperCase();
	return ans;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
