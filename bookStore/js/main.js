let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

const formBook = document.getElementById('formBook');
const tbodyBook = document.getElementById('tbodyBook');
const categoryFilter = document.getElementById('categoryFilter');

function renderTable(){
    tbodyBook.innerHTML = '';
    bookStore.books.forEach(b=>{
        
    
        const tr = document.createElement('tr');
        tbodyBook.appendChild(tr);

        const tdTitle = document.createElement('td');
        tdTitle.textContent=b.title;

        const tdAuthor = document.createElement('td');
        tdAuthor.textContent=b.author;

        const tdPrice = document.createElement('td');
        tdPrice.textContent=b.price;

        const tdCategory = document.createElement('td');
        tdCategory.textContent=b.category;

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPrice);
        tr.appendChild(tdCategory);

        




    })
}

formBook.addEventListener('submit',(event)=>{
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;

    if(title && author && price>0 && category){
        bookStore.books.push({title,author,price,category});
        formBook.reset();
    }
    renderTable();

})




function filterCategory(book){
    const categoryFilter = document.getElementById('categoryFilter').value;
    return book.filter(b=>b.category===categoryFilter);
}

renderTable();
