document.addEventListener('DOMContentLoaded', function () {
  // Функция для скрытия и показа элементов
  function handleVisibility(group) {
    const items = group.querySelectorAll('.custom-catalog-filter__item');
    const maxVisibleItems = 5;

    // Проверяем, есть ли больше 5 элементов
    if (items.length > maxVisibleItems) {
      // Изначально скрываем все элементы после 5-го
      items.forEach((item, index) => {
        if (index >= maxVisibleItems) {
          item.classList.add('hide-now');
        }
      });

      // Создаем кнопку "Еще"
      const moreButton = document.createElement('button');
      moreButton.classList.add('custom-catalog-filter__more-button');
      moreButton.type = 'button';
      updateMoreButtonText(moreButton, items.length - maxVisibleItems);
      group.appendChild(moreButton); // Добавляем кнопку в группу

      // Добавляем обработчик клика для кнопки "Еще"
      moreButton.addEventListener('click', function () {
        const isExpanded = moreButton.classList.contains('expanded');

        if (isExpanded) {
          // Если развернуто - скрываем все элементы после 5-го
          items.forEach((item, index) => {
            if (index >= maxVisibleItems) {
              item.classList.add('hide-now');
            }
          });
          updateMoreButtonText(moreButton, items.length - maxVisibleItems);
          moreButton.classList.remove('expanded');
        } else {
          // Если не развернуто - показываем все элементы
          items.forEach(item => item.classList.remove('hide-now'));
          moreButton.textContent = 'Свернуть список';
          moreButton.classList.add('expanded');
        }
      });
    }
  }

  // Функция для обновления текста кнопки
  function updateMoreButtonText(button, hiddenItemsCount) {
    button.innerHTML = `Еще <span>${hiddenItemsCount}</span>`;
  }

  // Получаем все группы фильтров
  const filterGroups = document.querySelectorAll('.custom-catalog-filter__group');

  // Применяем логику для каждой группы
  filterGroups.forEach(group => {
    handleVisibility(group);
  });
});
