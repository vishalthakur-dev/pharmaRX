const BASE_PATH = "/category/vitamins-and-supplements";

export default function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const pageNumbers = [];
  const showPages = 5;
  let start = Math.max(1, currentPage - Math.floor(showPages / 2));
  let end = Math.min(totalPages, start + showPages - 1);
  if (end - start + 1 < showPages) start = Math.max(1, end - showPages + 1);
  for (let i = start; i <= end; i++) pageNumbers.push(i);

  const hrefFor = (num) => (num === 1 ? BASE_PATH : `${BASE_PATH}?page=${num}`);

  const linkClass =
    "inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:ring-2 focus:ring-cyan-500";
  const pageBtnClass =
    "flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:ring-2 focus:ring-cyan-500";

  return (
    <nav
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {prevPage ? (
        <a
          href={hrefFor(prevPage)}
          className={linkClass}
          rel="prev"
          aria-label="Previous page"
        >
          Previous
        </a>
      ) : (
        <span
          className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-400"
          aria-disabled="true"
        >
          Previous
        </span>
      )}

      <ul className="flex items-center gap-1">
        {start > 1 && (
          <>
            <li>
              <a
                href={hrefFor(1)}
                className={pageBtnClass}
                aria-label="Page 1"
              >
                1
              </a>
            </li>
            {start > 2 && <li className="px-1 text-zinc-400">…</li>}
          </>
        )}
        {pageNumbers.map((num) => (
          <li key={num}>
            {num === currentPage ? (
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-cyan-600 bg-cyan-50 font-semibold text-cyan-700"
                aria-current="page"
                aria-label={`Page ${num}`}
              >
                {num}
              </span>
            ) : (
              <a
                href={hrefFor(num)}
                className={pageBtnClass}
                aria-label={`Page ${num}`}
              >
                {num}
              </a>
            )}
          </li>
        ))}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && <li className="px-1 text-zinc-400">…</li>}
            <li>
              <a
                href={hrefFor(totalPages)}
                className={pageBtnClass}
                aria-label={`Page ${totalPages}`}
              >
                {totalPages}
              </a>
            </li>
          </>
        )}
      </ul>

      {nextPage ? (
        <a
          href={hrefFor(nextPage)}
          className={linkClass}
          rel="next"
          aria-label="Next page"
        >
          Next
        </a>
      ) : (
        <span
          className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-400"
          aria-disabled="true"
        >
          Next
        </span>
      )}
    </nav>
  );
}
