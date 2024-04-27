let images = document.querySelectorAll('.imgg');
let qoute = document.querySelector('#qoute');
let my_img = document.querySelector('.myimg');
let comment = document.querySelector('#comm');
let x = true;
images.forEach(function(image) {
    image.addEventListener('click', function(event) {
           console.log(image.src);
           my_img.src = image.src;
        if(x === true){

            qoute.style.color = 'red';
            x = false;
        }
       
    else{
        qoute.style.color = 'black';
        x = true;
    }
  
    });
});






  

