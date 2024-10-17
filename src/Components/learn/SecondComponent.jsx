import "./style.css";
const SecondComponent = () => {
  return <div>Bryan aka d4rkp0w4r</div>;
};

const ThirdComponent = () => {
  const year = `2024`;
  const tools = `Burp suite`;
  return (
    <>
      <div>Web Security, Software Exploitation</div>
      <div>
        {tools},{year}
      </div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Hack the planet
      </div>
    </>
  );
};

export { SecondComponent, ThirdComponent };
