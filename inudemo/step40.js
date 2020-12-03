function dateFunc() {
  let dateObj = new Date();
  let table = new Array('日','月','火','水','木','金','土');

  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  let day = dateObj.getDay();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();

  let message = year + '年' + month + '月' + date + '日' +
                table[day] + '曜日' + hours + '時' + minutes + '分' + seconds + '秒';
  document.write('ただ今',message);
  }