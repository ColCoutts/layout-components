import styles from './index.css';

const root = document.getElementById('root');
const ul = document.createElement('ul');
ul.className = styles.dogs;
ul.textContent = 'does this work';

const dogs = ['spot', 'stupid', 'dumb', 'face'];

dogs.forEach(dog => {
  const li = document.createElement('li');
  li.textContent = dog;
  ul.appendChild(li);
  root.appendChild(ul);
});
