let namecheck = false;
let numcheck = false;
let mailcheck = false;
let feedbackcheck = false;
$(document).ready(function () {
    $("#fname").keyup(function () {

        let name = this.value;
        let nameregex = /^[A-Za-z ]+$/
        if (name.length < 3) {
            namecheck = false;
            $("#error1").text("Name should have minimum 3 characters")
        }
        else if (!name.match(nameregex)) {
            namecheck = false;
            $("#error1").text("Enter a valid name")
        }
        else if (name.includes("  ")) {
            namecheck = false;
            $("#error1").text("Enter a valid name")
        }
        else {
            namecheck = true;
            $("#error1").text("");
        }
    })

    $("#fmob").keyup(function () {

        let mob = this.value;
        let mobregex = /^[0-9]+$/
        if (!mob.match(mobregex)) {
            numcheck = false;
            $("#error2").text("Enter a valid number");

        }

        else if (mob.length != 10) {
            numcheck = false;
            $("#error2").text("Number should have 10 digits");
        }

        else if (mob.match(mobregex) && mob.length == 10) {
            numcheck = true;
            $("#error2").text("");
        }

    })

    $("#femail").blur(function () {

        let mail = this.value;
        let mailregex = /^[A-Za-z0-9_.]+@[a-z]+.[a-z]+$/
        if (mail.match(mailregex)) {
            mailcheck = true;
            $("#error3").text("");
        }
        else {
            mailcheck = false;
            $("#error3").text("Invalid email address");
        }

    })

    $("#feedback").blur(function () {

        let feed = this.value;
        if (feed.length < 50) {
            feedcheck = false;
            $("#error4").text("Enter atleast 50 characters")
        }
        else {
            feedcheck = true;
            $("#error4").text("");
        }
    })

})

$("#gform").submit((e) => {

    e.preventDefault()
    if (namecheck == true && numcheck == true && mailcheck == true && feedcheck == true) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzyVZABM5efWcFiVYffrh7BzVWqWADlyPGy26R5eka8NzOKzgCO_wcmtd1dWp8PbabS/exec",
            data: $("#gform").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Submit error. Try again")

            }
        })
    }

})