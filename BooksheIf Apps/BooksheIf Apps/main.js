document.addEventListener('DOMContentLoaded', function () {
    const inputBookForm = document.getElementById('inputBook');
    const searchBookForm = document.getElementById('searchBook');
    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');
  
    const booksKey = 'bookshelf_books';
    let books = JSON.parse(localStorage.getItem(booksKey)) || [];
  
    function saveBooks() {
      localStorage.setItem(booksKey, JSON.stringify(books));
    }
  
    function renderBooks() {
      incompleteBookshelfList.innerHTML = '';
      completeBookshelfList.innerHTML = '';
  
      books.forEach(book => {
        const article = document.createElement('article');
        article.classList.add('book_item');
  
        const h3 = document.createElement('h3');
        h3.textContent = book.title;
        article.appendChild(h3);
  
        const authorPara = document.createElement('p');
        authorPara.textContent = `Penulis: ${book.author}`;
        article.appendChild(authorPara);
  
        const yearPara = document.createElement('p');
        yearPara.textContent = `Tahun: ${book.year}`;
        article.appendChild(yearPara);
  
        const actionDiv = document.createElement('div');
        actionDiv.classList.add('action');
  
        const moveButton = document.createElement('button');
        moveButton.textContent = book.isComplete ? 'Belum selesai di Baca' : 'Selesai dibaca';
        moveButton.className = book.isComplete ? 'green' : 'red';
        moveButton.onclick = () => moveBook(book.id);
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus buku';
        deleteButton.className = 'red';
        deleteButton.onclick = () => deleteBook(book.id);
  
        actionDiv.appendChild(moveButton);
        actionDiv.appendChild(deleteButton);
        article.appendChild(actionDiv);
  
        if (book.isComplete) {
          completeBookshelfList.appendChild(article);
        } else {
          incompleteBookshelfList.appendChild(article);
        }
      });
    }
  
    function addBook(title, author, year, isComplete) {
      const id = +new Date();
      const newBook = { id, title, author, year: parseInt(year), isComplete };
      books.push(newBook);
      saveBooks();
      renderBooks();

      console.log('New Book:', newBook);
    }
    
    function moveBook(bookId) {
      const index = books.findIndex(book => book.id === bookId);
      if (index !== -1) {
        books[index].isComplete = !books[index].isComplete;
        saveBooks();
        renderBooks();
      }
    }
  
    function deleteBook(bookId) {
      books = books.filter(book => book.id !== bookId);
      saveBooks();
      renderBooks();
    }
  
    function searchBook(title) {
      const filteredBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
      renderFilteredBooks(filteredBooks);
    }
  
    function renderFilteredBooks(filteredBooks) {
      incompleteBookshelfList.innerHTML = '';
      completeBookshelfList.innerHTML = '';
  
      filteredBooks.forEach(book => {
        const article = document.createElement('article');
        article.classList.add('book_item');
  
        const h3 = document.createElement('h3');
        h3.textContent = book.title;
        article.appendChild(h3);
  
        const authorPara = document.createElement('p');
        authorPara.textContent = `Penulis: ${book.author}`;
        article.appendChild(authorPara);
  
        const yearPara = document.createElement('p');
        yearPara.textContent = `Tahun: ${book.year}`;
        article.appendChild(yearPara);
  
        const actionDiv = document.createElement('div');
        actionDiv.classList.add('action');
  
        const moveButton = document.createElement('button');
        moveButton.textContent = book.isComplete ? 'Belum selesai di Baca' : 'Selesai dibaca';
        moveButton.className = book.isComplete ? 'green' : 'red';
        moveButton.onclick = () => moveBook(book.id);
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus buku';
        deleteButton.className = 'red';
        deleteButton.onclick = () => deleteBook(book.id);
  
        actionDiv.appendChild(moveButton);
        actionDiv.appendChild(deleteButton);
        article.appendChild(actionDiv);
  
        if (book.isComplete) {
          completeBookshelfList.appendChild(article);
        } else {
          incompleteBookshelfList.appendChild(article);
        }
      });
    }
  
    inputBookForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const title = document.getElementById('inputBookTitle').value;
      const author = document.getElementById('inputBookAuthor').value;
      const year = document.getElementById('inputBookYear').value;
      const isComplete = document.getElementById('inputBookIsComplete').checked;
      addBook(title, author, year, isComplete);
  
      document.getElementById('inputBookTitle').value = '';
      document.getElementById('inputBookAuthor').value = '';
      document.getElementById('inputBookYear').value = '';
      document.getElementById('inputBookIsComplete').checked = false;
    });
  
    searchBookForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchTitle = document.getElementById('searchBookTitle').value.trim();
      if (searchTitle !== '') {
        searchBook(searchTitle);
      } else {
        renderBooks();
      }
    });
  
    renderBooks();
  });
  