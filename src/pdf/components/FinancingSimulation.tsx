import { View, Text, StyleSheet } from "@react-pdf/renderer";

interface FinancingSimulationProps {
  data: {
    bank: string;
    interestRate: string;
    term: string;
    installment: string;
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    color: "#fff",
    padding: 40,
    borderRadius: 8,
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "97%",
    margin: "0 auto",
  },

  title: {
    fontSize: 25,
  },

  data: {
    fontSize: 16,
    marginBottom: 5,
  },

  label: {
    fontSize: 10,
    color: "#ACACAC",
  },

  divider: {
    width: 10,
    backgroundColor: "#ACACAC",
    marginVertical: 10,
  },
});

const FinancingSimulation: React.FC<FinancingSimulationProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulação de Financiamento</Text>

      <View>
        <Text style={styles.data}>{data.bank}</Text>
        <Text style={styles.label}>Banco</Text>
      </View>
      <View>
        <Text style={styles.data}>{data.interestRate}</Text>
        <Text style={styles.label}>% Juros</Text>
      </View>
      <View>
        <Text style={styles.data}>{data.term}</Text>
        <Text style={styles.label}>Prazo</Text>
      </View>
      <View>
        <Text style={styles.data}>{data.installment}</Text>
        <Text style={styles.label}>Parcela</Text>
      </View>
    </View>
  );
};

export default FinancingSimulation;
