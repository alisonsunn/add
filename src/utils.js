// check input number or not
function isNumber(input) {
  return input === +input;
}

// check input is true or not 
function isTruly(input) {
  if (input.includes(" ")) {
    return false;
  }

  if ((input === 0) || (input) ) {
    return true;
  } 
  return false; 
}

// check input repeated or not
function notRepeated(input,list) {
  for (let i=0; i<list.length; i++) {
    if (input === list[i]) {
      return false;
    }
  }
  return true;
}

// repeated notion 
const button = document.querySelector(".button")
const noticeBlock = document.querySelector("#notice")

function notice(input, isRepeated) {
  if (isRepeated) {
    if (isNumber(input)) {
      noticeBlock.textContent = "number existed!"
      noticeBlock.style.display = "block"
  } else {
    noticeBlock.textContent = "string existed!"
    noticeBlock.style.display = "block"
  }
} else {
  noticeBlock.style.display = "none"
}
}

// sort list
function sortNumberList(list) {
  list.sort((a,b) => a-b)
  return list;
}

function sortStringList(list) {
  let newList = list.map(element => element.toLowerCase())
  newList.sort()
  return newList;
}

// append content into table
function appendInput(list,tbody) { 
  tbody.innerHTML = ""

  list.forEach((element,index) => {
    const th = document.createElement("th")
    const td = document.createElement("td")
    const tr = document.createElement("tr")

    th.textContent = index + 1
    td.textContent = element

    tr.append(th,td)
    tbody.append(tr)
  });
}

export{isNumber, isTruly, notRepeated, notice, sortNumberList, sortStringList, appendInput}