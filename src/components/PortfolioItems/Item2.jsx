import RepoButton from "../RepoButton";

export default function TestItem2() {
  return (
    <div
      className="w-256 h-128 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-4 rounded-lg shadow-[0_0_15px_5px_#7e22ce]"
      style={{ left: '50%' }}
    >
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Perfectly Elastic Collision Simulator
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
        This animation is a result of a perfectly elastic collision between two boxes. Due to their ratio, the number of collisions produce the digits of pi.
      </p>

      {/* Embedded MP4 Video */}
      <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
        <video
          src="/animation.mp4"
          controls
          className="w-full h-full object-cover"
          preload="metadata"
        />
      </div>

      <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-4">
        This animation shows how the ratio of the two boxes leads to a series of collisions that approximate the digits of pi.
      </p>

      <RepoButton repoUrl="https://github.com/Psonu2003/CollisionAnimation" />
    </div>
  );
}
