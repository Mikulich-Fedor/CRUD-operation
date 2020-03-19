//button
var sub = document.getElementById("sub");
var leftBox = document.getElementById("leftBox");
var rightBox = document.getElementById("rightBox");
var arrUser = [];

sub.addEventListener("click", function() {
  //Сбор данных
  var name = document.getElementById("name").value,
    lastName = document.getElementById("lastName").value,
    gender = document.getElementById("gender").value,
    mail = document.getElementById("mail").value,
    work = document.getElementById("work").value,
    position = document.getElementById("position").value,
    experience = document.getElementById("experience").value,
    wife = document.getElementById("wife").value,
    children = document.getElementById("children").value,
    //создание сохроненной области
    container = document.createElement("div"),
    infoUserContakt = document.createElement("div"),
    infoUserWork = document.createElement("div"),
    infoUserFamily = document.createElement("div"),
    savBn = document.createElement("div"),
    inpMore = document.createElement("input"),
    inpUpdate = document.createElement("input"),
    inpClear = document.createElement("input");
  //строки для вывода
  spanForName = document.createElement("span");
  spanForLastName = document.createElement("span");
  spanForGender = document.createElement("span");
  spanForMail = document.createElement("span");
  spanForWork = document.createElement("span");
  spanForPosition = document.createElement("span");
  spanForExperience = document.createElement("span");
  spanForWife = document.createElement("span");
  spanForChildren = document.createElement("span");

  //Классы и id для элементов
  container.id = "container";
  infoUserContakt.id = "infoUserContakt";
  infoUserWork.id = "infoUserWork";
  infoUserFamily.id = "infoUserFamily";
  savBn.id = "savBn";
  infoUserContakt.classList += "container_infoUser";
  infoUserWork.classList += "container_infoUser";
  infoUserFamily.classList += "container_infoUser";
  savBn.classList += "container_infoUser";
  inpMore.id = "More";
  inpUpdate.id = "Update";
  inpClear.id = "Clear";

  // input Редактирования и удыления;
  inpMore.value = "Добавить еще";
  inpUpdate.value = "Редактировать";
  inpClear.value = "Удалить";

  //Вывод в HTML
  rightBox.style.display = "flex";
  leftBox.style.display = "none";
  infoUserContakt.innerHTML = `Информация о клиенте:`;
  infoUserWork.innerHTML = `Информация о работе:`;
  infoUserFamily.innerHTML = `Информация о семье:`;

  rightBox
    .appendChild(container)
    .append(infoUserContakt, infoUserWork, infoUserFamily, savBn);
  savBn.appendChild(inpMore);
  savBn.appendChild(inpUpdate);
  savBn.appendChild(inpClear);
  infoUserContakt.appendChild(spanForName);
  infoUserContakt.appendChild(spanForLastName);
  infoUserContakt.appendChild(spanForGender);
  infoUserContakt.appendChild(spanForMail);
  infoUserWork.appendChild(spanForWork);
  infoUserWork.appendChild(spanForPosition);
  infoUserWork.appendChild(spanForExperience);
  infoUserFamily.appendChild(spanForWife);
  infoUserFamily.appendChild(spanForChildren);

  class User {
    constructor(options) {
      this.name = name;
      this.lastName = lastName;
      this.gender = gender;
      this.mail = mail;
      this.work = work;
      this.position = position;
      this.experience = experience;
      this.wife = wife;
      this.children = children;
    }
    get Contakt() {
      return (
        (spanForName.innerHTML = `Имя: ${this.name}`),
        (spanForLastName.innerHTML = `Фамилия: ${this.lastName}`),
        (spanForGender.innerHTML = `Пол: ${this.gender}`),
        (spanForMail.innerHTML = `Mail: ${this.mail}`)
      );
    }

    get Work() {
      return (
        (spanForWork.innerHTML = `Работа: ${this.work}`),
        (spanForPosition.innerHTML = `Должность: ${this.position}`),
        (spanForExperience.innerHTML = `Опыт: ${this.experience}`)
      );
    }
    get Family() {
      return (
        (spanForWife.innerHTML = `Супруг(га): ${this.wife}`),
        (spanForChildren.innerHTML = `Дети: ${this.children}`)
      );
    }
  }

  //inpMore
  inpMore.addEventListener("click", function() {
    leftBox.style.display = "flex";
    rightBox.style.display = "flex";
    event.stopPropagation();
  });

  // update;
  inpUpdate.addEventListener("click", function() {
    leftBox.style.display = "flex";
    rightBox.style.display = "flex";
    document.getElementById("name").value = user.name;
    document.getElementById("lastName").value = user.lastName;
    document.getElementById("gender").value = user.gender;
    document.getElementById("mail").value = user.mail;
    document.getElementById("work").value = user.work;
    document.getElementById("position").value = user.position;
    document.getElementById("experience").value = user.experience;
    document.getElementById("wife").value = user.wife;
    document.getElementById("children").value = user.children;
    container.remove();
    event.stopPropagation();
  });

  // inpClear;
  inpClear.addEventListener("click", function() {
    var question = confirm(`Вы точно хотите удалить?`);
    leftBox.style.display = "flex";
    rightBox.style.display = "flex";
    if (question) {
      container.remove();
      event.stopPropagation();
    } else {
      false;
    }
    event.stopPropagation();
  });

  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("gender").value = "Не выбран";
  document.getElementById("mail").value = "";
  document.getElementById("work").value = "";
  document.getElementById("position").value = "";
  document.getElementById("experience").value = "";
  document.getElementById("wife").value = "";
  document.getElementById("children").value = "Нет";

  let user = new User({});
  user.Contakt;
  user.Work;
  user.Family;

  arrUser.push(user);
  event.stopPropagation();
});
console.log(arrUser);
