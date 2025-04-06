
//scroll functionality
document.getElementById("projectsB").addEventListener("click", function() {
    document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("teamB").addEventListener("click", function() {
    document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("aboutB").addEventListener("click", function() {
    document.getElementById("view").scrollIntoView({ behavior: "smooth" });
});

/*
    intersection observer: when elements come into view
    threshold (how much visibility)
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: Stop observing after it's visible
        observer.unobserve(entry.target);
      }
      else {
    //  entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.15 // Trigger when 10% of element is visible
  });

  // Grab all elements you want to animate
  document.querySelectorAll('.fade-in-on-scroll, .slide-in-on-scroll').forEach(el => {
    observer.observe(el);
  });