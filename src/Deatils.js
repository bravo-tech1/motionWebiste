import { useState } from "react";
import parse from "html-react-parser";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect } from "react";

export default function Pack() {
  const [deatils, setDeatil] = useState([]);
  const [videos, setVideos] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);

  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/detail/show`)
      .then((res) => res.json())
      .then((dataRes) => setDeatil(dataRes.filter((x) => x.package_id === id)));
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/video/show`)
      .then((res) => res.json())
      .then((dataRes) => setVideos(dataRes));
  }, []);

  const items = deatils.map((item) => (
    <>
      <div>
        <div className="WordStyle">{parse(item.text_en)}</div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide custom-detail"
        data-bs-ride="carousel"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={item.detailimages[0].image}
              className="d-block w-100"
              height={"600px"}
              alt="img"
            />
          </div>
          {deatils
            .map((item) => item.detailimages)[0]
            .slice(1)
            .map((nice) => (
              <div className="carousel-item">
                <img
                  src={nice.image}
                  className="d-block w-100"
                  height={"600px"}
                  alt="img"
                />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          style={{ left: "-10%" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ right: "-10%", color: "var(--yellow-color)" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div className="WordStyle">{parse(item.text2_en)}</div>
      </div>
    </>
  ));

  const videosI = videos.map((item) => (
    <div className="col-md-4">
      <video autoPlay muted>
        <source src={`${item.video}`} type="video/mp4" />
      </video>
    </div>
  ));
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "10%" }}>
        {items}
        <div className="row">{videosI}</div>
      </div>
      <Footer />
    </>
  );
}
