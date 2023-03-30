import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = function(e) {

    e.preventDefault();

    const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL + '/transaction' ;

    const price = name.split(' ')[0];  // grab the price (first part)

    fetch(baseUrl, {

      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ price, name: name.substring(price.length + 1), datetime, description })

    }).then((res) => res.json()).then((data) =>{ 
      
      setName('');
      setDatetime('');
      setDescription('');
      console.log('result', data); 
    
    })

  }

  return (

    <div className='app'> 

      <h1> Balance: $500 <span>.00</span> </h1>

      <form onSubmit={ handleSubmit } >

        <div className='search-container'>
          <input type="text" name="" id="" placeholder='Add your product' value={name} onChange={ (e)=> setName(e.target.value) } />
          <input type="datetime-local" name="" id="" value={datetime} onChange={ (e)=> setDatetime(e.target.value) } />
        </div>

        <div className='description-container'>
          <input type="text" name="" id="" placeholder='Add text' value={description} onChange={ (e)=> setDescription(e.target.value)} />
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
