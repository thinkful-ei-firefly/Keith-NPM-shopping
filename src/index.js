/* global shoppingList, store, api */
import $ from 'jquery';
import store from './store.js';
import shoppingList from './shopping-list.js';
import api from './api.js';
import './index.css';


$(document).ready(function() {
  shoppingList.bindEventListeners();
  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

