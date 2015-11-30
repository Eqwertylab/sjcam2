// 
// Параметры валидации
// -----------------------------------
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

  errorClass: "text-danger",

  submitHandler: function(form) {

    $(form).ajaxSubmit(submit_options);

    return false;
  }
});


// 
// Параметры ajax
// -----------------------------------

var submit_options = { 
    // target:        '#output2',   // target element(s) to be updated with server response 
    // beforeSubmit:  showRequest,  // pre-submit callback 
    success:       showResponse,  // post-submit callback 
    error:         showError,

    // other available options: 
    //url:       url         // override for form's 'action' attribute 
    //type:      type        // 'get' or 'post', override for form's 'method' attribute 
    dataType:  'json',        // 'xml', 'script', or 'json' (expected server response type) 
    //clearForm: true        // clear all form fields after successful submit 
    //resetForm: true        // reset the form after successful submit 

    // $.ajax options can be used here too, for example: 
    //timeout:   3000 
};


// 
// Функции обработчики ajax ответа
// -----------------------------------

// Удачно
function showResponse(responseJson, statusText, xhr, $form)  { 

  setModalResponse(responseJson);
} 

// Не удачно
function showError() {

  var data = {
    title: 'Ошибка',
    content: 'Ошибка отправки заказа, пожалуйста позвоните по тел. 8 (800) 333-18-55'
  }

  setModalResponse(data)
}

function setModalResponse(data) {

  $('#modal-response-title').text(data.title);
  $('#modal-response-body').text(data.content);

  $('#modal-order').modal('hide');
  $('#modal-response').modal('show');
}