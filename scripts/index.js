// WEEKEND COUNTER

const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
const date = new Date();
const checkNow = document.querySelector("#checkNow");
document.querySelector("#weekendtitle").innerHTML = "WEEKEND FINDER";

const getDayName = () => {
  return date.toLocaleDateString("en-EN", {
    weekday: "long",
  });
};

function weekend(e) {
  e.preventDefault();
  const userName = document.querySelector("#userName").value;
  const result = document.querySelector(".result");
  if (userName != "") {
    result.innerHTML = `Hey ${userName}, Today is ${getDayName()}, ${
      5 - date.getDay()
    } days let till weekend`;
  } else {
    document.querySelector("#userName").placeholder = "Do it now";
  }
}
checkNow.addEventListener("click", weekend);

// NUMBER CONVERTER

document.querySelector("#convertertitle").innerHTML = "NUMBER CONVERTER";

// BEFORE AFTER PICTURE
document.querySelector("#beforeaftertitle").innerHTML = "BEFORE AFTER PICTURE";
const image = document.querySelector(".foreground-img");

function imageslider(e) {
  const sliderPos = document.querySelector("#slider").on("input change").target
    .value;
  image.style.width = sliderPos;
}
