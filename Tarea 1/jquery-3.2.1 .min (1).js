
var target = null;
$('.img_thumb').hover(function(e){
    target = $(this);
    $(target[0].firstElementChild).fadeIn(200);
}, function(){
    $(target[0].firstElementChild).fadeOut(200);
});

//este proceso lo pude hacer con un tutorial que encontre, esto hace que cuando pase el mouse aparezca la imagen//
let image = document.querySelector('.image');
let select = document.getElementById('effect');

select.addEventListener('change', function (e) {
  image.className = `image ${this.value}`;
});

