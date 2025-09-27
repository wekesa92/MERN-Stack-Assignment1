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

