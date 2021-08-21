let namecheck = false;
let mobcheck = false;
let mailcheck = false;
let feedbackcheck = false;
var count = 1
$(document).ready(function () {
    $("#fname").keydown(function (ev) {

        var namekey = String.fromCharCode(ev.which);

        var input = this.value
        var prev = input.length - 1
        let nameregex = /^[A-Za-z ]$/

        if (ev.which != 0 && ev.which != 8 && ev.which != 9 && ev.which != 13 && ev.which != 37 && ev.which != 38 && ev.which != 39 && ev.which != 40 && ev.which != 46) {
            if (!namekey.match(nameregex) || (input[prev] == " " && namekey == " ")) {

                ev.preventDefault();
            }
        }

        if (input.length < 2) {
            namecheck = false
            $("#error1").text("Enter at least 3 characters")
        }
        else {
            $("#error1").text("")
            namecheck = true
        }
    })

    $("#fmob").keydown(function (ev) {

        let mobkey = String.fromCharCode(ev.which)
        let mob = this.value;
        let mobregex = /^[0-9]$/
        console.log(mob.length)
        if (ev.which != 0 && ev.which != 8 && ev.which != 9 && ev.which != 13 && ev.which != 37 && ev.which != 38 && ev.which != 39 && ev.which != 40 && ev.which != 46) {
            if (!mobkey.match(mobregex)) {
                ev.preventDefault()
            }
        }

        if (mob.length < 9) {
            $("#error2").text("Mobile number should be at least 10 digits")
            mobcheck = false
        }
        if (mob.length == 9) {
            $("#error2").text("")
            mobcheck = true
        }
        if (mob.length == 10) {
            if (ev.which != 0 && ev.which != 8 && ev.which != 9 && ev.which != 13 && ev.which != 37 && ev.which != 38 && ev.which != 39 && ev.which != 40 && ev.which != 46) {
                ev.preventDefault()
                console.log(mob)
            }
        }


    })

    $("#femail").blur(function () {

        let mail = this.value;
        let mailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
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
        if (feed.length < 30) {
            feedcheck = false;
            $("#error4").text("Enter atleast 30 characters")
        }
        else {
            feedcheck = true;
            $("#error4").text("");
        }
    })

})

$("#gform").submit((e) => {

    e.preventDefault()
    if (namecheck == true && mobcheck == true && mailcheck == true && feedcheck == true) {
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
    else {
        $("#submitmsg").text("Please fill all the details and try again")
    }

})