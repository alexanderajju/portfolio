$(document).ready(function () {
    $("#enquiry").validate({
        rules: {
            _name: {
                required: true,
                minlength: 5,

            },

            _replyto: {
                required: true,
                email: true,
            },
            _option: {
                required: true,
            },
            subject: {
                required: true,

            },
            _mobile: {
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
