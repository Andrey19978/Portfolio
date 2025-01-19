// Создаем объект group
let group = {
  // Свойство title
  title: "Our Group",
  
  // Свойство students - массив строк
  students: ["John", "Pete", "Alice"],
  
  // Метод showList
  showList() {
    // Используем метод forEach для массива students
    this.students.forEach(
      // Функция для каждого элемента в массиве
      student => {
        // Выводим сообщение с названием группы и именем студента
        alert(this.title + ': ' + student)
      }
    );
  }
};

// Вызываем метод showList
group.showList();