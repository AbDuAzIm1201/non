let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let wrapper = document.querySelector(".right");
let select = document.querySelector(".select");
let sort = document.querySelector(".sort");

// btn.addEventListener("click", function () {
//   wrapper.innerHTML = "";
//   if (input.value == "") {
//     movies.map((kino) => {
//       let card = document.createElement("div");
//       card.classList.add("card");
//       let img = document.createElement("img");
//       let p1 = document.createElement("p");
//       let p2 = document.createElement("p");
//       let p3 = document.createElement("p");
//       let p4 = document.createElement("p");
//       img.src = kino.smallThumbnail;
//       p1.innerHTML = kino.title;
//       p2.innerHTML = kino.year;
//       p3.innerHTML = kino.categories;
//       p4.innerHTML = kino.imdbRating;
//       card.append(img, p1, p2, p3, p4);
//       wrapper.appendChild(card);
//     });
//   } else {
//     let filtrlangan_kinolar = movies.filter((kino) =>
//       kino.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())
//     );
//     filtrlangan_kinolar.map((kino) => {
//       let card = document.createElement("div");
//       card.classList.add("card");
//       let img = document.createElement("img");
//       let p1 = document.createElement("p");
//       let p2 = document.createElement("p");
//       let p3 = document.createElement("p");
//       let p4 = document.createElement("p");
//       img.src = kino.smallThumbnail;
//       p1.innerHTML = kino.title;
//       p2.innerHTML = kino.year;
//       p3.innerHTML = kino.categories;
//       p4.innerHTML = kino.imdbRating;
//       card.append(img, p1, p2, p3, p4);
//       wrapper.appendChild(card);
//     });
//   }
// });

// select.addEventListener("change", function(){
// wrapper.innerHTML= ""
// let filterlangan_array = movies.filter(kino => kino.categories.includes(select.value))
// filterlangan_array.map((kino) =>{

//   let card = document.createElement("div");
//   card.classList.add("card");
//   let img = document.createElement("img");
//   let p1 = document.createElement("p");
//   let p2 = document.createElement("p");
//   let p3 = document.createElement("p");
//   let p4 = document.createElement("p");
//   img.src = kino.smallThumbnail;
//   p1.innerHTML = kino.title;
//   p2.innerHTML = kino.year;
//   p3.innerHTML = kino.categories;
//   p4.innerHTML = kino.imdbRating;
//   card.append(img, p1, p2, p3, p4);
//   wrapper.appendChild(card);
// })
// })

// sort .addEventListener("change", function(){
//    let pustoy_array =[]
//    if(sort.value = "az"){
//     pustoy_array = movies.filter(a,b)
//    }

// })



btn.addEventListener("click", function () {
  wrapper.innerHTML = "";
  if (input.value == "") {
    movies.map((kino) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      img.src = kino.smallThumbnail;
      p1.innerHTML = kino.title;
      p2.innerHTML = kino.year;
      p3.innerHTML = kino.categories;
      p4.innerHTML = kino.imdbRating;
      card.append(img, p1, p2, p3, p4);
      wrapper.appendChild(card);
    });
  } else {
    let filtrlangan_kinolar = movies.filter((kino) =>
      kino.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())
    );
    filtrlangan_kinolar.map((kino) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      img.src = kino.smallThumbnail;
      p1.innerHTML = kino.title;
      p2.innerHTML = kino.year;
      p3.innerHTML = kino.categories;
      p4.innerHTML = kino.imdbRating;
      card.append(img, p1, p2, p3, p4);
      wrapper.appendChild(card);
    });
  }
});


select.addEventListener("change", function(){
  wrapper.innerHTML = ""
  let filtrlangan_array = movies.filter(kino => kino.categories.includes(select.value))
   filtrlangan_array.map((kino) => {
     let card = document.createElement("div");
     card.classList.add("card");
     let img = document.createElement("img");
     let p1 = document.createElement("p");
     let p2 = document.createElement("p");
     let p3 = document.createElement("p");
     let p4 = document.createElement("p");
     img.src = kino.smallThumbnail;
     p1.innerHTML = kino.title;
     p2.innerHTML = kino.year;
     p3.innerHTML = kino.categories;
     p4.innerHTML = kino.imdbRating;
     card.append(img, p1, p2, p3, p4);
     wrapper.appendChild(card);
   });
})

sort.addEventListener("change", function(){
  wrapper.innerHTML = ""
  let pustoy_array = []

  if(sort.value == "az"){
    pustoy_array = movies.sort((a,b) => a.title.localeCompare(b.title))
  }else if ((sort.value == "za")){
    pustoy_array = movies.sort((a, b) => b.title.localeCompare(a.title))
  }

    pustoy_array.map((kino) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      img.src = kino.smallThumbnail;
      p1.innerHTML = kino.title;
      p2.innerHTML = kino.year;
      p3.innerHTML = kino.categories;
      p4.innerHTML = kino.imdbRating;
      card.append(img, p1, p2, p3, p4);
      wrapper.appendChild(card);
    });

})