import React from 'react';
import foodBackground from '../images/berry-background.jpg';
import OnSubmitButton from './OnSubmitButton';

const HomePage = ({ searchState, setSearchState }) => {
  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url(${foodBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="h-screen w-full flex justify-center">
        <div className="m-10">
          <form>
            <div className="px-6">
              <OnSubmitButton />
            </div>
            <div className="m-2 rounded p-2 bg-tangerine">
              <h3 className="bg-tangerine text-2xl text-center">
                Today's Food Log
              </h3>
              <div className="m-2 rounded border-2">
                {/* <h2 className="bg-turquoise p-2">Meal</h2> */}
                <ul>
                  <li className="bg-offwhite">
                    <input
                      type="text"
                      // onSubmit={(event) => setSearchState(event.target.value)}
                      value={searchState}
                      name="food"
                      className="shadow appearance-none border rounded w-full py-2
                      px-3 text-darkgray leading-tight focus:outline-none
                      focus:shadow-outline border-gray-300"
                      placeholder="1 Toast"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-2 m-2 rounded bg-tangerine">
              <h3 className="text-2xl text-center rounded-lg">
                Searched foods nutrients:
              </h3>
              <div className="bg-offwhite rounded m-2"></div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
