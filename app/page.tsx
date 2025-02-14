
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      {/* Profile Section */}
      <Image
        src="/profile.jpg"  // Add your image to the public folder
        alt="Gabriel Seger"
        width={150}
        height={150}
        className="rounded-full border-4 border-gray-700 shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-4">Gabriel Seger</h1>
      <p className="mt-2 text-lg text-gray-300">
        Professional Hockey Player | Software Engineer
      </p>

      {/* Projects Section */}
      <h2 className="mt-8 text-2xl font-semibold">My Projects</h2>
      <ul className="mt-4 space-y-3 text-lg">
        <li>🏒 <strong>Hockey Analytics Dashboard</strong> - Advanced performance tracking</li>
        <li>📊 <strong>Survey Data Processor</strong> - Automating data analysis</li>
        <li>💻 <strong>Personal Website</strong> - This site!</li>
      </ul>

      {/* Links */}
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
