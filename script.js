'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const modalMap = document.querySelector('.modal-map'),
    modalLogin = document.querySelector('.modal-login'),
    mapCloseBtn = modalMap.querySelector('.modal__close-btn'),
    loginCloseBtn = modalLogin.querySelector('.modal__close-btn'),
    loginTrigger = document.querySelector('.header__login-link'),
    mapTriggerFooter = document.querySelector('.map-link'),
    login = modalLogin.querySelector('#user-email'),
    password = modalLogin.querySelector('#user-password'),
    loginForm = modalLogin.querySelector('form');

  const mapTriggerInfo = document.querySelector('[data-mapTrigger]');

  let storage = '',
    isStorageSupport = true;

  try {
    storage = localStorage.getItem('user-login');
  } catch (err) {
    isStorageSupport = false;
  }

  function openModalLogin(triggerBtn, modalWin) {
    triggerBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalWin.classList.remove('is-hide');
      if (storage) {
        login.value = storage;
        password.focus();
      } else {
        login.focus();
      }
    });
  }
  openModalLogin(loginTrigger, modalLogin);

  function openModalMap(triggerBtn, modalWin) {
    triggerBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalWin.classList.remove('is-hide');
    });
  }
  openModalMap(mapTriggerFooter, modalMap);
  openModalMap(mapTriggerInfo, modalMap);

  function closeModal(parrentElement, closeBtn) {
    closeBtn.addEventListener('click', () => {
      parrentElement.classList.add('is-hide');
      modalLogin.classList.remove('modal-error');
    });
  }

  closeModal(modalMap, mapCloseBtn);
  closeModal(modalLogin, loginCloseBtn);

  loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!password.value || !login.value) {
      modalLogin.classList.remove('modal-error');
      void modalLogin.offsetWidth;
      modalLogin.classList.add('modal-error');
      console.log(modalLogin.offsetWidth);
    } else if (isStorageSupport) {
      localStorage.setItem('user-login', login.value);
      alert('Вы вошли. Ваш логин сохранен');
    } else {
      alert('Вы успешно вошли');
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      if (!modalMap.classList.contains('is-hide')) {
        evt.preventDefault();
        modalMap.classList.add('is-hide');
      } else if (!modalLogin.classList.contains('is-hide')) {
        evt.preventDefault();
        modalLogin.classList.add('is-hide');
        modalLogin.classList.remove('modal-error');
      }
    }
  });
});
