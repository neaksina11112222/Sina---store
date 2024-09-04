const books = [
    { title: "Book One", author: "Author One", price: "$10", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Book Two", author: "Author Two", price: "$15", image: "book.jpg" },
    { title: "Bag", author: "Author Two", price: "$75", image: "bag.webp" },
    { title: "Bag", author: "Author Two", price: "$75", image: "bag.webp" },
    { title: "cherry", author: "Author Two", price: "$75", image: "cerry.jpg" },
    { title: "cherry", author: "Author Two", price: "$75", image: "cerry.jpg" },
    { title: "cherry", author: "Author Two", price: "$75", image: "cerry.jpg" },
    { title: "cherry", author: "Author Two", price: "$75", image: "cerry.jpg" },
    { title: "grap", author: "From cambodia ", price: "$75",  image: "grapjpg.jpg" },
    { title: "grap", author: "From cambodia ", price: "$75",  image: "grapjpg.jpg" },
    { title: "grap", author: "From cambodia ", price: "$75",  image: "grapjpg.jpg" },
    { title: "grap", author: "From cambodia ", price: "$75",  image: "grapjpg.jpg" },
    { title: "grap", author: "From cambodia ", price: "$75",  image: "grapjpg.jpg" },
    { title: "grap", author: "From cambodia ", price: "$75",   image: "grapjpg.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "apple", author: "From cambodia ", price: "$25",   image: "apple.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Dragon Fruits", author: "From cambodia ", price: "$45",   image: "dragon.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Blue berry", author: "From cambodia ", price: "$65",   image: "blubery.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Pineapple", author: "From cambodia ", price: "$15",   image: "pineapple.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Oranges ", author: "From cambodia ", price: "$15",   image: "orange.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
    { title: "Respberry ", author: "From cambodia ", price: "$15",   image: "red.jpg" }, 
 

];

const searchBar = document.getElementById('searchBar');
const bookList = document.getElementById('bookList');
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    bookList.innerHTML = '';

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    filteredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.price}</p>
        `;
        bookList.appendChild(bookElement);
    });
});
