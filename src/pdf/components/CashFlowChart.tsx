import { View, Text, StyleSheet } from "@react-pdf/renderer";

interface CashFlowData {
  name: string;
  savings: number;
}

interface CashFlowChartProps {
  data: CashFlowData[];
}

const monthNames: { [key: string]: string } = {
  jan: "Jan",
  feb: "Fev",
  mar: "Mar",
  apr: "Abr",
  may: "Mai",
  jun: "Jun",
  jul: "Jul",
  aug: "Ago",
  sep: "Set",
  oct: "Out",
  nov: "Nov",
  dec: "Dez",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    alignItems: "flex-end",
    height: 200,
    width: "100%",
    margin: "0 auto",
    color: "#ACACAC",
  },
  bar: {
    width: 22,
    margin: 2,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  legendContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 15,
    marginLeft: 30,
    height: 200,
  },
  legendValue: {
    fontSize: 14,
    color: "#878787",
  },
  chartWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
  },
});

const CashFlowChart: React.FC<CashFlowChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => Math.abs(item.savings)));
  const heightLimit = 150;

  const step = maxValue / 5;
  const legendValues = Array.from({ length: 5 }, (_, index) => {
    const value = maxValue - index * step;
    return value > 0 ? `R$ ${value.toFixed(2)}` : `- R$ ${Math.abs(value).toFixed(2)}`;
  });

  return (
    <View style={styles.chartWrapper}>
      <View style={styles.legendContainer}>
        {legendValues.map((value) => (
          <Text key={value} style={styles.legendValue}>
            {value}
          </Text>
        ))}
      </View>
      <View style={styles.container}>
        {data.map(({ name, savings }) => {
          const barHeight = Math.min((Math.abs(savings) / maxValue) * heightLimit, heightLimit);
          const barColor = savings < 0 ? "#E53E3E" : "#4DEB05";

          const monthKey = name.split("/")[0];
          const formattedMonth = monthNames[monthKey] || monthKey;

          return (
            <View key={name} style={{ alignItems: "center" }}>
              <View style={{ ...styles.bar, height: barHeight, backgroundColor: barColor }} />
              <Text style={styles.label}>{formattedMonth}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CashFlowChart;
