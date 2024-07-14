import { HederComponent } from "./Header";

export const Shimmer = () => {
  return (
    <div className="body-cart">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="three"></div>
            <div className="two"></div>
            <div className="one"></div>
            
          </div>
        ))}
    </div>
  );
};
