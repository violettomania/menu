import menu from './data';
import MenuItem from './MenuItem';
import Button from './Button';

export default function App() {
  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='title-underline'></div>
        </div>
        <div className='btn-container'>
          <Button text='all' onClick={() => {}} />
          <Button text='breakfast' onClick={() => {}} />
          <Button text='lunch' onClick={() => {}} />
          <Button text='shakes' onClick={() => {}} />
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
