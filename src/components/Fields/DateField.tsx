import React from 'react';
import { FieldTitle, FieldWrapper } from './styled';
import { DateFieldProps } from 'index.d';

function DateField({ destinationDate, nextMonth, prevMonth }: DateFieldProps) {
  return (
    <div style={{ marginBottom: 24 }}>
      <FieldTitle>Reach goal by</FieldTitle>
      <FieldWrapper>
        <span className="left" onClick={prevMonth}>
          &lt;
        </span>
        <h3 className="field"> {destinationDate} </h3>
        <span className="right" onClick={nextMonth}>
          &gt;
        </span>
      </FieldWrapper>
    </div>
  );
}

export default DateField;
