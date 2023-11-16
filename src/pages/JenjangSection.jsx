import { Container, Row, Col } from "react-bootstrap";
import Gambar1 from "../assets/img/sekolah-dasar.jpg";

function JenjangSection() {
  const semuaJenjang = [
    {
      id: 1,
      date: "1 - 28 Juli 2022",
      image: Gambar1,
      title: "SD",
      description: "Belajar dengan metode menyenangkan. Mulai dari:",
      price: "Rp.40.000-85.000/Sesi",
      buttonText: "Pelajari Selengkapnya",
      delay: "",
    },
    {
      id: 2,
      date: "Akan Datang",
      image: Gambar1,
      title: "SMP",
      description: "Belajar dengan metode menyenangkan & sangat mudah dipahami akan segera datang",
      price: "",
      buttonText: "Nantikan Segera",
      delay: "200",
    },
    {
      id: 1,
      date: "Akan Datang",
      image: Gambar1,
      title: "SMA",
      description: "Belajar dengan metode menyenangkan & sangat mudah dipahami akan segera datang",
      price: "",
      buttonText: "Nantikan Segera",
      delay: "400",
    },
  ];

  return (
    <div className="jenjang w-100 min-vh-100">
      <Container>
        <div className="container-box">
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Layanan Bimbingan Private Tersedia Berbagai Jenjang</h1>
            </Col>
          </Row>
          <Row>
            {semuaJenjang.map((jenjang) => {
              return (
                <Col key={jenjang.id}>
                  <h5>{jenjang.date}</h5>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h1>{jenjang.title}</h1>
                      <img className="member" src={jenjang.image} alt="" />
                      <img className="member" src={jenjang.image} alt="" />
                      <img className="member" src={jenjang.image} alt="" />
                    </div>
                    <div>
                      <img src={jenjang.image} alt="" className="mb-5 rounded" />
                    </div>
                  </div>
                  <p className="deskripsi">{jenjang.description}</p>
                  <p className="harga">{jenjang.price}</p>
                  <div className="text-end">
                    <button className="btn">{jenjang.buttonText}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default JenjangSection;
