var cardContainer = $('.card-container');
var submit = $('.submit-btn');
submit.on('click',createNewUser);

function createNewUser () {
var toDo = $('.name').val();


appendNewToDo (toDo);
  $('.name').val("");

}
function appendNewToDo(toDo) {
  cardContainer.append (`${toDo}`);
}
