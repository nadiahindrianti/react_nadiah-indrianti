const Language = ({ language, setLang }) => {
    return (
      <button
        className="btn btn-info position-fixed bottom-0 end-0 rounded-circle p-3 m-3"
        type="button"
        onClick={(e) =>
          setLang((prev) => {
            return prev == "id" ? "en" : "id";
          })
        }
      >
        {language}
      </button>
    );
  };
  
  export default Language;