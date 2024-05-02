import { useScreen } from "@/hooks";

export const AllPool = () => {
  const { isMobile } = useScreen();

  return (
    <div className="allpool">
      <div className={`${isMobile ? "hidden" : ""} allpool-head`}>
        <h1>All Pool</h1>
      </div>
      <hr />
      <div className="allpool-content">This is Content</div>
    </div>
  );
};
