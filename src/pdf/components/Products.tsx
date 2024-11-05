import { View, Image, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    padding: "20px 40px",
  },
  productsGrid: {
    flexDirection: "row",
    gap: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    padding: 20,
  },
  productImage: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },
  productName: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  productQuantity: {
    fontSize: 14,
    color: "#4DEB05",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 12,
    color: "#ACACAC",
    lineHeight: 1.4,
  },
});

interface ProductsProps {
  products: Array<{
    name: string;
    quantity: string;
    description: string;
    image: string;
  }>;
}

const Products = ({ products }: ProductsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.productsGrid}>
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image src={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productQuantity}>{product.quantity}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Products;
