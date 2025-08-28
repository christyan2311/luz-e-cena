import Banner from "./componentes/Banner";
import Header from "./componentes/Header";
import MovieSection from "./componentes/MovieSection";

function App() {
  return (
    <>
    <Header />
      <Banner src="./banner.png" alt="Banner" />
      <MovieSection />
    </>
  );
}

export default App;
