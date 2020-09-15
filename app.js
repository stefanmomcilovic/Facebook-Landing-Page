$(document).ready(function () {

    var popup = document.getElementById("myPopup");
    var emailPop = document.getElementById("emailPopUp");
    var passPop = document.getElementById("passPopUp");

    $("#name").blur(function () {
        if (!$("#name").val()) {
            $("#name").css({
                "border-color": "red",
                "border-width": "1px",
                "border-style": "solid"
            });

            $(".danger").css({
                "visibility": "visible",
            }).click(function () {
                popup.classList.add("show");
            });



        }
    });

    $("#surname").blur(function () {
        if (!$("#surname").val()) {
            $("#surname").css({
                "border-color": "red",
                "border-width": "1px",
                "border-style": "solid"
            });

            $(".sur-danger").css({
                "visibility": "visible"
            }).click(function () {
                popup.classList.add("show");
            });
        }
    });

    $("#email").blur(function () {
        if (!$("#email").val()) {
            $("#email").css({
                "border-color": "red",
                "border-width": "1px",
                "border-style": "solid"
            });

            $(".email-danger").css({
                "visibility": "visible"
            }).click(function () {
                emailPop.classList.add("show");
            });
        }
    });

    $("#password").blur(function () {
        if (!$("#password").val()) {
            $("#password").css({
                "border-color": "red",
                "border-width": "1px",
                "border-style": "solid"
            });

            $(".pas-danger").css({
                "visibility": "visible"
            }).click(function () {
                passPop.classList.add("show");
            });;
        }
    });

    $("#name").click(function () {
        $("#name").css({
            "border": "none"
        });

        $(".danger").css({
            "visibility": "hidden"
        });

        popup.classList.add("hide");
        popup.classList.remove("show");
    });

    $("#surname").click(function () {
        $("#surname").css({
            "border": "none"
        });

        $(".sur-danger").css({
            "visibility": "hidden"
        });

        popup.classList.add("hide");
        popup.classList.remove("show");
    });

    $("#email").click(function () {
        $("#email").css({
            "border": "none"
        });

        $(".email-danger").css({
            "visibility": "hidden"
        })

        emailPop.classList.add("hide");
        emailPop.classList.remove("show");
    });

    $("#password").click(function () {
        $("#password").css({
            "border": "none"
        });

        $(".pas-danger").css({
            "visibility": "hidden"
        });

        passPop.classList.add("hide");
        passPop.classList.remove("show");
    });

    $("#custom").click(function () {
        $(".custom").css({
            "display": "block"
        })
    })

    $("#man").click(function () {
        $(".custom").css({
            "display": "none"
        })
    })

    $("#ladies").click(function () {
        $(".custom").css({
            "display": "none"
        })
    });

});
