export interface ButtonProps {
  children: React.ReactNode;
}
export interface CalculatorSwitchProps {
  handleChange: () => void;
  countByMonthly: boolean;
}
export interface AmountFieldProps {
  countByMonthly: boolean;
  monthlyAmount: number;
  totalAmount: number;
  handleChange: (e: ChangeEvent) => void;
}

export interface DateFieldProps {
  destinationDate: string;
  prevMonth: () => void;
  nextMonth: () => void;
}

export interface ResultFieldProps {
  countByMonthly: boolean;
  destinationDate: string;
  monthlyAmount: number;
  monthRequired: number;
  totalAmount: number;
}
