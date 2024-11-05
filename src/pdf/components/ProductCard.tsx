import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderBottom: "1px solid #FFF",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 40,
    border: "5px solid #111",
    backgroundColor: "#252525",
  },
  details: {
    color: "#ACACAC",
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  acquisitionExpirationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  acquisition: {
    fontSize: 12,
    color: "#ACACAC",
  },
  expiration: {
    fontSize: 12,
    color: "#ACACAC",
  },
  acquisitionValue: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  expirationValue: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  status: {
    fontSize: 14,
    color: "#4DEB05",
    textAlign: "right",
  },
});

interface ProductCardProps {
  icon: string;
  title: string;
  acquisitionDate: string;
  expirationDate: string;
  status: string;
}

const ProductCard = ({ icon, title, acquisitionDate, expirationDate, status }: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Image src={icon} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.status}>{status}</Text>
        </View>
        <View style={styles.acquisitionExpirationRow}>
          <Text style={styles.acquisition}>Aquisição:</Text>
          <Text style={styles.acquisitionValue}>{acquisitionDate}</Text>
          <Text style={styles.expiration}>Vencimento:</Text>
          <Text style={styles.expirationValue}>{expirationDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
