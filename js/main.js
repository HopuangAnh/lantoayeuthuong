import { swiperModules } from './modules/swiper.js';
import { showCate } from './modules/category.js';
import { showNav } from './modules/showNav.js';
import { stickyHeader } from './modules/stickyHead.js';
import { searchBtn } from './modules/searchbtn.js';
import { rangerPrice } from './modules/rangerDemo.js';
import { tabPanel } from './modules/tabPanel.js';
import { showMenuprd } from './modules/showMenu.js';
import { increaseInput } from './modules/increaseInput.js';
import { selectProvincial } from './modules/selectCity.js';
import { enventAll } from './modules/eventDom.js';
import { backTop } from './modules/backTop.js';


$(document).ready(function () {
  swiperModules();
  showCate();
  showNav();
  stickyHeader();
  searchBtn();
  showMenuprd();
  // rangerPrice();
  tabPanel();
  increaseInput(".quantity-box .amount-minus", ".quantity-box .amount .amount-plus", ".quantity-box .amount .input");
  selectProvincial(".payment-left-info .form-container .form-provincial .select");
  selectProvincial(".payment-left-info .form-container .form-provincial .select-2");
  selectProvincial(".hotline");
  enventAll();
  backTop();
  AOS.init();
});


