import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Categories({ categories }) {
    return (
        <MainLayout>
            <Head title="Categories" />

            <div>
                <h1 className="mb-5">Post Categories</h1>
                <div className="container">
                    <div className="row">
                        {categories.length === 0 ? (
                            <p className="text-center">No Category</p>
                        ) : (
                            categories.map((data) => {
                                return (
                                    <div className="col-md-4" key={data.id}>
                                        <Link
                                            href={`/posts?category=${data.slug}`}
                                        >
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src={`https://source.unsplash.com/500x500?${data.name}`}
                                                    className="card-img"
                                                    alt={data.name}
                                                />
                                                <div className="card-img-overlay d-flex align-items-center p-0">
                                                    <h5
                                                        className="card-title text-center flex-fill p-4 fs-3"
                                                        style={{
                                                            backgroundColor:
                                                                "rgba(0,0,0,0.7)",
                                                        }}
                                                    >
                                                        {data.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
