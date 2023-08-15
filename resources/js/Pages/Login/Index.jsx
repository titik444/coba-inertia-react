import MainLayout from "@/Layouts/MainLayout";
import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";

export default function Index({ flashMessage }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <MainLayout>
            <Head title="Login" />

            <div className="row justify-content-center">
                <div className="col-md-4">
                    {Object.values(errors).length > 0 ? (
                        <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                        >
                            {Object.values(errors)[0]}
                        </div>
                    ) : flashMessage?.type == "error" ? (
                        <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                        >
                            {flashMessage.message}
                        </div>
                    ) : flashMessage?.type == "success" ? (
                        <div
                            className="alert alert-success alert-dismissible fade show"
                            role="alert"
                        >
                            {flashMessage.message}
                        </div>
                    ) : null}

                    <main className="form-signin">
                        <h1 className="h3 mb-3 fw-normal text-center">
                            Please login
                        </h1>
                        <form onSubmit={submit}>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button
                                className="w-100 btn btn-lg btn-primary"
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? "Loading..." : "Sign In"}
                            </button>
                        </form>
                        <small className="d-block text-center mt-3">
                            Not registered?{" "}
                            <a href="/register">Register Now!</a>
                        </small>
                    </main>
                </div>
            </div>
        </MainLayout>
    );
}
