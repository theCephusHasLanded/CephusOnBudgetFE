// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/HomePage";
import TransactionList from "./Pages/ListPage";
import TransactionNew from "./Pages/NewPage";
import TransactionShow from "./Pages/ShowPage";
import TransactionEdit from "./Pages/EditPage";
import NotFound from "./Pages/ErrorPage";

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




