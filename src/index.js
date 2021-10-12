import './sass/styles.css';
import menuMarkup from './menu-item.hbs';
import infoMenuCard from './menu.json';

// Варианты тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
};

// Вставляет разметку на страницу
refs.menu.insertAdjacentHTML('beforeend', menuMarkup(infoMenuCard));

const toggleTheme = () => {
  // Переключает темы
  switch (document.body.className) {
    case Theme.DARK:
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);
      break;

    default:
      document.body.classList.remove(Theme.LIGHT);
      document.body.classList.add(Theme.DARK);
      break;
  }

  // Сохраняет выбор темы
  localStorage.setItem('theme', document.body.className);
};

// Слушает переключатель тем
refs.themeSwitchToggle.addEventListener('change', toggleTheme);

// Если тема есть, то прочитает ее
if (localStorage.getItem('theme')) document.body.classList.add(localStorage.getItem('theme'));

// Проверяет правильное положени переключателя тем
if (localStorage.getItem('theme') === Theme.DARK)
  refs.themeSwitchToggle.setAttribute('checked', true);