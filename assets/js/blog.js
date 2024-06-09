// Return button
const backbutton = document.getElementById("back-btn");

backbutton.addEventListener("click", function () {
  location.replace("./index.html");
});

//-------------------------------------Dark mode-------------------------------------------------

// Function to toggle dark mode
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const toggleMode = () => {
  document.body.classList.toggle("dark-mode");
  const currentMode = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("mode", currentMode);
};

// Event listener for dark/light mode button
toggleModeBtn.addEventListener("click", toggleMode);

// Set initial mode based on local storage
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  document.body.classList.add("dark-mode");
}

// --------------------------------------Printing new blogs-----------------------------------------------
const postsContainer = document.getElementById("posts-container");

// Function to get blog posts from local storage
const getPostsFromLocalStorage = () => {
  const posts = localStorage.getItem("blogPosts");
  return posts ? JSON.parse(posts) : [];
};

// Function to display all blog posts
const displayPosts = () => {
  postsContainer.innerHTML = "<h2>Blog Posts</h2>";
  const posts = getPostsFromLocalStorage();

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <h4>by ${post.username}</h4>
        <p>${post.content}</p>
      `;
    postsContainer.appendChild(postDiv);
  });
};

// Display posts on page load
displayPosts();
