export default function App() {
  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='title-underline'></div>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn'>
            all
          </button>
          <button type='button' className='btn'>
            breakfast
          </button>
          <button type='button' className='btn'>
            lunch
          </button>
          <button type='button' className='btn'>
            shakes
          </button>
        </div>
        <div className='section-center'>
          <article className='menu-item'>
            <img
              src='../images/item-1.jpeg'
              alt='buttermilk pancakes'
              className='img'
            />
            <div className='item-info'>
              <header>
                <h5>buttermilk pancakes</h5>
                <span className='item-price'>$15.99</span>
              </header>
              <p className='item-text'>
                I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
                freegan copper mug whatever cold-pressed I'm baby woke mlkshk
                wolf bitters live-edge blue bottle, hammock freegan copper mug
                whatever cold-pressed{' '}
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
