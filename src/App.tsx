import menu from './data';
import MenuItem from './MenuItem';

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
          {menu.map(({ id, ...rest }) => (
            <MenuItem key={id} {...rest} />
          ))}
        </div>
      </section>
    </main>
  );
}
