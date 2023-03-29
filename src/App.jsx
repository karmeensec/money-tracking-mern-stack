import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  return (

    <div className='app'> 

      <h1> Balance: $500 <span>.00</span> </h1>

      <form>

        <div className='search-container'>
          <input type="text" name="" id="" placeholder='Add your product' value={name} onChange={ (e)=> setName(e.target.value) } />
          <input type="datetime-local" name="" id="" />
        </div>

        <div className='description-container'>
          <input type="text" name="" id="" placeholder='Add text' />
        </div>

        <button type="submit">Add</button>

      </form>

      <div className='transactions'>

        <div className='transaction'>

          <div className='left'>

            <div className='product-name'>New LG Tv</div>
            <div className='description'>Buying new Tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>06/12/2022 17:42</div>
          </div>

        </div>

        <div className='transaction'>

          <div className='left'>
            
            <div className='product-name'>New LG Tv</div>
            <div className='description'>Buying new Tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>06/12/2022 17:42</div>
          </div>

        </div>

        <div className='transaction'>

          <div className='left'>
            
            <div className='product-name'>New LG Tv</div>
            <div className='description'>Buying new Tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>06/12/2022 17:42</div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default App
