import Link from "next/link";
import Layout from "../src/component/Layout/index";
import fetch from "isomorphic-unfetch";

const Index = ({ dogs }) => (
  <div className="container">
    {" "}
    <div className="row">
      {dogs.message.map((images, id) => (
        <div className="col-12 col-md-6 col-lg-4">
          <img key={id} src={images} alt="..." class="img-thumbnail" />
        </div>
      ))}{" "}
    </div>
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/14");
  const dogs = await res.json();
  return { dogs };
};

export default Index;
