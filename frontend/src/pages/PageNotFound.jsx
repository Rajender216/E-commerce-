import React from "react";

const PageNotFound = () => {
  return (
    <section className="py-10 bg-white font-['Arvo']">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full text-center">
            <div
              className="h-[400px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
              }}
            >
              <h1 className="text-8xl font-bold text-center">404</h1>
            </div>

            <div className="-mt-12 text-center">
              <h3 className="text-4xl mb-4">Look like you're lost</h3>
              <p className="text-lg mb-6">
                The page you are looking for is not available!
              </p>

              <a
                href="/"
                className="inline-block text-white bg-green-600 px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
