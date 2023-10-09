import "./footer.css";
import gamingImg from "../assets/images/image-gaming-growth.jpg";
import pcsImg from "../assets/images/image-retro-pcs.jpg";
import laptopsImg from "../assets/images/image-top-laptops.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <img src={pcsImg} alt="footer-image" />
        <div className="texts">
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="footer-items">
        <img src={laptopsImg} alt="footer-image" />
        <div className="texts">
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="footer-items">
        <img src={gamingImg} alt="footer-image" />
        <div className="texts">
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}
