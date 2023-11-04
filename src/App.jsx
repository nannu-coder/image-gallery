import Gallery from "./Components/Gallery/Gallery";
import HeaderTop from "./Components/HeaderTop/HeaderTop";
import useAppProvider from "./Hook/useAppProvider";

function App() {
  const data = useAppProvider();
  console.log(data);
  return (
    <>
      <div className="container mx-auto">
        <div className="my-4">
          <div className="w-full bg-white rounded-lg">
            <HeaderTop />
            <div className="divider p-0 m-0"></div>
            <div className="gallery p-4">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
