console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent = "Second social media post content.";

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@new-username";

const newPostLikeButton = document.createElement("button");
newPostLikeButton.classList.add("post__button");
newPostLikeButton.setAttribute("data-js", "like-button");
newPostLikeButton.textContent = "♥ Like";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

newPostLikeButton.addEventListener("click", handleLikeButtonClick);

// Figure out how to add that element to the page
newPost.appendChild(newPostContent);
newPostFooter.appendChild(newPostUsername);
newPostFooter.appendChild(newPostLikeButton);
newPost.appendChild(newPostFooter);

// Fügen Sie die zweite Post dem Body hinzu
document.body.appendChild(newPost);
