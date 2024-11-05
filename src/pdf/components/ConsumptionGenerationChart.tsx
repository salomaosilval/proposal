import { View, Text, StyleSheet } from "@react-pdf/renderer";

interface ConsumptionData {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
}

interface ConsumptionGenerationChartProps {
  data: ConsumptionData;
  fixedValue: number;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 200,
    marginBottom: 20,
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 10,
  },
  bar: {
    width: 22,
    backgroundColor: "#378613",
    margin: 2,
    position: "relative",
    borderRadius: "5px",
  },
  fixedBar: {
    width: 22,
    backgroundColor: "#B9E8A3",
    margin: 2,
    position: "relative",
    borderRadius: "5px",
  },
  label: {
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
    bottom: -15,
    left: 0,
    right: 0,
    color: "#878787",
  },
  legendContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 15,
    marginRight: 10,
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

const ConsumptionGenerationChart = ({ data, fixedValue }: ConsumptionGenerationChartProps) => {
  const chartData = Object.entries(data);
  const maxValue = Math.max(...Object.values(data), fixedValue);

  const step = maxValue / 5;
  const legendValues = Array.from({ length: 5 }, (_, index) => {
    return (5 - index) * step;
  });

  return (
    <View style={styles.chartWrapper}>
      <View style={styles.legendContainer}>
        {legendValues.map((value) => (
          <Text key={value} style={styles.legendValue}>
            {value.toFixed(1)} kWh
          </Text>
        ))}
      </View>
      <View style={styles.container}>
        {chartData.map(([month, value]) => {
          const barHeight = (value / maxValue) * 150;
          const fixedBarHeight = (fixedValue / maxValue) * 150;

          return (
            <View key={month} style={styles.barContainer}>
              <View style={{ ...styles.fixedBar, height: fixedBarHeight }} />
              <View style={{ ...styles.bar, height: barHeight }} />
              <Text style={styles.label}>{month}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ConsumptionGenerationChart;
