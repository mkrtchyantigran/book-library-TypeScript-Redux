
import "./App.css"
import BookForm from "./components/BookForm/BookForm.tsx";
import BookList from "./components/BookList/BookList";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error.tsx";

export default function App() {

  return (
    <div className="app">
      <Error />
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

