import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Havanese = ({ dog }) => {
  return (
    <div className="container">
      <div className="row">
        {dog.message.map((images, id) => (
          <div className="col-12 col-md-6 col-lg-4">
            <img key={id} src={images} alt="..." className="img-thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

Havanese.getInitialProps = async () => {
  const res = await fetch("https://dog.ceo/api/breed/havanese/images/random/10");
  const dog = await res.json();
  return { dog };
};
export default Havanese;
