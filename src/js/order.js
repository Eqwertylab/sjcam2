$('#modal-order').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var title = button.data('descTitle');
  var price = button.data('descPrice');
  var modal = $(this);

  modal.find('#modal-order-title').text(title);
  modal.find('input[name="price"]').val(price);

  price_calculate();
})

$('#modal-order').on('hidden.bs.modal', function (event) {

  window.order_form_validator.resetForm();
})

$('input[name="delivery"]').change(function(event) {
  
  switch(event.target.value) {

    case 'delivery':
      $('#group-address').show();
      break;

    case 'pickup':
      $('#group-address').hide();
      break;
  }

  price_calculate();
});

$('select[name="count"]').change(function(event) {

  price_calculate();
});

function price_calculate() {

  var form = $('#modal-order'),
      price = form.find('input[name="price"]').val(),
      price_delivery = form.find('input[name="price-delivery"]').val(),
      count = form.find('select[name="count"]').val(),
      delivery_status = form.find('input[name="delivery"]:checked').val(),
      price_full = form.find('input[name="price-full"]'),
      price_delivery_val = 0;
  
  if(delivery_status == 'delivery')
    price_delivery_val = price_delivery;

  price_full_val = Number(price)*Number(count)+Number(price_delivery_val);

  price_full.val(price_full_val+"p.");
}