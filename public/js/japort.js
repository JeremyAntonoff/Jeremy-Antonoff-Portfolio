jQuery(document).ready(function($) {
  $('.scroll').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

$('#contact-form').submit(event => {
  event.preventDefault();
  formSubmit();
});

function formSubmit() {
  let name = $('#name').val();
  let email = $('#email').val();
  let message = $('#textbox').val();
  let formMessage = { name, email, message };
  $.ajax({
    type: 'POST',
    url: '/contact',
    data: formMessage
  })
    .then(success)
    .catch(failure);
}

function success() {
  $('#name').hide();
  $('#email').hide();
  $('#textbox').hide();
  $('.label').hide();
  $('#form-button').hide();
  $('.form-message')
    .fadeIn()
    .html('<h2> Your message has been sent! </h2>');
}

function failure() {
  $('#name').hide();
  $('#email').hide();
  $('#textbox').hide();
  $('.label').hide();
  $('#form-button').hide();
  $('.form-message').addClass('contact-failed');
  $('.form-message')
    .fadeIn()
    .html(
      '<h2> Your message could not be sent! Please email me at <a class="emailLink" href="mailto:jeremyantonoff@gmail.com">JeremyAntonoff@gmail.com</h2></a>'
    );
}
