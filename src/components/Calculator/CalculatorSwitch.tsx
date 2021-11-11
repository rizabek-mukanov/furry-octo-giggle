import { Switch } from 'antd';
import React from 'react';
import { SwitchWrapper, SwitchText } from './styled';
import { CalculatorSwitchProps } from 'index.d';

function CalculatorSwitch({
  countByMonthly,
  handleChange,
}: CalculatorSwitchProps) {
  return (
    <SwitchWrapper>
      <Switch
        defaultChecked
        checked={!countByMonthly}
        onChange={handleChange}
      />
      <SwitchText>
        {countByMonthly
          ? 'Calculate by monthly saving'
          : 'Calculate by total amount'}
      </SwitchText>
    </SwitchWrapper>
  );
}

export default CalculatorSwitch;
