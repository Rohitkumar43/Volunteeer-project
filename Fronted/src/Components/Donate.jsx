import React, { useState } from 'react'

function Donate() {
  const [amount , setamount] = useState('');
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);


  const handleCheckout = async(e) => {
    e.preventdefault();
  }


  return (
    <section className='donate'>
      <form onSubmit={handleCheckout}>
        <div>
          <img src="./heart.png" alt="logo" />
        </div>
        <div>
          <label>Sow your love for poor </label>
          <input type="number" value={amount} placeholder='Enter the Donation Amt.' onChange={(e) => setamount(e.target.value)} />
        </div>
        <input type="text" value={name} placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={message} placeholder='Any message you want to give' onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `$${amount}` : "$0"}
        </button>
      </form>
    </section>
  )
}

export default Donate
