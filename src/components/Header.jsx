import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import SearchBar from "./SearchBar";
import CardHeader from "./CardHeader";

function Header() {
  const cardDetails = [
    {
      id: 1,
      title: "Bimbingan MaLes",
      description: "Bimbel Tatap muka belajar tanpa ribet tersedia sekarang tersedia di sekitar anda",
      buttonText: "Temukan Guru Terdekat",
    },
    {
      id: 2,
      title: "Konsultasi MaLes",
      description: "Masih bingung cari guru bimbel yang pas untuk anak, yuk konsultasikan dulu kebutuhan Anda!",
      buttonText: "Konsultasi",
    },
  ];

  return (
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-4">
              Selamat Datang di <span>MaLes</span> Tempat Belajar Tanpa Ribet
            </h1>
            <p className="mb-4">
              Dapatkan pengalaman bimbingan belajar atau les privat dengan guru les berkualitas yang sesuai dengan kebutuhan preferensi anda. Kami menyediakan platform yang memudahkan Anda menemukan apa yang anda butuhkan.
            </p>
            <SearchBar />
          </Col>
          <Col lg="6 pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-image" />
          </Col>
        </Row>
        <Row>
          {cardDetails.map((detail) => (
            <Col lg="6" key={detail.id}>
              <CardHeader title={detail.title} description={detail.description} buttonText={detail.buttonText} />
            </Col>
          ))}
        </Row>
      </Container>
    </header>
  );
}

export default Header;
