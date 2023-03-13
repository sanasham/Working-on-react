import React from 'react';
import Button from './Button';
import { buttonNamesList } from '../utils/constants';

const ButtonList = () => {
  return (
    <div>
      {buttonNamesList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
