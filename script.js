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
let defaultName = "undefine"

window.onload = function () {
  document.getElementById("dot").style.backgroundColor = color_list[day];
  document.getElementById("date").innerHTML =
    ("0" + month).slice(-2) + "/" + ("0" + date).slice(-2);
  if (checkName()) {
    document.getElementById("name").innerHTML = localStorage.getItem("name");
  } else {
    setName(defaultName, false, "輸入名稱有誤，捲動到頁面底部進行名稱更改")
  }
};

checkName = () => localStorage.getItem("name")

function setName(input, showLog, errorMsg) {
  let name =  (input != null && input != "")
    ? input : showLog ? window.alert(errorMsg) : defaultName;
  localStorage.setItem("name", name);
  document.getElementById("name").innerHTML = localStorage.getItem("name");
}

function resetName() {
  setName(window.prompt("請輸入姓名"), true, "輸入名稱有誤，請重新輸入")
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearData() {
  setName(null, false, "null");
  window.alert("個人資料已成功清除");
}