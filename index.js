let modal = document.getElementById("myModal")
let btn = document.getElementById("btn_basket")


btn.onclick = function () {
	modal.style.display = "block"
}

window.onclick = function (e) {
	if (e.target == modal) {
		modal.style.display = "none"
	}
}
