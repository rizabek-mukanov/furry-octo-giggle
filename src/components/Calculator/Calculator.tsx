import React, { ChangeEvent } from 'react';
import { CalculatorWrapper, HeaderText } from './styled';
import { differenceInMonths, format, isBefore } from 'date-fns';
import { useStateContext } from 'useState';
import { Button } from 'components/Button';
import { AmountField, DateField, ResultField } from 'components/Fields';
import CalculatorSwitch from './CalculatorSwitch';

function Calculator() {
  const {
    countByMonthly,
    destinationDate,
    monthlyAmount,
    totalAmount,
    changeTotalAmount,
    changeMonthlyAmount,
    changeDestinationDate,
    toggleCountMode,
  } = useStateContext();

  const [monthRequired, setMonthRequired] = React.useState(
    differenceInMonths(destinationDate, new Date())
  );

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (countByMonthly) {
      changeMonthlyAmount(value.replace(/,/g, ''));
    } else {
      changeTotalAmount(value.replace(/,/g, ''));
    }
  };

  const prevMonth = () => {
    const newDate = new Date(destinationDate);
    newDate.setMonth(newDate.getMonth() - 1);
    const datePassed = isBefore(newDate, new Date());
    if (!datePassed) {
      changeDestinationDate(newDate);
    }
  };

  const nextMonth = () => {
    const newDate = new Date(destinationDate);
    newDate.setMonth(newDate.getMonth() + 1);
    changeDestinationDate(newDate);
  };

  React.useEffect(() => {
    setMonthRequired(differenceInMonths(destinationDate, new Date()) + 1);
  }, [destinationDate]);

  return (
    <CalculatorWrapper data-testid="calculator-wrapper">
      <HeaderText>Savings Calculator</HeaderText>
      <CalculatorSwitch
        handleChange={toggleCountMode}
        countByMonthly={countByMonthly}
      />
      <AmountField
        countByMonthly={countByMonthly}
        monthlyAmount={monthlyAmount}
        totalAmount={totalAmount}
        handleChange={handleChange}
      />
      <DateField
        destinationDate={format(destinationDate, 'MMMM, yyyy')}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <ResultField
        countByMonthly={countByMonthly}
        destinationDate={format(destinationDate, 'MMMM, yyyy')}
        monthlyAmount={monthlyAmount}
        monthRequired={monthRequired}
        totalAmount={totalAmount}
      />
      <Button>Finish</Button>
    </CalculatorWrapper>
  );
}

export default Calculator;
