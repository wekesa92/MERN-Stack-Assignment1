// Find all books in a specific genre
db.books.find({ genre: "Programming" });

// Find books published after 2015
db.books.find({ published_year: { $gt: 2015 } });

// Find books by a specific author
db.books.find({ author: "Robert C. Martin" });

// Update price of a specific book
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 35 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "The Pragmatic Programmer" });

// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sorting by price ascending
db.books.find().sort({ price: 1 });

// Sorting by price descending
db.books.find().sort({ price: -1 });

// Pagination (page 1, 5 books per page)
db.books.find().skip(0).limit(5);

// Pagination (page 2)
db.books.find().skip(5).limit(5);
