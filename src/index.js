/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
import './style.css';
import update from './new';

const contentList = [{
  description: `Wake up at dome to pray`,
  completed: false,
  index: 4,
},
{
  description: `attend Church service in the morning`,
  completed: false,
  index: 2,
},
{
  description: `dinner with my parents`,
  completed: false,
  index: 1,
},
];
contentList.sort((a, b) => a.index - b.index);

const myHandleStorage = (items) => {
  localStorage.setItem('myList', JSON.stringify(items));
};
const getElmtFromLocalStorage = () => JSON.parse(localStorage.getItem('myList'));

window.onload = () => {
  const getSetDown = getElmtFromLocalStorage();
  if (getSetDown === null) {
    myHandleStorage(contentList);
  }
  showList();
};

const listContent = document.querySelector('.contentList');
const showList = () => {
  const tList = getElmtFromLocalStorage();
  listContent.innerHTML = '';
  for (let i = 0; i < tList.length; i += 1) {
    const duties = tList[i];
    const list = ` <li class="setDown" id="${duties.index}">
      <input type="checkbox" class="examine" id="list-checkbox" name="list-checkbox" ${duties.completed && 'checked'}>
      <div>${duties.description}</div>
      <span class="icon"><i class="fa fa-ellipsis-v"></i></span> <span class="btn-del"></i></span>
  </li>`;
    listContent.innerHTML += list;
  }

  const examine = document.querySelectorAll('.examine');
  for (let k = 0; k < examine.length; k += 1) {
    examine[k].addEventListener('change', (event) => {
      if (examine[k].checked) {
        examine[k].completed = true;
        update(event.target, tList[k]);
        // event.target.parentNode.classList.toggle('checked');
        myHandleStorage(tList);
      } else {
        examine[k].completed = false;
        update(event.target, tList[k]);
        // event.target.parentNode.classList.remove('checked');
        myHandleStorage(tList);
      }
    });
  }
};
