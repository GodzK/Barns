import Image from "next/image";
import Nav from "@/Nav";
import bg from "./bg.jpg";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Nav />
          <div className="header-sec">
            <Image
              src={bg}
              alt="Picture of the author"
              className="img-header"
            />
            <h1 className="h1">
              A NEW <span className="h1-style">AGRICULTURE</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="detail">
        <div></div>
        <div className="text-detail">
          <h2>How it Work</h2>
        </div>
        <div className="text-detail">
          <p>
            Create professional website designs. Responsive, fully customizable
            with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header
            and footer, layout and other design elements, as well as content and
            images.
          </p>
        </div>
        <div className="detail-images">
          <div className="images-pic"></div>
          <div className="images-pic"></div>
          <div className="images-pic"></div>
          <div className="images-pic"></div>
          <div className="images-pic"></div>
          <div className="images-pic"></div>
        </div>
      </div>
    </>
  );
}
