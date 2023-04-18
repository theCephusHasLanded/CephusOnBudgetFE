// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import TransactionList from "./Pages/TransactionList";
import TransactionNew from "./Pages/TransactionNew";
import TransactionShow from "./Pages/TransactionShow";
import TransactionEdit from "./Pages/TransactionEdit";
import NotFound from "./Pages/NotFound";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
return (
<div className="App">
<Router>
<NavBar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/transactions" element={<TransactionList />} />
<Route path="/transactions/new" element={<TransactionNew />} />
<Route path="/transactions/:id" element={<TransactionShow />} />
<Route path="/transactions/:id/edit" element={<TransactionEdit />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
</Router>
</div>
);
}

export default App;




