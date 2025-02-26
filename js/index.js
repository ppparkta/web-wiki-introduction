console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

window.onload = function () {
  document.getElementById('submit').addEventListener('click', e => {
      e.preventDefault();
      const textValue = document.getElementById('comment-content');

      const template = document.querySelector('li');
      if (!template) return;

      const newComment = template.cloneNode(true);

      newComment.querySelector('.comment-content').textContent = textValue.value;
      textValue.value = '';


      const ulTag = document.querySelector('ul');
      ulTag.appendChild(newComment);

      newComment.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}