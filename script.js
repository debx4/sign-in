const questionForm = document.getElementById("question-form");
const questionContainer = document.getElementById("questions-container");

questionForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  const questionText = document.getElementById("question").value;

  // Create a new question element
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  const questionTitle = document.createElement("p");
  questionTitle.classList.add("question-title");
  questionTitle.textContent = questionText;

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments");

  questionElement.appendChild(questionTitle);
  questionElement.appendChild(commentsContainer);

  questionContainer.appendChild(questionElement);

  // Clear the question input field
  document.getElementById("question").value = "";
});
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents  = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");

            }
            for(tablink of tablinks){
                tablink.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const likesCount = button.nextElementSibling;
    let count = parseInt(likesCount.textContent);
    count++;
    likesCount.textContent = count;
  });
});


const commentForm = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');
const commentsSection = document.querySelector('.comments');

commentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const comment = commentText.value;
  if (comment.trim() !== '') {
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
      <p class="comment-text">${comment}</p>
      <div class="comment-actions">
        <button class="like-btn">Like</button>
        <span class="likes-count">0</span>
      </div>
    `;
    commentsSection.appendChild(newComment);
    commentText.value = '';
  }
});

// Add functionality for adding comments, admin controls, etc. here