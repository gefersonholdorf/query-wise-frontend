import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { KnowledgeBase } from "./pages/knowledge-base";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KnowledgeBase />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
