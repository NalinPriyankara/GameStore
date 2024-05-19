import React from 'react';
import './bag.css';
import ShopBagItem from '../components/ShopBagItem';

function Bag({ games, reference }) {
  return (
    <section id="bag" className='bag' ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>My Bag</h1>
          </div>
        </div>
        {games.length === 0 ? (
            <h2>Bag is empty</h2>
          ): (
            <>
              <div className="row">
                <div className="table-responsive">
                  <table className='shopBagTable table table-borderless align-middle'>
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Preview</th>
                        <th scope="col">Game</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {games.map((game, index) => (
                        <ShopBagItem index={index} key={game._id} game={game} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
    </section>
  );
}

export default Bag
