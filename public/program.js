function toggleShowHide() {
    if (document.getElementById("fwends").style.display == "none") {
        document.getElementById("fwends").style.display = ""
        document.getElementById("button").innerHTML = "Hide"
    } else if (document.getElementById("fwends").style.display == "") {
        document.getElementById("fwends").style.display = "none"
        document.getElementById("button").innerHTML = "Show"
    }
}