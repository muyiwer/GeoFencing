import { GeoFencing } from "./components/GeoFencing.js";
import { AppHeader } from "./components/Header.js";
import { AppMenu } from "./components/Menu.js";
import "./index.css";

function App() {
  return (
    <section className="grid grid-cols-[200px_1fr] max-md:grid-cols-1">
      <AppMenu />
      <main className="grid grid-rows-[50px_1fr]">
        <AppHeader />
        <GeoFencing />
      </main>
    </section>
  );
}

export default App;
