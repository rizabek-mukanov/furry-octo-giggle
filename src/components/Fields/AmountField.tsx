import { FieldTitle, FieldWrapper } from './styled';
import { AmountFieldProps } from 'index.d';

function AmountField({
  countByMonthly,
  monthlyAmount,
  totalAmount,
  handleChange,
}: AmountFieldProps) {
  const value = countByMonthly ? monthlyAmount : totalAmount;
  return (
    <div data-testid="amount-field" style={{ marginBottom: 24 }}>
      <FieldTitle>
        {countByMonthly ? 'Monthly amount' : 'Total Amount'}
      </FieldTitle>
      <FieldWrapper>
        <span className="left">$</span>
        <input
          className="field"
          type="tel"
          value={'' + value.toLocaleString()}
          onChange={handleChange}
        />
      </FieldWrapper>
    </div>
  );
}

export default AmountField;
