import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Footer from '../components/Footer'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container sx={{ mt: 5 }}>
        <CardComponent />
      </Container>
      <Footer />
    </>
  )
}

export default Home