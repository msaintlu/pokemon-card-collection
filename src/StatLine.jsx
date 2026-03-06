
const StatLine = ({ label, value }) => {
    return (
        <>
        <span style={{ color: "#888" }}>{label}</span>
        <span style={{ fontWeight: "bold", fontSize: 18}}>{value}</span>
        </>
    );
};

export default StatLine;