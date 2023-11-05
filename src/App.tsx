import menu from './data';
import MenuItem from './MenuItem';
import Button from './Button';
import { useState } from 'react';

const categories = [...new Set(menu.map(({ category }) => category))];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='title-underline'></div>
        </div>
        <div className='btn-container'>
          {categories.map((category) => (
            <Button key={category} text={category} onClick={() => {}} />
          ))}
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
