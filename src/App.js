import "./index.css";
import SingleCard from "./SingleCard";
import data from "./data";
import { useState } from "react";

function App() {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <div className="App">
      <div className=" bg-bg-top bg-righttop2 lg:bg-right-top bg-no-repeat font-montserrat px-10 md:px-28">
        <header className="flex justify-center pt-16 mb-10">
          <h1 className="text-grayishblue-neutral font-bold text-3xl">
            Our Pricing
          </h1>
        </header>
        <div className="lg:mb-10 mb-20 text-grayishblue-light flex justify-center items-center">
          <div>Annually</div>

          <button
            onClick={() => {
              setIsAnnual(!isAnnual);
            }}
            className={`cursor-pointer transition ease-linear flex items-center px-1 mx-6 rounded-full bg-gradient-to-r from-primary-light to-primary-dark w-16 h-9 active:bg-purple-400 active:bg-none ${
              isAnnual ? `justify-start` : `justify-end`
            }`}
          >
            <div className="rounded-full bg-grayishblue-vlight w-7 h-7"></div>
          </button>
          <div>Monthly</div>
        </div>
        <main className="lg:flex lg:flex-row justify-center">
          {data.map((item, index) => {
            return (
              <SingleCard
                title={item.title}
                price={item.price}
                info={item.info}
                primary={item.primary}
                key={index}
                isAnnual={isAnnual}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
