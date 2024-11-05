import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Icon } from "@iconify/react";

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    margin: "50px auto",
  },
  container: {
    backgroundColor: "#161616",
    color: "#fff",
    padding: 40,
    borderRadius: 8,
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "97%",
    margin: "0 auto",
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    marginBottom: 9,
  },
  detailLabel: {
    fontSize: 14,
    color: "#ACACAC",
  },
  rightColumn: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  rightColumnItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid #D6D6D6",
  },
  highlight: {
    color: "#4DEB05",
    marginBottom: 9,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    border: "5px solid #111",
    backgroundColor: "#252525",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});

interface InvestmentDetailsProps {
  data: {
    monthlyConsumption: string;
    monthlySavings: string;
    investmentReturn: string;
    price: string;
    discounts: string;
    finalProposalValue: string;
    paymentMethod: string;
  };
}

const InvestmentDetails = ({ data }: InvestmentDetailsProps) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Investimento</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.valueContainer}>
            <View style={styles.icon}>
              <Icon icon="mdi:calendar-month" />
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={styles.detail}>{data.monthlyConsumption}</Text>
              <Text style={styles.detailLabel}>Mensal</Text>
            </View>
          </View>
          <View style={styles.valueContainer}>
            <View style={styles.icon}>
              <Icon icon="mdi:currency-usd" />
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={styles.detail}>{data.monthlySavings}</Text>
              <Text style={styles.detailLabel}>Economia Mensal</Text>
            </View>
          </View>
          <View style={styles.valueContainer}>
            <View style={styles.icon}>
              <Icon icon="mdi:clock-time-four" />
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={styles.detail}>{data.investmentReturn}</Text>
              <Text style={styles.detailLabel}>Retorno do Investimento</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightColumn}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              borderBottom: "1px solid #FFF",
            }}
          >
            <Text style={styles.detailLabel}>Preço</Text>
            <Text style={styles.detail}>{data.price}</Text>
          </View>
          <View style={styles.rightColumnItem}>
            <Text style={styles.detailLabel}>Descontos</Text>
            <Text style={styles.detail}>{data.discounts}</Text>
          </View>
          <View style={styles.rightColumnItem}>
            <Text style={styles.detailLabel}>Valor Final da Proposta</Text>
            <Text style={styles.highlight}>{data.finalProposalValue}</Text>
          </View>
          <View style={styles.rightColumnItem}>
            <Text style={styles.detailLabel}>Forma de Pagamento</Text>
            <Text style={styles.detail}>{data.paymentMethod}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default InvestmentDetails;
