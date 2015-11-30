var order_form_validator = $("#form-modal-order").validate({

  rules: {
    name: "required",
    email: {
      email: true
    },
    tel: {
      required: true,
      minlength: 6
    },
    address: {
      required: {
        depends: function(element) {
          return $('input[name="delivery"][value="delivery"]').is(":checked");
        }
      }
    }
  },

  messages: {
    name: "Укажите ваше имя",
    email: {
      email: "E-mail должен соответствовать формату name@domain.com"
    },
    tel: {
      required: "Укажите телефон для связи",
      minlength: jQuery.validator.format("Минимальная длина {0} символов")
    },
    address: {
      required: "Выбрана доставка, поэтому нужно указать адрес"
    }
  },

  errorClass: "text-danger"
});