import { View, Text } from "@react-pdf/renderer";
import Header from "../components/Header";
import ConsumptionGenerationChart from "../components/ConsumptionGenerationChart";
import CashFlowChart from "../components/CashFlowChart";

const Graphics = () => {
  const consumptionData = {
    jan: 1.5,
    feb: 2.0,
    mar: 1.8,
    apr: 2.2,
    may: 2.5,
    jun: 1.9,
    jul: 2.1,
    aug: 1.7,
    sep: 1.6,
    oct: 2.3,
    nov: 2.0,
    dec: 1.8,
  };

  const cashFlowData = [
    { name: "nov/2024", savings: -50000 },
    { name: "dez/2024", savings: -44825.48 },
    { name: "jan/2025", savings: -40060.7 },
    { name: "fev/2025", savings: -35295.92 },
    { name: "mar/2025", savings: -30531.14 },
    { name: "abr/2025", savings: -25766.36 },
    { name: "mai/2025", savings: -21001.58 },
    { name: "jun/2025", savings: -16236.8 },
    { name: "jul/2025", savings: -11472.02 },
    { name: "ago/2025", savings: -6707.24 },
    { name: "set/2025", savings: -1942.46 },
    { name: "out/2025", savings: 2822.32 },
    { name: "nov/2025", savings: 7587.1 },
  ];

  return (
    <>
      <Header
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_wVQIJP3AHSn2Pt_nO4T1ExMHLGpiUxyjQ&s"
        date={new Date()}
      />
      <View>
        <View style={{ width: "97%", padding: 10, margin: "0 auto" }}>
          <Text style={{ textAlign: "center", fontSize: 32, fontWeight: "bold" }}>Consumo e Geração</Text>
          <ConsumptionGenerationChart data={consumptionData} fixedValue={2} />
        </View>
        <View style={{ backgroundColor: "#161616", width: "97%", padding: 10, margin: "0 auto", borderRadius: 8 }}>
          <Text style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", color: "#FFF" }}>Fluxo de Caixa</Text>
          <CashFlowChart data={cashFlowData} />
        </View>
      </View>
    </>
  );
};

export default Graphics;
