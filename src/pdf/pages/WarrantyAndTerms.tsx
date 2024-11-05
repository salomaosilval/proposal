import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    padding: 0,
    margin: 0,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    margin: 30,
    color: "#161616",
  },
  card: {
    backgroundColor: "#161616",
    padding: 20,
    borderRadius: 8,
    margin: "0 auto",
    width: "97%",
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftColumn: {
    flex: 0.5,
    color: "#ACACAC",
  },
  rightColumn: {
    flex: 0.5,
    display: "flex",
    justifyContent: "space-between",
    color: "#ACACAC",
    textAlign: "right",
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#FFF",
  },
});

const WarrantyAndTerms = () => {
  return (
    <View style={styles.page}>
      <Header
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_wVQIJP3AHSn2Pt_nO4T1ExMHLGpiUxyjQ&s"
        date={new Date()}
      />
      <Text style={styles.title}>Garantia e Prazos</Text>
      <View style={styles.card}>
        <View style={styles.column}>
          <View style={styles.leftColumn}>
            <ProductCard
              icon="https://path/to/icon.png"
              title="Painel Solar"
              acquisitionDate="04/04/2024"
              expirationDate="04/04/2024"
              status="Ativo"
            />
            <ProductCard
              icon="https://path/to/icon.png"
              title="Painel Solar"
              acquisitionDate="04/04/2024"
              expirationDate="04/04/2024"
              status="Ativo"
            />
            <ProductCard
              icon="https://path/to/icon.png"
              title="Painel Solar"
              acquisitionDate="04/04/2024"
              expirationDate="04/04/2024"
              status="Ativo"
            />
          </View>
          <View style={styles.rightColumn}>
            <View>
              <Text style={styles.label}>Prazo de Execução</Text>
              <Text style={styles.value}>14 Dias</Text>
            </View>
            <View>
              <Text style={styles.label}>Prazo de Validade</Text>
              <Text style={styles.value}>08 Meses</Text>
            </View>
            <View>
              <Text style={styles.label}>Data da Proposta</Text>
              <Text style={styles.value}>04 de Março 2024</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WarrantyAndTerms;
