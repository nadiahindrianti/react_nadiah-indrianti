import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import { Provider } from "react-redux";
import store from "../store/store";

describe("Test Page Create Product", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

  const productName = screen.getByTitle("productName");
  expect(productName).toBeDefined();
  fireEvent.change(productName, { target: { value: "Kulkas 2 Pintu" } });

  const productCategory = screen.getByTitle("productCategory");
  expect(productCategory).toBeDefined();
  fireEvent.change(productCategory, { target: { value: "Electronic Device" } });

  const Electronic Device = screen.getByTitle("Electronic Device");
  expect(Electronic Device).toBeDefined();
  fireEvent.click(Electronic Device);

  const radio0 = screen.getByTitle("radio0");
  expect(radio0).toBeDefined();
  fireEvent.click(radio0);

  const imageOfProduct = screen.getByTitle("imageOfProduct");
  expect(imageOfProduct).toBeDefined();
  fireEvent.change(imageOfProduct, {
    target: {
      files: [
        new File(["image/Kulkas 2 Pintu.png"], "Kulkas 2 Pintu.png", {
          type: "image/png",
        }),
      ],
    },
  });

  const additionalDesc = screen.getByTitle("additionalDesc");
  expect(additionalDesc).toBeDefined();
  fireEvent.change(additionalDesc, { target: { value: "Kulkas 2 Pintu merek LG" } });

  const randomNumber = screen.getByTitle("randomNumber");
  expect(randomNumber).toBeDefined();
  fireEvent.click(randomNumber);

  const submit = screen.getByTitle("submit");
  expect(submit).toBeDefined();
  fireEvent.click(submit);
});