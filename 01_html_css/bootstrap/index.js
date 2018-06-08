// var fred = ["fred", "flintstone", "g@gmil.com", 50]

// console.log('length = ', fred.length);

// var linebreak = "<br>";

// for(var i in fred){
// if (i==0) 
//  console.log('First Name:', fred[i])
//  else if (i==1)
//   console.log('Last Name', fred[i])
//  else if (i==2)
//   console.log('Email:', fred[i])
//  else 
///  console.log('Age:',fred[i])


// }

//document.querySelector("h1").innertext="asdfsdfsdf";

// for (var i in fred){
//    console.log(fred[i]);
//  console.log(i);
//


var imgElem = document.createElement('img');
imgElem.setAttribute('src', '/dog.jpg');
imgElem.classList.add('small-bottle');
var here = document.body.querySelector('#here')
here.appendChild(imgElem)


function createBottle() {   //can put imageName
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', '/dog.jpg');  //can put imageName
    imgElem.classList.add('small-bottle');
  
    return (imgElem);
}
var here = document.body.querySelector('#here');
var bottle;

for (var i=0; i <100, i++){
    var bottle = createBottle();   
    here.appendChild(imgElem)
}

//
for (var i=0; i <100, i++){
    if ((i % 2) == 0)
    var bottle = createBottle('/images/dog.jpg');
    else
    var bottle = createBottle('/images/pig.jpg');
    here.appendChild(imgElem)
}
