$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();
    //create a constant listItem 

    $("#shopping-list-entry").val('');
    // take the entered text by user

    $('.shopping-list').append(
      //append the entire list item with all its attributes using ${listItem} where the user entered text should go
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });  

    //in the shopping list, when you click on delete button the fuction removes "this" the object it belongs to (the closest list item)
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

    //in shopping list, when user clicks on toggle button the function get the closest list item, then finds the shopping item within the li and checks it off (in css)
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});