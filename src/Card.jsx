
const Card = ({ children }) => {
  return (
    <div className="card"
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 150,
        }}
    >
    {children}
    </div>
  );
};

export default Card;