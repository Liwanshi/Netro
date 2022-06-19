import React from 'react';
import '../../App.css';
import Billitem from '../Billitem';
import Billinfo from '../CurrentBill/Billinfo';
import Expect from '../CurrentBill/Expect';


function Bill() {
  return (
    <>
      <Billitem />
      <Billinfo />
      <Expect />
    </>
  );
}

export default Bill;