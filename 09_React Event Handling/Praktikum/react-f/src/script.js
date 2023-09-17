const form = document.getElementById("formProduct");
const tbody = document.getElementById("tbody-product");
const searchBtn = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const deleteBtn = document.getElementById("deleteButton");
const alertSearch = document.getElementById("alertSearch");

// product form element
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDesc = document.getElementById("productDesc");
const productFreshness = document.getElementsByName("productFreshness");
const productImage = document.getElementById("productImage");

// Error Element
const errorProduct = document.getElementById("errorProduct");
const errorPrice = document.getElementById("errorPrice");
const errorCategory = document.getElementById("errorCategory");
const errorDesc = document.getElementById("errorDesc");
const errorFreshness = document.getElementById("errorFreshness");
const errorImage = document.getElementById("errorImage");

// Data
const data = [];

// Make red border for invalid form value
const errorThrow = (message, elementInput, elementError) => {
  elementError.innerText = message;
  elementError.classList.add("text-danger");
  elementInput.classList.add("border", "border-danger");
};

// remove red border if input already valid
const removeError = (elementInput, elementError) => {
  elementError.innerText = "";
  elementInput.classList.remove("border", "border-danger");
};

// radio form validation
const radioValidation = () => {
  let formValid = false;

  let i = 0;
  while (!formValid && i < productFreshness.length) {
    if (productFreshness[i].checked) formValid = true;
    i++;
  }

  return formValid;
};

// Form Validation
const formValidation = (e) => {
  const arr = {};

  // Product Name
  if (productName.value.length > 25) {
    e.preventDefault();
    errorThrow("Product Name must not exceed 25 characters.", productPrice, errorProduct);
  }

  if (productName.value.match("[@/#{}]")) {
    e.preventDefault();
    errorThrow("Name must not contain symbols.", productName, errorProduct);
  }

  if (productName.value.length < 1) {
    e.preventDefault();
    errorThrow("Please enter a valid Product name.", productName, errorProduct);
  } else {
    removeError(productName, errorProduct);
    arr["productName"] = form.elements["productName"].value;
  }

  // Product Category
  if (productCategory.value.length < 1) {
    e.preventDefault();
    errorThrow("The Category field must be filled in", productCategory, errorCategory);
  } else {
    removeError(productCategory, errorCategory);
    arr["productCategory"] = form.elements["productCategory"].value;
  }

  // Product Image
  if (productImage.value.length < 1) {
    e.preventDefault();
    errorImage.innerText = "The Image field must be filled in";
    errorImage.classList.add("text-danger");
    productImage.classList.replace("border-primary", "border-danger");
  } else {
    errorImage.innerText = "";
    productImage.classList.remove("border-danger");
    arr["productImage"] = form.elements["productImage"].value;
  }

  //Product Freshness
  if (!radioValidation()) {
    e.preventDefault();
    errorFreshness.innerText = "The Freshness field must be checked";
    errorFreshness.classList.add("text-danger");
  } else {
    let freshness;

    errorFreshness.innerText = "";
    errorFreshness.classList.remove("text-danger");

    for (let i = 0; i < productFreshness.length; i++) {
      if (productFreshness[i].checked) {
        freshness = productFreshness[i].value;
      }
    }
    arr["productFreshness"] = freshness;
  }

  // Product Description
  if (productDesc.value.length < 1) {
    e.preventDefault();
    errorThrow("The Description field must be filled in", productDesc, errorDesc);
  } else {
    removeError(productDesc, errorDesc);
    arr["productDesc"] = form.elements["productDesc"].value;
  }

  // Product price
  if (productPrice.value.length < 1 || isNaN(Number(productPrice.value))) {
    e.preventDefault();
    errorThrow("Please enter a valid Product price.", productPrice, errorPrice);
  } else {
    removeError(productPrice, errorPrice);
    arr["productPrice"] = form.elements["productPrice"].value;
  }

  if (Object.keys(arr).length == 6) {
    data.push(arr);

    form.elements["productName"].value = "";
    form.elements["productCategory"].value = "";
    form.elements["productImage"].value = "";
    form.elements["productDesc"].value = "";
    form.elements["productPrice"].value = "";
    productFreshness[0].checked = true;

    showData(data);
    setTimeout(() => {
      alert("Success Input Data!");
    }, 100);
  }
};

// On submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation(e);
  searchInput.value = "";
});

