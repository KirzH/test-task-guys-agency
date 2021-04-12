let modal = document.getElementById("myModal")
let btn = document.getElementById("btn_basket")

btn.onclick = function () {
	modal.style.display = "block"
}

setTimeout(function () {
	document.getElementById("myModal").style.display = "none"
}, 3000)

window.onclick = function (e) {
	if (e.target == modal) {
		modal.style.display = "none"
	}
}
