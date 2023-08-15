import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Index() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post("register");
    };

    return (
        <MainLayout>
            <Head title="Register" />

            <div className="row justify-content-center">
                <div className="col-lg-5">
                    {Object.values(errors).length > 0 && (
                        <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                        >
                            {Object.values(errors)[0]}
                        </div>
                    )}

                    <main className="form-registration">
                        <h1 className="h3 mb-3 fw-normal text-center">
                            Registration Form
                        </h1>
                        <form onSubmit={submit}>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control rounded-top"
                                    id="name"
                                    placeholder="Name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control "
                                    id="username"
                                    placeholder="Username"
                                    onChange={(e) =>
                                        setData("username", e.target.value)
                                    }
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control "
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
                                    className="form-control rounded-bottom "
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button
                                className="w-100 btn btn-lg btn-primary mt-3"
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? "Loading..." : "Register"}
                            </button>
                        </form>
                        <small className="d-block text-center mt-3">
                            Already registered? <a href="/login">Login</a>
                        </small>
                    </main>
                </div>
            </div>
        </MainLayout>
    );
}
