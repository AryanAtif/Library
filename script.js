booklist = [];
let books_added = 0;

const add_book_btn = document.querySelector(".add-book");
document.body.appendChild(add_book_btn);

add_book_btn.addEventListener("click", () => 
  {
    add_book_btn.setAttribute("disabled", "");
    display_form();
  });

add_book("The Stranger", "Albert Camus", 123, true);
add_book("1984", "Geroge Orwell", 231, true);
add_book("Debt", "David Grabaer", 500, false);

function Book (name, author, pg_count, is_read)
{
  this.name = name;
  this.author = author;
  this.pg_count = pg_count;
  this.is_read = is_read;
  this.index = books_added;
  books_added++;

  this.id = crypto.randomUUID();
}

function add_book (name, author, pg_count, is_read)
{
  let book = new Book (name, author, pg_count, is_read);
  booklist.push(book);
}

function display_form ()
{ /*
  * Create a form to take the data
  */
  const form = document.createElement("form");
  form.setAttribute("class", "book-form");
  form.setAttribute("action", " ");
  form.setAttribute("method", "POST");
  document.body.appendChild(form);

  /* Book Name */
  const name_div = document.createElement("div");
  name_div.className = "name";
  form.appendChild(name_div);

  const name_label = document.createElement("label");
  name_label.textContent = "Book Name: ";
  name_label.setAttribute("for", "name");
  name_div.appendChild(name_label);
  
  const name_input = document.createElement("input");
  name_input.setAttribute("id", "name");
  name_input.setAttribute("type", "text");
  name_input.setAttribute("name", "name");
  name_input.setAttribute("required", "");
  name_div.appendChild(name_input);

  /* Author */
  const author_div = document.createElement("div");
  author_div.className = "author";
  form.appendChild(author_div);

  const author_label = document.createElement("label");
  author_label.textContent = "Book Author: ";
  author_label.setAttribute("for", "author");
  author_div.appendChild(author_label);
  
  const author_input = document.createElement("input");
  author_input.setAttribute("id", "author");
  author_input.setAttribute("type", "text");
  author_input.setAttribute("name", "author");
  author_input.setAttribute("required", "");
  author_div.appendChild(author_input);

  /* Page Count */
  const pg_count_div = document.createElement("div");
  pg_count_div.className = "pg_count";
  form.appendChild(pg_count_div);

  const pg_count_label = document.createElement("label");
  pg_count_label.textContent = "Page Count: ";
  pg_count_label.setAttribute("for", "pg_count");
  pg_count_div.appendChild(pg_count_label);
  
  const pg_count_input = document.createElement("input");
  pg_count_input.setAttribute("id", "pg_count");
  pg_count_input.setAttribute("type", "tel");
  pg_count_input.setAttribute("name", "pg_count");
  pg_count_input.setAttribute("required", "");
  pg_count_div.appendChild(pg_count_input);
  
  /* Page Count */
  const is_read_div = document.createElement("div");
  is_read_div.className = "is_read";
  form.appendChild(is_read_div);

  const is_read_legend = document.createElement("legend");
  is_read_legend.textContent = "Have you read the book? ";
  is_read_div.appendChild(is_read_legend);
  
  const yes_read_label = document.createElement("label");
  yes_read_label.setAttribute("for", "yes_read");
  yes_read_label.textContent = "Yes"
  is_read_div.appendChild(yes_read_label);
  const yes_read_input = document.createElement("input");
  yes_read_input.setAttribute("id", "yes_read");
  yes_read_input.setAttribute("type", "radio");
  yes_read_input.setAttribute("value", "true");
  yes_read_input.setAttribute("name", "is_read");
  yes_read_input.setAttribute("checked", "");
  is_read_div.appendChild(yes_read_input);

  const not_read_label = document.createElement("label");
  not_read_label.setAttribute("for", "not_read");
  not_read_label.textContent = "No"
  is_read_div.appendChild(not_read_label);
  
  const not_read_input = document.createElement("input");
  not_read_input.setAttribute("id", "not_read");
  not_read_input.setAttribute("type", "radio");
  not_read_input.setAttribute("value", "false");
  not_read_input.setAttribute("name", "is_read");
  not_read_input.setAttribute("checked", "");
  is_read_div.appendChild(not_read_input);


  const submit_button = document.createElement("button");
  submit_button.textContent = "Add Book";
  submit_button.setAttribute("value", "Add Book");
  form.appendChild(submit_button);
  
  submit_button.addEventListener("click", (e) =>
  {
      e.preventDefault(); 
      store_book ();
      delete_form();
      add_book_btn.removeAttribute("disabled");
  }); 

}

function store_book()
{
  const form = document.querySelector(".book-form");
  const book_name = form.elements["name"];
  const author = form.elements["author"];
  const pg_count = form.elements["pg_count"];
  const is_read = form.elements["is_read"];

  add_book (book_name.value, author.value, pg_count.value, is_read.value);
}

function delete_form()
{
  const form = document.querySelector(".book-form");
  form.remove();
}

function print_books ()
{
  if (booklist.length < 1) return;

  const table = document.createElement("table");
  table.setAttribute("class", "book-table");
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
  
  const pg_count = document.createElement("th");
  pg_count.textContent = "Page Count"
  table_header.appendChild(pg_count);
  
  const is_read = document.createElement("th");
  is_read.textContent = "Has been read?"
  table_header.appendChild(is_read);
 /* 
  const delete_book = document.createElement("th");
  delete_book.textContent = "Delete the book"
  table_header.appendChild(delete_book);*/
  
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
    book_pg_count.textContent = booklist[i].pg_count;
    row.appendChild (book_pg_count);

    const book_is_read = document.createElement("td");
    book_is_read.textContent = booklist[i].is_read;
    row.appendChild (book_is_read);


    const del_book = document.createElement("td");
    row.appendChild (del_book);

    const del_btn = document.createElement("button");
    del_btn.textContent = "Delete Book";
    del_book.appendChild (del_btn);
  
    del_btn.addEventListener("click", () =>
    { 
      delete_books(i);
      });
  }
}

function delete_books(book_index)
{
  booklist.splice(book_index.index, 1);

  const books_table = document.querySelector(".book-table");
  books_table.remove();
  print_books();
}
