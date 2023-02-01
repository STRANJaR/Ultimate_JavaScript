let url = 'https://imdb-api.tprojects.workers.dev/';
let response = fetch(url);

response.then((value) => {
  return value.json();

}).then((contest) => {
  console.log(contest);

  ihtml = "";
  for (item in contest) {
    console.log(contest[item]);
    ihtml = `
        <div class="card" style="width: 18rem;">
        <img src="https://contentstatic.techgig.com/photo/86001236/coding-for-students-learn-with-these-7-apps.jpg?10556" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text">${contest[item].start_time} </p>
          <p class="card-text">${contest[item].end_time} </p>
          <p class="card-text">${contest[item].site} </p>
          <a href="${contest[item].url}" class="btn btn-primary">Visit Here</a>
        </div>
      </div> `
  }

  cardContainer.innerHTML = ihtml;

})

// NOTES APP  --> QUE 2, 3 AND 4       

let n = localStorage.getItem("note");
alert("Your Note is: " + n);
let note = prompt("Enter Your Node", "NEED A CUP OF TEA");
if (note) {

  localStorage.setItem("note", note);
}

let c = confirm("Do you want to delete data ?");
if (c == true) {
  localStorage.removeItem("note");
}
