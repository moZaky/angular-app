import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Book {
  name: string;
  id: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //books = [{ id: 1, name: 'First book' }];
  books: Book[] = [];

  bookForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
  });
  get bookName() {
    return this.bookForm.get('name')
  }
  addBook() {
    if (this.bookForm.valid) {
      const title = this.bookForm.value.name!;
      const book = { id: Math.random(), name: title };
      this.books.push(book);
      this.bookForm.reset();
    }
  }

  deleteBook(bookId: number) {
    const index = this.books.findIndex(book => book.id === bookId);
    if (index >= 0) {
      this.books.splice(index, 1);
    }
  }
}
