let color_list = [
  "rgba(248, 202, 18, 1)",
  "rgba(0, 107, 86, 1)",
  "rgba(0, 167, 222, 1)",
  "rgba(0, 108, 146, 1)",
  "rgba(122, 78, 155, 1)",
  "rgba(213, 128, 178, 1)",
  "rgba(226, 116, 16, 1)",
];
let d = new Date();
let day = d.getDay();
let month = d.getMonth() + 1;
let date = d.getDate();

window.onload = function () {
  document.getElementById("dot").style.backgroundColor = color_list[day];
  document.getElementById("date").innerHTML =
    ("0" + month).slice(-2) + "/" + ("0" + date).slice(-2);
  if (checkName() == true) {
    document.getElementById("name").innerHTML = localStorage.getItem("name");
  } else {
    setName();
  }
};

function checkName() {
  if (localStorage.getItem("name")) {
    return true;
  } else {
    return false;
  }
}

function setName() {
  let name;
  while (true) {
    let input = prompt("請輸入姓名：");
    if (input != null && input != "") {
      name = input;
      break;
    }
  }
  localStorage.setItem("name", name);
  document.getElementById("name").innerHTML = localStorage.getItem("name");
}

function resetName() {
  while (true) {
    let input = prompt("請輸入姓名：");
    if (input != null && input != "") {
      name = input;
      break;
    }
  }
  localStorage.setItem("name", name);
  document.getElementById("name").innerHTML = localStorage.getItem("name");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
