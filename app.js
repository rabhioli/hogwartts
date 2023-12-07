$(() => {
  const $container = $('#container');

  console.log($container);

  const $h1 = $('<h1>');

  console.log($h1);

  $h1.text('Hogwarts');

  $container.append($h1);
});


$('.wand').remove();

$('ul[storage="trunk"] li:contains("butter beer")').remove();

$('<h4 class="wand">dier</h4>').insertAfter('.pet');

$('.wand').css('color', 'red');

const $pet = $('.pet').detach();

$pet.appendTo('syns of lie');

$('.secret').hide('slow');

$('.secret').hide('slow').delay(2000).show('slow');

$('.leash').addClass('cabbage');

$('.leash').removeClass('cabbage');

setTimeout(function () {

  $('.pet.owl.leash').removeClass('cabbage');
  
}, 2000);
