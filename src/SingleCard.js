import React from "react";

const SingleCard = ({ title, price, info, primary, isAnnual }) => {
  return (
    <section
      className={`flex flex-col shadow-lg border-2 border-grayishblue-vlight my-8 items-center rounded-xl bg-white p-7 lg:w-2/5 ${
        primary
          ? `text-grayishblue-dark`
          : `text-grayishblue-vlight bg-gradient-to-br from-primary-light to-primary-dark lg:my-2`
      }`}
    >
      <h3 className="mb-5">{title}</h3>
      <h2 className="mb-8 flex items-center text-6xl">
        <span className="text-3xl">$</span>
        {!isAnnual ? price[0] : price[1]}
      </h2>
      <ul className="w-full">
        <div
          className={`h-px w-full ${primary ? `bg-gray-300 ` : `bg-white`}`}
        ></div>
        {info.map((item, index) => {
          return (
            <li className="flex flex-col items-center" key={index}>
              <p className={`my-4`}>{item}</p>
              <div
                className={`h-px w-full ${
                  primary ? `bg-gray-300 ` : `bg-white`
                }`}
              ></div>
            </li>
          );
        })}
      </ul>
      <button
        className={`cursor-pointer uppercase mt-10 w-full py-3 rounded-lg ${
          !primary
            ? `text-primary-dark bg-grayishblue-vlight active:bg-transparent active:text-grayishblue-vlight border-grayishblue-vlight border`
            : `text-grayishblue-vlight bg-gradient-to-r from-primary-light to-primary-dark active:bg-white active:text-primary-dark border-primary-light active:bg-none border`
        }`}
      >
        learn more
      </button>
    </section>
  );
};

export default SingleCard;
