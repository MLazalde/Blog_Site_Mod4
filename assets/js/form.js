const submitBtn = document.getElementById("submit-btn");
const toggleModeBtn = document.getElementById("toggle-mode-btn");

// Function to save blog posts to local storage
const savePostsToLocalStorage = (posts) => {
  localStorage.setItem("blogPosts", JSON.stringify(posts));
};

// Event listener for form submission
submitBtn.addEventListener("click", function () {
  const username = document.getElementById("userName").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (username && title && content) {
    const newPost = { username, title, content };
    let posts = getPostsFromLocalStorage(); // Get existing posts from localStorage
    posts.push(newPost); // Push the new post into the posts array
    savePostsToLocalStorage(posts); // Save the updated posts array to localStorage
    location.replace("blog.html");
  } else {
    alert("Please fill out all fields");
  }
});

// Function to get existing blog posts from local storage
const getPostsFromLocalStorage = () => {
  const postsString = localStorage.getItem("blogPosts");

  if (postsString) {
    const parsedPosts = JSON.parse(postsString);

    return parsedPosts;
  } else {
    console.log("No existing posts found in localStorage");
    return [];
  }
};

// --------------------------------Dark Mode---------------------------------

// Function to toggle dark/light mode
const toggleMode = () => {
  document.body.classList.toggle("dark-mode");
  const currentMode = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("mode", currentMode);
};

// Event listener for toggle mode button
toggleModeBtn.addEventListener("click", toggleMode);

// Set initial mode based on local storage
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  document.body.classList.add("dark-mode");
}
