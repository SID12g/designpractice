var selector1 = $('.tab-button');

// for(let i = 0; i<$('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function(){
//       tab_open(i)
//   })
// }

$('.list').click(function(e){
  tab_open(e.target.dataset.id);
})


function tab_open(i) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
     
}