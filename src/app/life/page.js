import Link from "next/link";
import LifeNavbar from "../components/LifeNavbar";
import EmailSection from "../components/EmailSection";

export default function LifePage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] text-white">
            <LifeNavbar />
            <div className="container mx-auto sm:mt-16 px-10 py-16">
                <h1 className="text-4xl font-bold mb-6">Life</h1>
                <p className="text-lg leading-relaxed mb-4">
                    Welcome to the My Life Blog! Here, I share Insights, experiences, and stories about my journey, passions, and the things that inspire me.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Stay tuned for updates and reflections on various aspects of life, including personal growth, hobbies, and more.
                </p>
            </div>

            <div className="container mt-0 mx-auto px-12 py-0">
                <EmailSection pageId="life-contact" />
            </div>
        </main>
    );
}