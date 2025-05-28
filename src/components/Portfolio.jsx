import Showcase from './Showcase';

export default function Portfolio({ darkMode, laserBottom }) {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">Portfolio</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Scroll down to discover the magic.</p>
      </div> */}

      {/* Showcase Sections */}
      <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 text-center py-6 transition-colors duration-500">
        Portfolio
      </h1>
      <Showcase darkMode={darkMode} laserBottom={laserBottom} refID={1} />
      <Showcase darkMode={darkMode} laserBottom={laserBottom} refID={2} />
      <Showcase darkMode={darkMode} laserBottom={laserBottom} refID={3} />
      {/* <Showcase darkMode={darkMode} laserBottom={laserBottom} refID={1} /> */}
      <div className="relative transition-colors duration-500 text-black dark:text-white">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div>
    </div>
  );
}
