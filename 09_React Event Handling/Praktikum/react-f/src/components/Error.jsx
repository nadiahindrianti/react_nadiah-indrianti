const ErrorInput = ({ id, message }) => {
    return (
      <div id={id} className="text-danger">
        <p>{message}</p>
      </div>
    );
  };
  
  export default ErrorInput;