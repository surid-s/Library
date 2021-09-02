//  // // // error msg // // //
document.getElementById('notFound').style.display = 'none'
//  // // //  Search text and fetching url // // ///

const searchBook = async () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value

    // clear data
    searchField.value = ''


    const url = `https://openlibrary.org/search.json?q=${searchText}`

    // fetching url 

    const res = await fetch(url)
    const data = await res.json()
    displaySearchResult(data)
}

//  // // // search result  // // // //

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result-container')

    const searchField = document.getElementById('search-field')
    const searchText = searchField.value

    console.log(books)
    const book = books.docs

    // clear data // // //

    searchResult.textContent = ''
    document.getElementById('notFound').style.display = 'none'

    //  // // //  book result // // // //

    if(book.length === 0){
        document.getElementById('notFound').style.display = 'block'
    }
    else{
        book.forEach(book => {
            console.log(book)
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div  class="card h-100">
                    <img height = "300" width = "auto" img-fluid src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="Girl in a jacket">
                    <div class="card-body">
                        <h5 class="card-title"> <span class ="text-muted"> Name :</span> ${book.title}</h5>
                        <p class="card-text"> <u>Author Name </u>: <span class = "fw-bold"> ${book.author_name}</span></p>
                        <p>Firs't Publish : <span class = "fw-bold"> ${book.first_publish_year}</span> </p>
                        <p>Publisher : <span class = "fw-bold">${book.publisher}</span></p>
                    </div>
            </div>
            
            `
            searchResult.appendChild(div)

        })

 // // // // // //  showing total result number // // // // // //

        // const resultP = document.getElementById('found')
        // const number = books.numFound
        // const p = document.createElement('p')
        // p.classList.add('result-number')
        // p.classList.add('text-center')
        // p.classList.add('mt-4')
        // p.innerText = `${number} result were found. Some of them given bellow...`

        // resultP.appendChild(p)
        

    }


    const totalFound = document.getElementById('total-books')
    totalFound.innerHTML = `<p class="text-center text-success mt-2">${books.numFound} result found.</p>`
    const allBooks = books.docs
    

    
}



