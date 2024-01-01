let form = document.getElementById("form");
let section = document.getElementById("section");
let wordCount = document.getElementById("wordcount");
wordcount.innerHTML = 0 + "/" + '300';
let name = document.getElementById("name");
let number = document.getElementById("number");
let email = document.getElementById("email")
let cmnt = document.getElementById("comments");


let warningText = document.getElementById("warningText");

let submit_btn = document.getElementById("submit_button");
let reset_btn = document.getElementById("reset_button");
let next_btn = document.getElementById("next_button");
let back_btn = document.getElementById("back_button");

let loader = document.getElementById("loader");


let rateImage = document.getElementById("rateImage");
let rateImage2 = document.getElementById("rateImage2");
let rateImage3 = document.getElementById("rateImage3");
let rateImage4 = document.getElementById("rateImage4");
let rateImage5 = document.getElementById("rateImage5");

let rateMsg = document.getElementById("rateMsg");

next_btn.addEventListener('click', () => {
  let valTrue = 0;
  let valTrue1 = 0;
  let valTrue2 = 0;
  let result;

  if (name.value.trim() == '' || name.value.trim() == null) {
    warningText.textContent = 'enhdhgchd';
    warningText.style.display = 'block';
  } else {
    warningText.style.display = 'none';
    valTrue = 1;

  }
  if (number.value.trim() == '' || number.value.trim() == null) {
    number_error.style.display = 'inline-block';
  }
  else if (number.value.length !== 10) {
    number_error.innerHTML = "* Enter a valid 10 digit number";

  } else {
    number_error.style.display = 'none';
    valTrue1 = 1;
  }

  if (email.value == '' || email.value == null) {
    email_error.style.display = 'inline-block';

  }
  else {
    email_error.style.display = 'none';
    valTrue2 = 1;

  }
  result = valTrue + valTrue1 + valTrue2;
  if (result == 3) {
    nextButton();
  }
});


function nextButton(windowStop) {
  next_btn.addEventListener('click', () => {
    section.classList.add("section_dis_none");
  })
}

back_btn.addEventListener('click', () => {
  section.classList.remove("section_dis_none");
})

reset_btn.addEventListener('click', () => {
  location.reload();
})
submit_btn.addEventListener('click', () => {
  submitBtn(event);
})

function submitBtn(event) {
  if (cmnt.value == '' || cmnt.value == null) {
    cmnt_error.style.display = 'inline-block';
    event.preventDefault();
  }
  else {
    cmnt_error.style.display = 'none';
    loader.style.display = "block";
  }
}
rateImage.addEventListener('click', () => {
  rateImage2.classList.remove("primarycolor")
  rateImage3.classList.remove("primarycolor")
  rateImage4.classList.remove("primarycolor")
  rateImage5.classList.remove("primarycolor")
  rateImage.classList.add("primarycolor")
  rateMsg.innerHTML = "Awfull"
})

rateImage2.addEventListener('click', () => {
  rateImage.classList.remove("primarycolor")
  rateImage3.classList.remove("primarycolor")
  rateImage4.classList.remove("primarycolor")
  rateImage5.classList.remove("primarycolor")
  rateImage2.classList.add("primarycolor")
  rateMsg.innerHTML = "it's not that good"
})
rateImage3.addEventListener('click', () => {
  rateImage.classList.remove("primarycolor")
  rateImage2.classList.remove("primarycolor")
  rateImage4.classList.remove("primarycolor")
  rateImage5.classList.remove("primarycolor")
  rateImage3.classList.add("primarycolor")
  rateMsg.innerHTML = "It was so average"
})
rateImage4.addEventListener('click', () => {
  rateImage.classList.remove("primarycolor")
  rateImage2.classList.remove("primarycolor")
  rateImage3.classList.remove("primarycolor")
  rateImage5.classList.remove("primarycolor")
  rateImage4.classList.add("primarycolor")
  rateMsg.innerHTML = "It was good"
})
rateImage5.addEventListener('click', () => {
  rateImage.classList.remove("primarycolor")
  rateImage2.classList.remove("primarycolor")
  rateImage3.classList.remove("primarycolor")
  rateImage4.classList.remove("primarycolor")
  rateImage5.classList.add("primarycolor")
  rateMsg.innerHTML = "It was fabulous"
})

cmnt.addEventListener('input', () => {
  let fResult = cmnt.value.length + '/' + '300';
  wordCount.innerHTML = fResult;
  if (cmnt.value.length > 300) {
    wordCount.classList.add('redandshake');
    cmnt.classList.add("commentoutlinered");
  }
  else {
    wordCount.classList.remove('redandshake')
    cmnt.classList.remove("commentoutlinered");
  }

})
cmnt.addEventListener('focus', () => {
  section.classList.add("section_upside");
})
cmnt.addEventListener('focusout', () => {
  section.classList.remove("section_upside");
})



