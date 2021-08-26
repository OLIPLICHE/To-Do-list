/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const arrayList = [{
  description: `Wake up at dome to pray`,
  completed: false,
  index: 4,
},
{
  description: `attend Church service in the morning`,
  completed: false,
  index: 5,
},
{
  description: `dinner with my parents`,
  completed: false,
  index: 9,
},
];
arrayList.sort((a, b) => a.index - b.index);

const listContent = document.getElementById('list');

const showTasList = () => {
  listContent.innerHTML = '';
  for (let i = 0; i < arrayList.length; i++) {
    const rules = arrayList[i];
    const listOfTask = `<li class="item">
    <i class="far fa-square co" job="complete" id="${rules.index}"></i>
    <p class="text">${rules.description}</p>
    <i class="fas fa-ellipsis-v de" job="delete" id="${rules.index}"></i> 
  </li>
    `;
    listContent.innerHTML += listOfTask;
  }
};
window.onload = showTasList;
