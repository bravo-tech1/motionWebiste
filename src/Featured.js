import Header from "./components/Header";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
  const items = data.map((item) => (
    <div
      className="card"
      style={{
        width: "24rem",
      }}
    >
      <img
        src={item.package_image}
        className="card-img-top featured-img"
        alt="..."
        style={{ width: "100%", height: "20vw", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.details_title_en}</h5>
        <p className="balneo">
          Package Period: <span style={{ fontWeight: "blod" }}> From </span>
          <span style={{ color: "#ff5959" }}> {item.period_from}</span>
          <span style={{ fontWeight: "blod" }}> To </span>{" "}
          <span style={{ color: "#ff5959" }}> {item.period_to}</span>
        </p>
        <div>
          <p className="paragraph">
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_rate === 0 || item.package_rate === null ? (
                ""
              ) : item.package_rate === 1 ? (
                <i className="fa-solid fa-star"></i>
              ) : item.package_rate === 2 ? (
                <>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </>
              ) : item.package_rate === 3 ? (
                <>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </>
              ) : item.package_rate === 4 ? (
                <>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </>
              )}
            </span>
          </p>
        </div>
        <p className="card-text">{item.city_details_text1_en}</p>
      </div>
    </div>
  ));
  return (
    <div className="wide-father">
      <Header />
      <div>
        <div
          className="container"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {items}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
