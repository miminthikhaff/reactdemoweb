import "./Department.css";

const Department = ({ departments, onDepartmentSelect, children }) => {
  if (!Array.isArray(departments)) {
    return <p>No departments available.</p>;
  }

  return (
    <div>
      {children}
      <ol className="list">
        {departments.map((item, index) => (
          <li key={index}>
            <button className="btn-sm" onClick={() => {
              onDepartmentSelect(item);
            }}>
              {item}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Department;
