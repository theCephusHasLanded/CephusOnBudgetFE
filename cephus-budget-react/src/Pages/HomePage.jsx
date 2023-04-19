import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import gif1 from '../assets/1.gif';
import gif2 from '../assets/2.gif';
import gif3 from '../assets/3.gif';
import gif4 from '../assets/4.gif';

const HomePage = () => {
  const [gifImage, setGifImage] = useState(gif1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 4) + 1;
      switch (randomNum) {
        case 1:
          setGifImage(gif1);
          break;
        case 2:
          setGifImage(gif2);
          break;
        case 3:
          setGifImage(gif3);
          break;
        case 4:
          setGifImage(gif4);
          break;
        default:
          setGifImage(gif1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="HomePage" style={{ textAlign: 'center' }}>
      <Container>
        <h2>Welcome to The Mod 4 Pursuit Budgeting App</h2>
        <h3>Powered by Cephus</h3>
        <img src={gifImage} alt="4 Randomized Gifs" style={{ width: '500px', height: '500px', objectFit: 'cover' }} />
        <div>
          <Button variant="outline-secondary" href="https://github.com/theCephusHasLanded/CephusOnBudgetFE">
            GitHub FE Repo
          </Button>
          <Button variant="outline-secondary" href="https://github.com/theCephusHasLanded/CephusOnBudgetBE">
            GitHub BE Repo
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
