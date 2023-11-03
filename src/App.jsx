import Gallery from "./Components/Gallery/Gallery";
import HeaderTop from "./Components/HeaderTop/HeaderTop";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full bg-white rounded-lg">
          <HeaderTop />
          <div className="divider p-0 m-0"></div>
          <div className="gallery p-4">
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
