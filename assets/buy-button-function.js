
document.addEventListener("DOMContentLoaded", function (event) {
    const value = document.querySelector("select[id='Option-{{- section_id -}}-1']").value
    console.log(value)
    if (value == "unavailable") {
        document.querySelector("#ProductSubmitButton-{{- section_id -}}").setAttribute("disabled", "true")
    } else {
        document.querySelector("#ProductSubmitButton-{{- section_id -}}").removeAttribute("disabled")
        console.log("Aman")
    }
});