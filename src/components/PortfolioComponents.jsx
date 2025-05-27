import TestItem1 from "./PortfolioItems/Item1";
import TestItem2 from "./PortfolioItems/Item2";

function PortfolioComponents({ darkMode, refID, receiverActive }) {
  let content;
  if (refID === 1) content = <TestItem1 />;
  else if (refID === 2) content = <TestItem2 />;
  else content = <div>No component for this refID</div>;

  return (
    <div
      className={`transition-opacity duration-500 ${
        receiverActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {content}
    </div>
  );
}
 export default PortfolioComponents;