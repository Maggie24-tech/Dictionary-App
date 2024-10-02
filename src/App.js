import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          MN Dictionary
          <p>
            Dictionary from: <span className="source">Google Dictionary </span>
          </p>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Magdalene Nsiah</small>
        </footer>
      </div>
    </div>
  );
}
