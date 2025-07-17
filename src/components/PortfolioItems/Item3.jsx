import RepoButton from "../RepoButton";

export default function Item3() {
return (
    <div
        className="w-full max-w-2xl mx-auto min-h-96 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-4 rounded-lg shadow-[0_0_15px_5px_#7e22ce]"
    >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Four-Point Probe Superconductor Amplifier
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
            Constructed a constant 0.1 A current source and implemented the classic three op-amp amplifier circuit to measure the resistance of a Bi-2212 superconductor via the four-point probe method.
            Amplified the four-point probe voltage reading by a gain of 21 to fine tune the resistance measurement of the superconductor. Analyzed the data using Python and found the critical temperature of the superconductor to be around 90.3 K.
        </p>

        {/* Embedded PDF Viewer */}
        <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg mb-4" style={{ height: "min(80vh, 500px)" }}> {/* Responsive height for PDF */}
            <iframe
                src="/Final_Lab_Project.pdf"
                title="PDF Viewer"
                className="w-full h-full"
                style={{ border: "none" }}
            />
        </div>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-4">
            This PDF contains detailed documentation and results for the superconductor amplifier project.
        </p>
    </div>
);
}
