
const Card = ({ children }) => {
  return (
    <div className="card"
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
    >
    {children}
    </div>
  );
};

export default Card;