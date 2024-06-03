export function SectionB() {
  return (
    // view
    <div className="section-b container">
      <div className="flex space-x-10">
        <div className="overflow-hidden border-2 rounded-xl max-h-100">
          <img
            src="/burn-corp.jpg"
            alt="burn"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden border-2 rounded-xl">
          <img src="/burn-corp.jpg" alt="burn" className="" />
        </div>
        <div className="overflow-hidden border-2 rounded-xl">
          <img src="/burn-corp.jpg" alt="burn" className="" />
        </div>
      </div>
    </div>
  );
}
