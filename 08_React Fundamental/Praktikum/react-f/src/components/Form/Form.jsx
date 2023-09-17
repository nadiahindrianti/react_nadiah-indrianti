import Submit from "../Button/Submit";
import Check from "../Input/Check";
import File from "../Input/File";
import Input from "../Input/Input";
import Select from "../Input/Select";
import TextArea from "../Input/TextArea";
import TitleText from "./TitleText";

const Form = () => {
  return (
    <div className="container w-50">
      <TitleText />
      <h3 className="mt-2">Detail Product</h3>
      <form id="formProduct">
        <div className="col">
          <Input id="productName" title="Product Name" idError="errorProduct" />
          <Select />
          <File />
          <Check />
          <TextArea />
          <Input id="productPrice" title="Product Price" idError="errorPrice" />
          <Submit />
        </div>
      </form>
    </div>
  );
};

export default Form;