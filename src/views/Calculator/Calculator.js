import React from 'react';
import { MdBackspace, MdClear, MdRemove } from 'react-icons/md'

import {Keyboard, Viewfinder } from './components';

import './styles.css';

const data = [
  {
    tag: 'AC',
    value: 1,
    bgColor: '#363636'
  },

  {
    tag: '+/-',
    value: 2,
    bgColor: '#363636'
  },

  {
    tag: '/',
    value: 3,
    bgColor: '#363636'
  },

  {
    tag: <MdBackspace />,
    value: 3,
    bgColor: '#ffa931'
  },

  {
    tag: '1',
    value: 4,
    bgColor: '#363636'
  },

  {
    tag: '2',
    value: 5,
    bgColor: '#363636'
  },

  {
    tag: '3',
    value: 6,
    bgColor: '#363636'
  },

  {
    tag: 'x',
    value: '*',
    bgColor: '#ffa931'
  },

  {
    tag: '7',
    value: 7,
    bgColor: '#363636'
  },

  {
    tag: '8',
    value: 8,
    bgColor: '#363636'
  },

  {
    tag: '9',
    value: 9,
    bgColor: '#363636'
  },
  
];

const Calculator = () => {
  return (
    <div id="calculator-body">
      <Viewfinder />
      <Keyboard 
        data={data}
      />
    </div>
  );
}

export default Calculator;