import { useState } from 'react';
import constate from 'constate';
import { addYears } from 'date-fns';

function useCalculatorState() {
  const [totalAmount, setTotalAmount] = useState(25000);
  const [monthlyAmount, setMonthlyAmount] = useState(1000);
  const [destinationDate, setDestinationDate] = useState(
    addYears(new Date(), 1)
  );
  const [countByMonthly, setCountByMonthly] = useState(false);

  const changeTotalAmount = (value) => {
    setTotalAmount(value);
  };

  const changeMonthlyAmount = (value) => {
    setMonthlyAmount(value);
  };

  const changeDestinationDate = (value) => {
    setDestinationDate(value);
  };

  const toggleCountMode = () => {
    setCountByMonthly(!countByMonthly);
  };

  return {
    countByMonthly,
    destinationDate,
    monthlyAmount,
    totalAmount,
    changeTotalAmount,
    changeMonthlyAmount,
    changeDestinationDate,
    toggleCountMode,
  };
}

export const [StateProvider, useStateContext] = constate(useCalculatorState);
