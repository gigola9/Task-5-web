function roundNumber(number, state) {
  if (state) {
    return Math.round(number);
  } else {
    return Math.floor(number);
  }
}
console.log(roundNumber(1.6, true));
console.log(roundNumber(1.6, false));

function randomNumber(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}
console.log(randomNumber(100, 200));

function returnN(a, b) {
  return b[a - 1];
}
console.log(returnN(3, [1, 3, 4, 5, 6]));

function showFourPhoto(photoList) {
  const maxLength = photoList.length;
  const imageIndexes = [];
  while (imageIndexes.length < 4) {
    let i = Math.floor(Math.random() * maxLength);
    if (!imageIndexes.includes(i)) {
      imageIndexes.push(i);
    }
  }
  for (let i = 0; i < imageIndexes.length; i++) {
    var images = document.getElementById("photos");
    var newImage = document.createElement("img");
    newImage.src = photoList[imageIndexes[i]];
    images.appendChild(newImage);
  }
}
showFourPhoto([
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
]);

function randomDay(photoList) {
  const imageIndexes = Math.floor(Math.random() * photoList.length);
  const days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი"];
  const day = days[Math.floor(Math.random() * days.length)];
  var div = document.getElementById("random-day");
  var newImage = document.createElement("img");
  newImage.src = photoList[imageIndexes];
  var newText = document.createElement("p");
  newText.innerHTML = day;
  div.appendChild(newText);
  div.appendChild(newImage);
}
randomDay([
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
]);

function createTable(photoList) {
  var body = document.getElementById("table");
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < 4; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
      var cell = document.createElement("td");
      var newImage = document.createElement("img");
      newImage.src = photoList[Math.floor(Math.random() * photoList.length)];
      cell.appendChild(newImage);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
}
createTable(imageListt);

function createTableWitImages() {
  const rowValue = parseInt(document.getElementById("rows").value);
  const columnsValue = parseInt(document.getElementById("columns").value);
  const imageValue = parseInt(document.getElementById("images").value);
  const newImageList = imageListt.slice(0, imageValue);

  var body = document.getElementById("table-images");
  const e = document.querySelectorAll("table");

  body.removeChild(e[e.length - 1]);
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < columnsValue; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < rowValue; j++) {
      var cell = document.createElement("td");
      if (newImageList.length > 0) {
        var newImage = document.createElement("img");
        newImage.src = newImageList.pop();
        cell.appendChild(newImage);
      }
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
}

imageListt = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
];
