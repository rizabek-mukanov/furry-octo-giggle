import { ResultWrapper, ResultTextWrapper, ResultTitle } from './styled';
import { ResultFieldProps } from 'index.d';

function ResultField({
  destinationDate,
  countByMonthly,
  monthlyAmount,
  monthRequired,
  totalAmount,
}: ResultFieldProps) {
  const monthlyReqiured = Math.ceil(totalAmount / monthRequired);
  const amountToBeSaved = monthlyAmount * monthRequired;

  return (
    <ResultWrapper>
      <ResultTitle>
        <h4>{countByMonthly ? 'Total amount ' : 'Monthly amount'}</h4>
        <h2>{`$${
          countByMonthly
            ? amountToBeSaved
            : monthlyReqiured % 1 === 0
            ? monthlyReqiured
            : monthlyReqiured.toFixed(2)
        }`}</h2>
      </ResultTitle>
      <ResultTextWrapper>
        <h5>
          {countByMonthly
            ? `You are saving $${monthlyAmount} monthly to save $${amountToBeSaved} by ${destinationDate}.`
            : `You are planning ${monthRequired} monthly deposits to reach your $${totalAmount} goal by ${destinationDate}.`}
        </h5>
      </ResultTextWrapper>
    </ResultWrapper>
  );
}

export default ResultField;
