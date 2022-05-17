const personsContainer = document.querySelector('.persons');
const companiesContainer = document.querySelector('.companies');
const booksContainer = document.querySelector('.books');
const loader = document.querySelector('.loader');
var persons = [];
const person = document.querySelectorAll('.person')



function renderPersons(persons) {

    personsContainer.innerHTML = '';
    persons.forEach(person =>{
        personsContainer.innerHTML += `
        <article class="person">
                <div class="profile__pic__container">
                    <figure class="profile__pic">
                        <img src="${person.image}" alt="profile-picture" border="0" />
                    </figure>
                </div>
                <div class="info__container">
                    <h1 class="title">${person.firstname} ${person.lastname}</h1>
                    <span class="id">${person.id}</span>
                    <span class="birthday">${person.birthday}</span>
                    <button type="button" class="phone">
                        <a href="${person.phone}">Phone Number</a>
                    </button>
                    <button type="button" class="email">
                        <a href="${person.email}">Email</a>
                    </button>
                    <button type="button" class="website">
                        <a href="${person.website}">website</a>
                    </button>
                </div>    
        </article>
        `;
    })
}

function getPersons() {
    loader.classList.remove('hidden')
    fetch('https://fakerapi.it/api/v1/persons?_quantity=20_gender=male&female_birthday_start=2005-01-01')
            .then(res => res.json())
            .then(data => {
                persons = data.data;
                renderPersons(data.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally( () => {
                loader.classList.add('hidden')
            })
}

getPersons();

async function getData() {
    await getPersons();
}

function preventDefault(event) {
    event.preventDefault();
}

function searchPersons(event) {
    const searchInput = event.target;

    const matchedPersons = persons.filter(person => person.firstname.toLowerCase().includes(searchInput.value)|| person.lastname.toLowerCase().includes(searchInput.value));

    renderPersons(matchedPersons);
}


function renderCompanies(companies) {
    companies.forEach(company => {
        companiesContainer.innerHTML += `
        <article class="company">
                    <div>
                        <figure class="profile__pic">
                            <img src="${company.image}" alt="profile-picture" border="0" />
                        </figure>
                    </div>
                    <div>
                        <h1 class="title">${company.name}</h1>
                        <span class="code">${company.code}</span>
                        <button type="button" class="phone">
                            <a href="${company.phone}">Phone Number</a>
                        </button>
                        <button type="button" class="email">
                            <a href="${company.email}">Email</a>
                        </button>
                        <button type="button" class="website">
                            <a href="${company.website}">website</a>
                        </button>
                    </div>
                    
        </article>
        `;
    })
}

function getCompanies() {
    loader.classList.remove('hidden')
    fetch('https://fakerapi.it/api/v1/companies?_quantity=15')
        .then(res => res.json())
        .then(data => {
            renderCompanies(data.data);
        })
        .catch(error => {
            console.log(error);
        })
    .finally( () => {
            loader.classList.add('hidden')
    })
}

getCompanies();

function renderBooks(books) {
    books.forEach(book => {
        booksContainer.innerHTML += `
        <article class="book">
                    <div>
                        <figure class="profile__pic">
                        <img src="${book.image}" alt="profile-picture" border="0" />
                    </figure>
                    </div>
                    <div>
                        <h1 class="title">${book.title}</h1>
                        <span class="author">${book.author}</span>
                    </div>
        </article>
        `;
    })
}

function getBooks() {
    loader.classList.remove('hidden')
    fetch('https://fakerapi.it/api/v1/books')
        .then(res => res.json())
        .then(data => {
            renderBooks(data.data);
        })
        .catch(error => {
            console.log(error);
        })
    .finally( () => {
            loader.classList.add('hidden') 
    })
}

getBooks();