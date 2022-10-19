import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Landing() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    fetch("https://test.emkanfinances.net/api/website/showbyid/1")
      .then((res) => res.json())
      .then((dataRes) => {
        if (isApiSubscribed) {
          setSection(dataRes);
        }
      });
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);

  const SectionShow = section.map((item, key) => (
    <div key={key}>
      {localStorage.getItem("dark") === "true" ? (
        <img
          src={require("../assets/images/night.jpg")}
          className=" img-fluid images landing-img"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <img
          src={require("../assets/images/light.jpg")}
          className=" img-fluid images landing-img"
          style={{ objectFit: "cover" }}
        />
      )}
      {localStorage.getItem("dark") === "true" ? (
        <div className="contect"> {parse(item.title_en_night)} </div>
      ) : (
        <div className="contect"> {parse(item.title_en)} </div>
      )}
    </div>
  ));
  return <div className="landind text-center">{SectionShow}</div>;
}
