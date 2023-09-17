import Submit from "../Button/Submit";
import Check from "../Input/Check";
import File from "../Input/File";
import Input from "../Input/Input";
import Select from "../Input/Select";
import TextArea from "../Input/TextArea";
import TitleText from "./TitleText";
import ObjectArticle from "./ObjectArticle";
import { useState } from "react";
import Language from "../Button/Language";

const Form = ({ setStateData }) => {
  const [prodName, setProdName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [filePath, setFilePath] = useState("");
  const [freshness, setFreshness] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState(false);
  const [lang, setLang] = useState("id");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Validation
    if (formValidation()) {
      setErrors(true);
      return;
    }


    alert("Success Submit");
    setProdName("");
    setPrice("");
    setCategory("");
    setFilePath("");
    setFreshness("");
    setDescription("");
    setErrors(false);
  };

  // Validation Function
  const formValidation = () => {
    if (prodName == "" || price == "" || category == "" || filePath == "" || freshness == "" || description == "") {
      return true;
    }

    if (prodName.length > 10 || isNaN(Number(price))) {
      return true;
    }
  };

  return (
    <div className="container w-50">
       <TitleText title={ObjectArticle.title[lang]} desc={ObjectArticle.description[lang]} />
      <h3 className="mt-2">Detail Product</h3>
      <form id="formProduct" onSubmit={handleSubmitForm}>
        <div className="col">
          <Input title="Product Name" idError="errorProduct" setStateItem={setProdName} value={prodName} stateError={errors} />
          <Select setCategory={setCategory} value={category} stateError={errors} />
          <File setFilePath={setFilePath} value={filePath} stateError={errors} />
          <Check setFreshness={setFreshness} value={freshness} stateError={errors} />
          <TextArea setDescription={setDescription} value={description} stateError={errors} />
          <Input title="Product Price" idError="errorPrice" setStateItem={setPrice} value={price} stateError={errors} />
          <Submit />
        </div>
      </form>
      <Language language={lang == "id" ? "English" : "Indonesia"} setLang={setLang} />
    </div>
  );
};

export default Form;