// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

let countryList = [

  {
    country: "Україна",
    capital:"Київ",
    count: 40000000
  },

  {
    country: "Грузія",
    capital:"Тбілісі",
    count: 10000000
  },

  {
    country: "Великобританія",
    capital:"Лондон",
    count: 100000000
  },

  {
    country: "США",
    capital:"Вашингтон",
    count: 300000000
  }];

let list = document.createElement("table");

countryList.forEach ((obj, i) => {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = i + 1;
  tr.appendChild(td);

  for (let key in obj) {
    let td = document.createElement("td");
    if (obj[key] === "Україна") {
      td.style.color = "blue"
    }
    if (obj[key] === "Київ") {
      td.style.color = "yellow"
    }

    if (key === "count") {
      td.textContent = obj[key] / 1000000 + " млн";
    } else {
      td.textContent = obj[key];
    }

    tr.appendChild(td);
  }

  list.appendChild(tr);
})

document.body.appendChild(list);
