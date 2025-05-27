// RepoButton.jsx
import { FaGithub } from 'react-icons/fa';

export default function RepoButton({ repoUrl }) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-purple-700 text-white dark:bg-purple-400 dark:text-black px-4 py-2 rounded-lg shadow-md hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
    >
      <FaGithub />
      <span>View on GitHub</span>
    </a>
  );
}
