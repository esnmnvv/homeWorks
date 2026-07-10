import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const Home = () => {
  const { data, isLoading, isError } = usePosts();

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-black">
        <div className="rounded-lg border border-red-200 bg-white px-6 py-5 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-red-600">ERROR...</h1>
          <p className="mt-2 text-sm text-black">Не удалось загрузить посты</p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-black">
        <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
          <h1 className="text-2xl font-semibold  text-black!">LOADING...</h1>
          <p className="mt-2 text-sm text-black">Загружаем список постов</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-left text-black sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            DummyJSON posts
          </p>
          <h1 className="mt-2 text-3xl font-bold text-black! sm:text-4xl">
            Список постов
          </h1>
          <p className="mt-3 max-w-2xl text-base text-black">
            Выберите пост, чтобы открыть детальный просмотр с полным текстом и
            статистикой.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((post) => {
            return (
              <article
                key={post.id}
                className="flex min-h-64 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-black">
                    Post #{post.id}
                  </span>
                  <span className="text-xs text-black">User {post.userId}</span>
                </div>

                <h2 className="text-xl font-semibold leading-snug text-black!">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-black">
                  {post.body}
                </p>

                <Link
                  to={`/post/${post.id}`}
                  className="mt-5 inline-flex w-fit items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Подробнее
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
