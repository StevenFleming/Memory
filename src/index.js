import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { defineCards } from './js/interfacelogic.js';
import { randomizePairs } from './js/interfacelogic.js';
import { displayPairs } from './js/interfacelogic.js';

$(document).ready(function() {
  let cards = defineCards(4);
  let arr = randomizePairs(cards);
  displayPairs(arr);
});