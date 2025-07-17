// BeamSplitter.jsx
export default function BeamSplitter({ darkMode }) {
  return (
    <div
      className={`w-12 h-12 rounded-md shadow-lg ${
        darkMode ? 'bg-purple-400' : 'bg-purple-500'
      } transition-colors duration-500`}
    />
  );
}
