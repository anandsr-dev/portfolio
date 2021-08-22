let namecheck = false;
let mobcheck = false;
let mailcheck = false;
let feedbackcheck = false;

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});
$(document).ready(function () {
    $("#fname").keydown(function (ev) {

        let namekey = ev.key;

        let input = this.value
        let prev = input.length - 1
        let nameregex = /^[A-Za-z ]$/

        if (ev.which != 8 && ev.which != 46) {
            if (!nameregex.test(namekey) || (input[prev] == " " && namekey == " ")) {
                ev.preventDefault();
            }
        }

        if (input.length >= 2) {
            $("#error1").text("")
            namecheck = true
        }
    })

    $("#fname").blur(function () {
        var val = this.value
        var length = val.length
        if (length < 3) {
            namecheck = false
            $("#error1").text("Enter at least 3 characters")
        }
    })

    $("#fmob").keydown(function (ev) {

        let mobkey = ev.key
        let mob = this.value;
        let mobregex = /^[0-9]$/
        if (ev.which != 8 && ev.which != 46) {
            if (!mobregex.test(mobkey)) {
                ev.preventDefault()
            }
        }
        if (mob.length == 9) {
            $("#error2").text("")
            mobcheck = true
        }
        if (mob.length == 10) {
            if (ev.which != 8 && ev.which != 46) {
                ev.preventDefault()
            }
        }
    })

    $("#fmob").blur(function () {
        var val = this.value
        var length = val.length
        if (length < 10) {
            $("#error2").text("Mobile number should be at least 10 digits")
        }
    })

    $("#femail").blur(function () {

        let mail = this.value;
        let mailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
        if (mail.match(mailregex)) {
            mailcheck = true;
            $("#error3").text("");
        }
        else if (mail == "") {
            $("#error3").text("Don't leave this field empty");
        }
        else {
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
        $("#submitmsg").text("")
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
