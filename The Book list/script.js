var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
  ];
  var bookList = JSON.stringify(books);

 document.querySelector(".first").innerHTML = books[0];