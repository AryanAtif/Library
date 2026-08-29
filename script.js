Books = [];

function Book (name, author, page_count, is_read)
{
  this.name = name;
  this.author = author;
  this.page_count = page_count;
  this.is_read = is_read;

  this.id = crypto.randomUUID;
}

function add_book (name, author, page_count, is_read)
{
  let book = new Book (name, author, page_count, is_read);
  Books.push(book);
}

