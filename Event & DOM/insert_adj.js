// Insert adjasent HTML/TEXT/ELEMENT
let x = document.getElementById("first");

x.insertAdjacentHTML('beforeBegin', '<div id="test">BeforeBegin</div>');
x.insertAdjacentHTML('beforeEnd', '<div id="test">BeforeEnd</div>');
x.insertAdjacentHTML('afterBegin', '<div id="test">AfterBegin</div>');
x.insertAdjacentHTML('afterEnd', '<div id="test">AfterEnd</div>');

// Node removal
x.remove();
