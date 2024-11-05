import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    width: "70%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 10,
    color: "#4DEB05",
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: "#ACACAC",
    lineHeight: 1.4,
  },
});

interface SolarComponentCardProps {
  image: string;
  title: string;
  quantity: string;
  description: string;
}

const SolarComponentCard = ({ image, title, quantity, description }: SolarComponentCardProps) => {
  return (
    <View style={styles.card}>
      <Image src={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default SolarComponentCard;
