booklist = [];

function Book (name, author, page_count, is_read)
{
  this.name = name;
  this.author = author;
  this.page_count = page_count;
  this.is_read = is_read;

  this.id = crypto.randomUUID();
}

function add_book (name, author, page_count, is_read)
{
  let book = new Book (name, author, page_count, is_read);
  booklist.push(book);
}

function print_books ()
{
  const table = document.createElement("table");
  document.body.appendChild(table);
  const table_header = document.createElement("tr");
  table.appendChild(table_header);
  
  const id = document.createElement("th");
  id.textContent = "Book ID"
  table_header.appendChild(id);

  const name = document.createElement("th");
  name.textContent = "Name"
  table_header.appendChild(name);
  
  const author = document.createElement("th");
  author.textContent = "Author"
  table_header.appendChild(author);
  
  const page_count = document.createElement("th");
  page_count.textContent = "Page Count"
  table_header.appendChild(page_count);
  
  const is_read = document.createElement("th");
  is_read.textContent = "Has been read?"
  table_header.appendChild(is_read);
  
  for (i in booklist)
  {
    const row = document.createElement("tr");
    table.appendChild(row);

    const book_id = document.createElement("td");
    book_id.textContent = booklist[i].id;
    row.appendChild (book_id);

    const book_name = document.createElement("td");
    book_name.textContent = booklist[i].name;
    row.appendChild (book_name);

    const book_author = document.createElement("td");
    book_author.textContent = booklist[i].author;
    row.appendChild (book_author);

    const book_pg_count = document.createElement("td");
    book_pg_count.textContent = booklist[i].page_count;
    row.appendChild (book_pg_count);

    const book_is_read = document.createElement("td");
    book_is_read.textContent = booklist[i].is_read;
    row.appendChild (book_is_read);
  }
}
