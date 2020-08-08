$(document).ready(
  (onsubmit = () => {
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

      submitHandler: function (form) {
        $.ajax({
          url:
            "https://script.google.com/macros/s/AKfycbxWtuIGHnUMC-ciRKbAvJJbRSXCgkyoaM-RfQoycA/exec",
          data: $("#submit-form").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
            window.location.href = "index.html";
          },
          error: function (err) {
            alert("Something Error");
          },
        });
      },
    });
  })
);
