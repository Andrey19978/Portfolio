document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.ant-carousel-element');
    const totalItems = items.length;
    let currentIndex = 0;

    // Функция для отображения трех изображений одновременно
    function showItems() {
        items.forEach((item) => {
            item.style.display = 'none'; // Скрыть все элементы
        });
        for (let i = 0; i < 3; i++) {
            const indexToShow = (currentIndex + i) % totalItems; // Циклический переход
            items[indexToShow].style.display = 'block'; // Показать три элемента
        }
    }

    // Функция для автоматического перелистывания
    function nextSlide() {
        currentIndex += 1; // Перейти к следующему изображению
        showItems();
    }

    // Создание навигационных квадратов
    const navContainer = document.createElement('div');
    navContainer.classList.add('carousel-nav');
    const hiderContainer = document.querySelector('.ant-carousel-hider'); // Получаем контейнер
    for (let i = 0; i < Math.ceil(totalItems / 3); i++) {
        const navDot = document.createElement('div');
        navDot.classList.add('nav-dot');
        navDot.addEventListener('click', () => {
            currentIndex = i * 3; // Установить текущий индекс на выбранный квадрат
            showItems();
        });
        navContainer.appendChild(navDot); // Добавить навигационный квадрат в контейнер
    }
    hiderContainer.appendChild(navContainer); // Добавить навигацию в основной контейнер

    // Запуск автоматического перелистывания каждые 5 секунд
    setInterval(nextSlide, 5000);
    showItems(); // Показать первые три изображения
});

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
