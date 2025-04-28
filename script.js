// Select necessary elements
const addButton = document.getElementById('add-button');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Add item to the list
addButton.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText === '') {
        alert('Please enter an item.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    // Delete item on button click
    deleteButton.addEventListener('click', () => {
        itemList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
    itemInput.value = ''; // Clear input field
});