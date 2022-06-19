import React from 'react';
import '../App.css';

import './AccountOver.css';

function AccountOver() {
  return (
    <div className='account-container'>
      <h1>Welcome Back.</h1>
      <div className='account-btns'>
        <p>You can easily manage, upgrade, pay off or add a line at anytime</p>
      </div>
      <div className='account-dvc'>
        <p>My Devices</p>
      </div>
      <div className='account-container'>
          <img src="/images/home.png" alt="Device info"/>
      </div>
    </div>

  );
}

export default AccountOver;