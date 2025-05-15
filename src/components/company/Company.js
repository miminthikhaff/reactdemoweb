function company(props) {
  const {
    companyName = "Unknown Company",
    details = "No details available about the company",
  } = props;

  const buttonHandler = (companyName) => {
    console.log("Button clicked" + companyName);
  };

  return (
    <div className="company">
      <h1>Company Name: {companyName}</h1>
      <p>{details}</p>
      <button
        onClick={() => {
          buttonHandler(companyName);
        }}
      >
        Select {companyName}
      </button>
    </div>
  );
}

// The above code is a functional component in React that takes props as an argument and returns a JSX element.
// The component is named "company" and it displays the company name and details passed to it as props.
// The component is then exported as the default export of the module, allowing it to be imported and used in other files.
// The component is styled with a class name "company" which can be used to apply CSS styles.
// The component is a simple example of how to create a reusable component in React that can accept props and render dynamic content.

/* company.defaultProps = {
  companyName: "Unknown Company",
  details: "No details available about the company",
}; */

// The above code sets default values for the props of the company component.
// If the component is used without passing any props, it will display the default values.

export default company;
