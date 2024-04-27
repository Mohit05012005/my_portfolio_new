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

// document.addEventListener('keydown',(en)=>{
//     if(comment.value){
//         if(en.key === 'Enter'){
//             // console.log("enter key is pressed");
//             // console.log(comment.value);
//               let div = document.createElement('div');
//               div.setAttribute('class','myclass');
//               div.innerHTML = `<div style="background-color:blue;; class= "mycomment">
//               <p  id="comim" style= "font-size:4rem; margin:30px;"> ${comment.value}</p>
//               </div>
//               `
//               document.body.appendChild(div);
//             //   let box = document.querySelector('.mycomment');
//             //   box.style.width = "300px";
//             //   box.style.height = "200px";
//             //   box.style.backgroundColor = "blue";
//             //   innerdiv.style.width = "300px";
//             //   innerdiv.style.height = "200px";
             
             
//             //   let myclass = document.querySelector('.myclass');
//             //   myclass.style.color = "red";
//             //  myclass.style.marginLeft = "200px";
          
//         }
//     }
    
// })





  

