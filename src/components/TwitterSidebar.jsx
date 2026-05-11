import { useMemo, useState } from "react";

const INITIAL_VISIBLE_TWEETS = 5;
const LOAD_MORE_STEP = 5;

export default function TwitterSidebar({ tweets = [], onLoadMore }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_TWEETS);

  const recentTweets = useMemo(
    () => tweets.slice(0, visibleCount),
    [tweets, visibleCount]
  );
  const hasMoreTweets = visibleCount < tweets.length;

  function handleLoadMore() {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + LOAD_MORE_STEP, tweets.length)
    );
    onLoadMore?.();
  }

  return (
    <aside
      aria-label="Tweets recentes"
      className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-bold text-slate-950">Tweets recentes</h2>
      </div>

      <ul className="divide-y divide-slate-100">
        {recentTweets.map((tweet) => (
          <li key={tweet.id} className="flex gap-3 px-5 py-4">
            <img
              src={tweet.user.avatarUrl}
              alt={`Avatar de ${tweet.user.handle}`}
              className="h-11 w-11 flex-none rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-950">
                {tweet.user.handle}
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-700">
                {tweet.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-slate-200 p-4">
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={!hasMoreTweets}
          className="w-full rounded-full bg-twitter px-4 py-2.5 text-sm font-bold text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-twitter focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
        >
          Cargar más
        </button>
      </div>
    </aside>
  );
}
