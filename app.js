$(() => {
  const $container = $('#container');

  console.log($container);

  const $h1 = $('<h1>');

  console.log($h1);

  $h1.text('Hogwarts');

  $container.append($h1);
});

// Assuming your wand is in an element with class 'wand', use jQuery to remove it
$('.wand').remove();
// Assuming butter beer is in a list item, use jQuery to remove it
$('ul[storage="trunk"] li:contains("butter beer")').remove();
// Assuming your wand is in an element with class 'wand', use jQuery to add it back with new text
$('<h4 class="wand">dier</h4>').insertAfter('.pet');
// Assuming your new wand has the class 'wand', use jQuery to add a color
$('.wand').css('color', 'red');
// Assuming your pet has the class 'pet', use jQuery to detach it and append it somewhere else
const $pet = $('.pet').detach();
// Append it somewhere else (replace 'newLocation' with the desired selector)
$pet.appendTo('syns of lie');
