/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import './style.css';

const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.getElementById('input');

const CHECK = 'fa-check-square';
const UNCHECK = "fa-square-thin";
const LINE_THROUGH = "lineThrough";

const LIST = [];
    let id = 0;

function addToDo(toDo, id, done, trash) {
  if (trash) { return; }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = ` <li class ="item">
  <i class="far ${DONE} co" job="complete" id="${id}"></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fas fa-ellipsis-v de" job="delete" id="${id}"></i>
  </li>
  `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", checkKeyPress);
function checkKeyPress(key) {
  if (key.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id,
        done: false,
        trash: false,
      });

      id += 1;
    }
  }
}
