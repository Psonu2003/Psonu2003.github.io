import RepoButton from "../RepoButton";

export default function TestItem1() {
  return (
    <div
      className="w-256 h-128 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-4 rounded-lg shadow-[0_0_20px_5px_#7e22ce]"
      style={{ left: '50%'}}
    >
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Laser Quantum Key Distribution BB84 Protocol
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
        A proof-of-concept physical implementation of the QKD BB84 protocol using lasers, half-wave plates, laser detectors, and polarizing beamsplitters. It classically demonstrates the BB84 protocol and its strength in identifying eavesdroppers.
      </p>

      {/* Thorlabs Image with Link */}
      <a
        href="https://www.thorlabs.com/images/tabimages/QC_Kit_Experiment_D1-1000.gif"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg overflow-hidden shadow-lg mb-2"
      >
        <img
          src="https://www.thorlabs.com/images/tabimages/QC_Kit_Experiment_D1-1000.gif"
          alt="Thorlabs Quantum Optics Kit"
          className="w-120 h-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </a>

      {/* Image Caption */}
      <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-4">
        Image from{" "}
        <a
            href="https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=9869"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-500"
        >
            Quantum Cryptography Analogy Demonstration Kit
        </a>
        . The kit on ThorLabs costs roughly $4000 whereas my implementation costs under $200.
        </p>

      {/* GitHub Button */}
      <RepoButton repoUrl="https://github.com/Psonu2003/Laser-QKD-BB84" />
    </div>
  );
}
