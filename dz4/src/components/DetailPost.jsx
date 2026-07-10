import { useDetailPost } from "../hooks/useDetailPost";
import { Link, useParams } from "react-router-dom";

export const DetailPost = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useDetailPost(id);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-black">
        <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-black!">LOADING...</h1>
          <p className="mt-2 text-sm text-black">Загружаем пост</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-black">
        <div className="rounded-lg border border-red-200 bg-white px-6 py-5 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-red-600">ERROR...</h1>
          <p className="mt-2 text-sm text-black">Не удалось загрузить пост</p>
          <Link
            to="/"
            className="mt-5 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Назад к постам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-left text-black sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link
          to="/"
          className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-black transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
        >
          Назад к постам
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            Post #{data.id}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-black">
            User {data.userId}
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Views: {data.views}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold leading-tight text-black! sm:text-5xl">
          {data.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-black">{data.body}</p>

        <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-black">Лайки</p>
            <p className="mt-1 text-2xl font-bold text-black">
              {data.reactions?.likes ?? 0}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-black">Дизлайки</p>
            <p className="mt-1 text-2xl font-bold text-black">
              {data.reactions?.dislikes ?? 0}
            </p>
          </div>
        </div>

        {data.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-black"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  );
};
