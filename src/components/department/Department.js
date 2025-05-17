
import './Department.css';

const Department = ({ departments, children }) => {
  if (!Array.isArray(departments)) {
    return <p>No departments available.</p>;
  }

  return (
    <div>
      {children}
      <ol className="list">
        {departments.map((item, index) => (
          <li key={index}>
            <button className="btn-sm">{item}</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Department;
