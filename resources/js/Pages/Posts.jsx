import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import moment from "moment/moment";

export default function Posts({ title, posts }) {
    const { data, setData, get, processing } = useForm({
        search: new URLSearchParams(window.location.search).get("search") || "",
    });

    const submit = (e) => {
        e.preventDefault();
        get("posts");
    };

    console.log(posts.links);

    return (
        <MainLayout>
            <Head title="Posts" />

            <h1 className="mb-3 text-center">{title}</h1>
            <div className="row justify-content-center mb-3">
                <div className="col-md-6">
                    <form onSubmit={submit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search.."
                                name="search"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <button className="btn btn-danger" type="submit">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {posts.data.length === 0 ? (
                <p className="text-center fs-4">No post found.</p>
            ) : (
                <>
                    <div className="card mb-3">
                        <img
                            src={`https://source.unsplash.com/1200x400?${posts.data[0].category.name}`}
                            className="card-img-top"
                            alt={posts.data[0].category.name}
                        />
                        <div className="card-body text-center">
                            <h3 className="card-title">
                                <Link
                                    href={`/posts/${posts.data[0].slug}`}
                                    className="text-decoration-none text-dark"
                                >
                                    {posts.data[0].title}
                                </Link>
                            </h3>
                            <p>
                                <small className="text-muted">
                                    By.{" "}
                                    <Link
                                        href={`/posts?author=${posts.data[0].author.username}`}
                                        className="text-decoration-none"
                                    >
                                        {posts.data[0].author.name}
                                    </Link>{" "}
                                    in{" "}
                                    <Link
                                        href={`/posts?category=${posts.data[0].category.slug}`}
                                        className="text-decoration-none"
                                    >
                                        {posts.data[0].category.name}
                                    </Link>{" "}
                                    {moment(posts.data[0].created_at).fromNow()}
                                </small>
                            </p>

                            <p className="card-text">{posts.data[0].excerpt}</p>

                            <Link
                                href={`/posts/${posts.data[0].slug}`}
                                className="text-decoration-none btn btn-primary"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            {posts.data.map((data) => {
                                return (
                                    <div
                                        className="col-md-4 mb-3"
                                        key={data.id}
                                    >
                                        <div className="card">
                                            <div
                                                className="position-absolute px-3 py-2"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(0, 0, 0, 0.7)",
                                                }}
                                            >
                                                <Link
                                                    href={`/posts?category=${data.category.slug}`}
                                                    className="text-white text-decoration-none"
                                                >
                                                    {data.category.name}
                                                </Link>
                                            </div>
                                            <img
                                                src={`https://source.unsplash.com/500x400?${data.category.name}`}
                                                className="card-img-top"
                                                alt={data.category.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {data.title}
                                                </h5>
                                                <p>
                                                    <small className="text-muted">
                                                        By.{" "}
                                                        <Link
                                                            href={`/posts?author=${data.author.username}`}
                                                            className="text-decoration-none"
                                                        >
                                                            {data.author.name}
                                                        </Link>{" "}
                                                        {moment(
                                                            data.created_at
                                                        ).fromNow()}
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    {data.excerpt}
                                                </p>
                                                <Link
                                                    href={`/posts/${data.slug}`}
                                                    className="btn btn-primary"
                                                >
                                                    Read more
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}

            <div className="d-flex justify-content-end">
                <nav>
                    <ul className="pagination">
                        {posts.links.map((data) => {
                            return (
                                <li
                                    className={`page-item ${
                                        data.active ? "active" : ""
                                    }`}
                                >
                                    {data.active || data.url == null ? (
                                        <span className="page-link">
                                            {data.label === "&laquo; Previous"
                                                ? "‹"
                                                : data.label === "Next &raquo;"
                                                ? "›"
                                                : data.label}
                                        </span>
                                    ) : (
                                        <Link
                                            className={`page-link`}
                                            href={data.url}
                                        >
                                            {data.label === "&laquo; Previous"
                                                ? "‹"
                                                : data.label === "Next &raquo;"
                                                ? "›"
                                                : data.label}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </MainLayout>
    );
}
