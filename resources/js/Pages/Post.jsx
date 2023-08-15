import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Post({ post }) {
    return (
        <MainLayout>
            <Head title="Post" />

            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8">
                        <h1 className="mb-3">{post.title}</h1>
                        <p>
                            By.{" "}
                            <Link
                                href={`/posts?author=${post.author.username}`}
                                className="text-decoration-none"
                            >
                                {post.author.name}
                            </Link>{" "}
                            in{" "}
                            <Link
                                href={`/posts?category=${post.category.slug}`}
                                className="text-decoration-none"
                            >
                                {post.category.name}
                            </Link>
                        </p>
                        <img
                            src="https://source.unsplash.com/1200x400?"
                            alt={post.category.name}
                            className="img-fluid"
                        />
                        <article className="my-3 fs-5">{post.body}</article>
                        <Link href="/posts" className="d-block mt-3">
                            Back to posts
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
