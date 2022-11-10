import calculating from '../assets/calculating.png';

const Home = () => (
  <section className="home-section">
    <div className="home-cont flex flex-col">
      <header>
        <h2 className="welcome-txt">Welcome To our page!</h2>
      </header>
      <div className="content flex">
        <p className="home-text">
          This webpage is an application that allows the user to do most
          arithmetic operations. Also, it provides a section with random
          interesting quotes from people who have marked their generations with
          their intelligence, inventions and other deeds.
        </p>
        <img
          className="home-img"
          src={calculating}
          alt="man seated doing math"
        />
      </div>
    </div>
  </section>
);

export default Home;
