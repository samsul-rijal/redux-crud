import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Aplikasi Kontak App</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
