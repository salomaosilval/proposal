import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    margin: "10px 0",
    borderRadius: 5,
    border: "1px solid #D6D6D6",
    gap: 50,
  },
  personContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: "center",
    width: "50%",
  },
  type: {
    fontSize: 10,
    color: "#4DEB05",
    marginBottom: 3,
  },
  name: {
    fontSize: 10,
    color: "#ACACAC",
  },
  details: {
    fontSize: 10,
    color: "#ACACAC",
    marginBottom: 3,
  },
});

interface ClientSellerCardProps {
  client: {
    name: string;
    address: string;
    phone: string;
    avatar: string;
  };
  seller: {
    name: string;
    role: string;
    phone: string;
    avatar: string;
  };
}

const ClientSellerCard = ({ client, seller }: ClientSellerCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.personContainer}>
        <Image src={client.avatar} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.type}>
            Cliente <Text style={styles.name}>• {client.name}</Text>
          </Text>
          <Text style={styles.details}>{client.address}</Text>
          <Text style={styles.details}>{client.phone}</Text>
        </View>
      </View>
      <View style={styles.personContainer}>
        <Image src={seller.avatar} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.type}>
            Vendedor <Text style={styles.name}>• {seller.name}</Text>
          </Text>
          <Text style={styles.details}>{seller.role}</Text>
          <Text style={styles.details}>{seller.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default ClientSellerCard;
