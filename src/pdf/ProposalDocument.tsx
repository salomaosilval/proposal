import { Document, Page, StyleSheet, Font } from "@react-pdf/renderer";
import SolarSystem from "./pages/SolarSystem";
import Investment from "./pages/Investment";
import Graphics from "./pages/Graphics";
import WarrantyAndTerms from "./pages/WarrantyAndTerms";

Font.register({
  family: "Titillium Web",
  src: "https://fonts.gstatic.com/s/titilliumweb/v10/NaPecZTIAOhVxoMyOrTS3aCWcynf_cDxXwCLxiixG1c.woff2",
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    padding: 0,
    margin: 0,
  },
});

interface ProposalDocumentProps {
  data: {
    title: string;
    type: string;
    area: string;
    power: {
      current: number;
      max: number;
    };
    products: Array<{
      name: string;
      quantity: string;
      description: string;
      image: string;
    }>;
    client: {
      name: string;
      address: string;
      phone: string;
      avatar: string;
    };
    seller: {
      name: string;
      role: string;
      phone: string;
      avatar: string;
    };
    investment: Array<{
      month: string;
      value: number;
    }>;
    maxInvestmentValue: number;
  };
}

const mockInvestmentData = {
  monthlyConsumption: "890 kWh",
  monthlySavings: "R$ 5.000,00",
  investmentReturn: "6 Anos e 7 Meses",
  price: "R$ 300.000,00",
  discounts: "R$ 23.950,00",
  finalProposalValue: "R$ 300.000,00",
  paymentMethod: "3x Parcelas",
};

const mockFinancingData = {
  bank: "Inter",
  interestRate: "10%",
  term: "3 Meses",
  installment: "R$ 11.000,00",
};

const ProposalDocument = ({ data }: ProposalDocumentProps) => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <SolarSystem
          title={data.title}
          type={data.type}
          area={data.area}
          power={data.power}
          mainImage="https://stilosolar.com.br/energiasolar/wp-content/uploads/2020/08/Qual-%C3%A9-a-durabilidade-de-um-SISTEMA-DE-ENERGIA-FOTOVOLTAICA.png"
        />
      </Page>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Investment investmentData={mockInvestmentData} financingData={mockFinancingData} />
      </Page>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Graphics />
      </Page>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <WarrantyAndTerms />
      </Page>
    </Document>
  );
};

export default ProposalDocument;
