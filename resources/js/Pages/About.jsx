import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function About({ name, email, image }) {
    return (
        <MainLayout>
            <Head title="About" />

            <h1>Halaman About</h1>
            <h3>{name}</h3>
            <p>{email}</p>
            <img
                src={`img/${image}`}
                alt={name}
                width="200"
                className="img-thumbnail rounded-circle"
            />
        </MainLayout>
    );
}
