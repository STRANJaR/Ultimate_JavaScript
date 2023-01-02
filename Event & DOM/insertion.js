let x = document.getElementsByTagName("div")[0];
// x.innerHTML = x.innerHTML + '<h1>Hello World</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
// x.appendChild(div);
// x.prepend(div);
// x.before(div);
// x.after(div); 
x.replaceWith(div);

  