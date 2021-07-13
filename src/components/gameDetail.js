import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { game, screen } = useSelector((state) => state.detail);
  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating : {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
//this errors out
            <div className="platforms">
              {game.platforms &&
                game.platforms.map((data) => (
                  <h3 key={data.platform.id}> {data.platfrom.name}</h3>
                ))}
            </div>
          </div>
        </div>

        <div className="media">
          <img src={game.background_image} alt="image" />
        </div>
//this errors out 
        <div className="gallery">
          {screen.results &&
            screen.results.map((screen) => (
              <img src={screen.image} alt="screenshots" key={screen.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
