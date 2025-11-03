
let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

let books = JSON.parse(localStorage.getItem('books')) || bookStore.books;


const formBook = document.getElementById('formBook');
const tbodyBook = document.getElementById('tbodyBook');
const categoryFilter = document.getElementById('categoryFilter');

function renderTable(){
    tbodyBook.innerHTML = '';
   
        const categoryFilter = document.getElementById('categoryFilter').value;
        const filterCategory = books.filter(b=>b.category == categoryFilter);
        
        filterCategory.forEach(b=>{
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
        books.push({title,author,price,category});
        updateLocalStorage();

        formBook.reset();
    }
    renderTable();


})

function updateLocalStorage(){
    localStorage.setItem('books',JSON.stringify(books));
}


categoryFilter.addEventListener('change',renderTable);

renderTable();
