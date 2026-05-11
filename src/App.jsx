import TwitterSidebar from "./components/TwitterSidebar.jsx";
import { tweets } from "./data/tweets";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <TwitterSidebar tweets={tweets} />
      </div>
    </main>
  );
}
