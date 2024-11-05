import { PDFViewer } from "@react-pdf/renderer";
import ProposalDocument from "./pdf/ProposalDocument";
import "./App.css";

const mockData = {
  title: "Proposta Sistema Solar",
  type: "Microgeração",
  area: "48 m²",
  power: {
    current: 890,
    max: 1000,
  },
  products: [
    {
      name: "Painel Solar",
      quantity: "04 unidades",
      description: "Descrição marca e tipo do painel solar detalhado em poucas palavras.",
      image: "/path/to/panel.png",
    },
    {
      name: "Tipo de Estrutura",
      quantity: "02 tipo telha",
      description: "Descrição marca e tipo da estrutura detalhado em poucas palavras.",
      image: "/path/to/structure.png",
    },
    {
      name: "Inversor",
      quantity: "01 unidade",
      description: "Descrição marca e tipo do inversor detalhado em poucas palavras.",
      image: "/path/to/inverter.png",
    },
  ],
  client: {
    name: "Cliente • Silva Lima",
    address: "Rua América 123, Centro Grande/MS",
    phone: "000 0 0000-0000",
    avatar: "/path/to/client-avatar.png",
  },
  seller: {
    name: "Vendedor • Mari Lima",
    role: "Ativo Aqui",
    phone: "000 0 0000-0000",
    avatar: "/path/to/seller-avatar.png",
  },
};

function App() {
  return (
    <PDFViewer width="100%" height="100%">
      <ProposalDocument
        data={{
          ...mockData,
          investment: [],
          maxInvestmentValue: 0,
        }}
      />
    </PDFViewer>
  );
}

export default App;
