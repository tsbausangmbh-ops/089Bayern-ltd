import SavingsCalculator from "../SavingsCalculator";

export default function SavingsCalculatorExample() {
  return <SavingsCalculator onComplete={(data) => console.log("Calculator complete:", data)} />;
}
