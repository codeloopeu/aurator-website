import $ from 'jquery';
import {
  setPhotoPosition, setPhotoPositionAfterLoading, setTopFullscreen, toggleMobileMenu,
  hideMobileMenuForDesktop, hideMobileMenuOnClick, setContactPosition, toggleLangDropdown,
  hideLangDropdownOutsideClick, setFormFullscreen, showContactFormOnClick, showPhoneFormOnClick,
  hideFormOnClick, hideAlertOnClick
} from 'js/layout';
import { translateOnInit, translateOnClick } from 'js/lang';
import { debounce, showModalOnClick, hideModalOnClick } from 'js/utils';
import { sendMessage, sendPhoneNo } from 'js/msgs';

require('css/main.scss');

window.jQuery = $; window.$ = $;
require('bootstrap');

$(document).ready(() => {
  translateOnInit();
  setTopFullscreen();
  setPhotoPositionAfterLoading();
  toggleMobileMenu();
  hideMobileMenuOnClick();
  setContactPosition();
  toggleLangDropdown();
  hideLangDropdownOutsideClick();
  translateOnClick();
  setFormFullscreen();
  showContactFormOnClick();
  showPhoneFormOnClick();
  hideFormOnClick();
  hideAlertOnClick();
  sendMessage();
  sendPhoneNo();
  showModalOnClick();
  hideModalOnClick();

  $(window).on('resize', debounce(() => {
    setTopFullscreen();
    setPhotoPosition();
    hideMobileMenuForDesktop();
    setContactPosition();
    setFormFullscreen();
  }, 50));
});
