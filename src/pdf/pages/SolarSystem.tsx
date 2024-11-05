import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import SolarComponentCard from "../components/SolarComponentCard";
import ClientSellerCard from "../components/ClientSellerCard";
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "20px 40px",
    gap: 40,
    backgroundColor: "#161616",
    borderRadius: 10,
    width: "97%",
    margin: "0 auto",
    height: "89%",
  },
  leftSection: {
    flex: 0.4,
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#616161",
  },
  powerIndicator: {
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    width: "85%",
    alignItems: "center",
  },
  powerLabel: {
    fontSize: 20,
    color: "#292929",
    fontWeight: "bold",
  },
  powerValue: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#878787",
  },
  rightSection: {
    flex: 0.6,
  },
  title: {
    fontSize: 32,
    color: "white",
    marginBottom: 10,
  },
  typeAreaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  type: {
    fontSize: 12,
    color: "#4DEB05",
    marginRight: 5,
  },
  area: {
    fontSize: 12,
    color: "#ACACAC",
  },
});

interface SolarSystemProps {
  title: string;
  type: string;
  area: string;
  power: {
    current: number;
    max: number;
  };
  mainImage: string;
}

const SolarSystem = ({ title, type, area, power, mainImage }: SolarSystemProps) => {
  return (
    <>
      <Header
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_wVQIJP3AHSn2Pt_nO4T1ExMHLGpiUxyjQ&s"
        date={new Date()}
      />
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Image src={mainImage} style={styles.mainImage} />
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.powerIndicator}>
              <Text style={styles.powerLabel}>Potência</Text>
              <Text style={styles.powerValue}>{power.current} kWp</Text>
              <View style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: 5, marginTop: 10 }}>
                <View
                  style={{
                    height: 10,
                    width: `${(power.current / power.max) * 100}%`,
                    backgroundColor: "#4DEB05",
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.typeAreaContainer}>
            <Text style={styles.type}>{type}</Text>
            <Text style={styles.area}>• Área Requerida {area}</Text>
          </View>
          <SolarComponentCard
            image="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-shining-solutions-exploring-solar-plates-for-energy-png-image_12442026.png"
            title="Painel Solar"
            quantity="04 Unidades"
            description="Descrição marca e tipo do painel solar detalhado em poucas palavras."
          />
          <SolarComponentCard
            image="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-shining-solutions-exploring-solar-plates-for-energy-png-image_12442026.png"
            title="Painel Solar"
            quantity="04 Unidades"
            description="Descrição marca e tipo do painel solar detalhado em poucas palavras."
          />
          <SolarComponentCard
            image="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-shining-solutions-exploring-solar-plates-for-energy-png-image_12442026.png"
            title="Painel Solar"
            quantity="04 Unidades"
            description="Descrição marca e tipo do painel solar detalhado em poucas palavras."
          />
          <ClientSellerCard
            client={{
              name: "Camila da Silva Lima",
              address: "Rua Jeri 123, Campo Grande/MS",
              phone: "(00) 0 0000-0000",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_wVQIJP3AHSn2Pt_nO4T1ExMHLGpiUxyjQ&s",
            }}
            seller={{
              name: "Meri Lima",
              role: "Admin Aster",
              phone: "(00) 0 0000-0000",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_wVQIJP3AHSn2Pt_nO4T1ExMHLGpiUxyjQ&s ",
            }}
          />
        </View>
      </View>
    </>
  );
};

export default SolarSystem;
