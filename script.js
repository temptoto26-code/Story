// 1. Welcome alert when the page loads
window.onload = function() {
    alert("Welcome to My Story Website! Enjoy reading the stories.");
};

// 2. Smooth scroll for navigation links
// This will ensure smooth scrolling when users click on any navigation link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Optional: Form Validation for Comment Section
// If you plan to have a comment section, this will ensure that users can’t submit an empty comment.

function validateCommentForm() {
    var comment = document.getElementById("comment").value;
    if (comment.trim() === "") {
        alert("Please enter a comment before submitting.");
        return false; // prevent form submission
    }
    return true; // allow form submission
}

// Example form that could be in your HTML
// <form onsubmit="return validateCommentForm()">
//     <textarea id="comment" placeholder="Write your comment..."></textarea>
//     <button type="submit">Submit</button>
// </form>

// 4. Example: Display a "Back to Top" Button after scrolling a certain distance
// Show the button when the user scrolls down 300px from the top of the document
window.onscroll = function() {
    var backToTopBtn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Back to Top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
