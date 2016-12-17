var password = prompt("What is the password you want to check? Any text you enter will not be recorded.");

if (password.length < 8) {
	alert("Your password isn't secure."); 
}

else if (password.length < 10) {
	alert("Your password is pretty secure.");
}

else if (password.length < 20) {
	alert("Your password is super secure. Aesome!");

}

else {
	alert("Are you sure you can remember that? If you can, your password is super secure. Well done!");
}



