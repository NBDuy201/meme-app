import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MemeList from "./components/MemeList";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="page-container">
      <QueryClientProvider client={queryClient}>
        <MemeList></MemeList>
      </QueryClientProvider>
    </div>
  );
}

export default App;
