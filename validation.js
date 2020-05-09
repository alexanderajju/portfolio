$(document).ready(function () {
    $("#enquiry").validate({
        rules: {
            names: {
                required: true,
                minlength: 5,

            },

            mail: {
                required: true,
                email: true,
            },
            service: {
                required: true,
            },
            subject: {
                required: true,

            },
            number: {
                required: true,
                number: true,
                minlength: 10,
            }






        },
        messages: {
            name: {
                required:"enter your name"
            }

        }

    })
})