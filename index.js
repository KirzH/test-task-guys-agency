let modal = document.getElementById("myModal")
let btn = document.getElementById("btn_basket")
let close = document.getElementById("close_modal_window")

btn.onclick = function () {
	modal.style.display = "block"
}

close.onclick = function () {
	modal.style.display = "none"
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}
