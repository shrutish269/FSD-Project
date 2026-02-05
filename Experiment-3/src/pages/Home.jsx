import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <Container sx={{ mt: 5, textAlign: "center" }}>
        <CardComponent />

        {/* ROUTING LINK */}
        <Link
          to="/projects"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          View Projects
        </Link>
      </Container>

      <Footer />
    </>
  );
}

export default Home;