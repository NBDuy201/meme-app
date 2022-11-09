import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MemeList from "./components/MemeList";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="page-container">
      <QueryClientProvider client={queryClient}>
        <MemeList></MemeList>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </div>
  );
}

export default App;
