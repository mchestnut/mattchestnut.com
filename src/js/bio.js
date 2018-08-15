const bio = document.querySelector('.c-bio')

function animateBio(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      bio.classList.add('c-bio--animate')
      bioObserver.unobserve(bio)
    }
  })
}

const bioObserver = new IntersectionObserver(animateBio, {
  rootMargin: '-50%'
})
bioObserver.observe(bio)