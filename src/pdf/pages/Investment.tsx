import React from "react";
import Header from "../components/Header";
import InvestmentDetails from "../components/InvestmentDetails";
import FinancingSimulation from "../components/FinancingSimulation";

interface InvestmentProps {
  investmentData: {
    monthlyConsumption: string;
    monthlySavings: string;
    investmentReturn: string;
    price: string;
    discounts: string;
    finalProposalValue: string;
    paymentMethod: string;
  };
  financingData: {
    bank: string;
    interestRate: string;
    term: string;
    installment: string;
  };
}

const Investment: React.FC<InvestmentProps> = ({ investmentData, financingData }) => {
  return (
    <>
      <Header
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_wVQIJP3AHSn2Pt_nO4T1ExMHLGpiUxyjQ&s"
        date={new Date()}
      />
      <InvestmentDetails data={investmentData} />
      <FinancingSimulation data={financingData} />
    </>
  );
};

export default Investment;
