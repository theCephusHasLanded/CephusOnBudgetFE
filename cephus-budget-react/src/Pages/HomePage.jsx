import { Container, Button } from 'react-bootstrap';

import gifImage from '../assets/Animation Design GIF by Thomas L Ricci - Find & Share on GIPHY.gif';

const HomePage = () => {
  return (
    <div className="HomePage" style={{ textAlign: 'center' }}>
      <Container>
        <h2>Welcome to The Mod 4 Pursuit Budgeting App</h2>
        <h3>Powered by Cephus</h3>
        <img src={gifImage} alt="Animation Design GIF by Thomas L Ricci" style={{ maxWidth: '100%' }} />
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
