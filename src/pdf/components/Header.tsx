import { View, Image, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 60px",
    width: "100%",
    height: "60px",
    borderBottom: "1px solid #E2E2E2",
  },
  logo: {
    height: 40,
  },
  dateContainer: {
    alignItems: "flex-end",
  },
  dateText: {
    color: "#292929",
    fontSize: 14,
  },
  yearText: {
    color: "#292929",
    fontSize: 14,
    marginLeft: 40,
  },
});

interface HeaderProps {
  logo: string;
  date: Date;
}

const Header = ({ logo, date }: HeaderProps) => {
  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "long" });
    return {
      dayMonth: `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`,
      year: date.getFullYear(),
    };
  };

  const { dayMonth, year } = formatDate(date);

  return (
    <View style={styles.header}>
      <Image src={logo} style={styles.logo} />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{dayMonth}</Text>
        <Text style={styles.yearText}>{year}</Text>
      </View>
    </View>
  );
};

export default Header;
