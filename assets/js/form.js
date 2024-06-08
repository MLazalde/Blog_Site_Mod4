//get a reference to the #form

const formEl = document.querySelector("#landing-page-form");
//function to handle form submissions
const handleSubmitForm = function (event) {
  event.preventDefault();

  const userNameEl = document.querySelector("#userName");
  const titleEl = document.querySelector("#title");
  const contentEl = document.querySelector("#content");

  //create conditional that checks that a user entered in the username, title, content that has a timeOUt

  console.log(userNameEl);
  console.log(titleEl);
  console.log(contentEl);

  const formData = {
    username: userNameEl,
    title: titleEl,
    content: contentEl,
  };

  keeptLocStor(formData);
  //call redirect function
};
//create function that sends users to ./blog.html

const keepLocStor = function (data) {
  const allBlogs = readLocStor();

  allBlogs.push(data);

  const dataString = JSON.stringify(allBlogs);

  localStorage.setItem("blogs", dataString);
};

formEl.addEventListener("button", handleSubmitForm);

// const userName =

// $("input").on("click", function (event) {
//   event.preventDefault();
// });
// console.log(event);
