import { inventory, addItem, removeItem, updateTotalItems } from "./inventory.js";

// HTML elements

const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const addProductForm = document.getElementById('addProduct');
const tbody = document.querySelector('tbody');

function addRow({name, quantity, price}){
    const newRow = document.createElement('tr');
    //Name
    const newNameCell = document.createElement('td');
    newNameCell.textContent = name;
    //Quantity
    const newQuantityCell = document.createElement('td');
    newQuantityCell.textContent = quantity;
    //Price
    const newPriceCell = document.createElement('td');
    newPriceCell.textContent = price;
    //Actions
    //delete
    const newActionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent= 'Delete';
    newActionsCell.appendChild(deleteButton);

    deleteButton.addEventListener('click',()=>{
        removeItem(name,inventory);
        renderTable(inventory);
    })

    
    


    //Add cells to the row
    newRow.appendChild(newNameCell);
    newRow.appendChild(newQuantityCell);
    newRow.appendChild(newPriceCell);
    newRow.appendChild(newActionsCell);
    
    //Add row to the table
    tbody.appendChild(newRow);







}


function renderTable(inventory) {
    tbody.innerHTML = '';
    inventory.items.forEach(product => {
        addRow(product)
    });
}

addProductForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const price = priceInput.value;
    if (name && quantity>0 && price>0) {
        
        const response = addItem(name, quantity, price , inventory);
        if (response=='added') {
            addRow({name ,quantity,price});
        } else {
            updateRow({name,quantity, price})
        }
    }
})

renderTable(inventory);


function updateRow({name,quantity,price}){
    
    const product = inventory.items.find(p=>p.name.toLocaleLowerCase()===name.toLocaleLowerCase())
    let total = parseInt(product.quantity);
    product.price = price;
    total += parseInt(quantity);
    product.quantity = total;
    renderTable(inventory);
}

function productsBiggerThan50(price,tr){
    
    if(price>50){
        tr.className='cambia';
    }
}