import "./new.css";

export default function New() {
  return (
    <div className="new">
      <h1 className="title">New</h1>
      <div className="news">
        <h2 className="news-title">New Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="line"></div>
      <div className="news">
        <h2 className="news-title">The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="line"></div>
      <div className="news">
        <h2 className="news-title">Is VC Funding Drying Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}
