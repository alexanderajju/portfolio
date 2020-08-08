$(document).ready(function () {
  $("#submit-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
      },

      email: {
        required: true,
        email: true,
      },
      option: {
        required: true,
      },
      subject: {
        required: true,
      },
      mobile: {
        required: true,
        number: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "enter your name",
      },
    },
  });
});
