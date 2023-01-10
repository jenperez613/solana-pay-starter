import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useEffect, useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import Footer from '../components/Footer';
import HeadComponent from '../components/Head';
import Product from '../components/Product';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [products, setProducts] = useState([]);
  const [creating, setCreating] = useState(false);

  const { publicKey } = useWallet();

  const isOwner = publicKey
    ? publicKey.toString() ===
      process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY
    : false;

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log('Products', data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div>
      <img
        src='https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif'
        alt='Adventure Time'
      />
      <div className='button-container'>
        <WalletMultiButton className='cta-button connect-wallet-button' />
      </div>
      <Footer/>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div>
        <Footer />
      </div>
    </div>

  );

  return (
    <div className='App'>
      <HeadComponent />
      <div className='container'>
        <header className='header-container'>
          <p className='header'>🍭 Digital Candy Shop 🍭</p>
          <p className='sub-text'>
            All Adventure Time, all the time.
          </p>
          {isOwner && (
            <button
              className='create-product-button'
              onClick={() => setCreating(!creating)}>
              {creating ? 'Close' : 'Create Product'}
            </button>
          )}
        </header>

        <main>
          {creating && <CreateProduct />}
          {publicKey
            ? renderItemBuyContainer()
            : renderNotConnectedContainer()}
        </main>
      </div>

    </div>
  );
};

export default App;
