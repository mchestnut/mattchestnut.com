const bio = document.querySelector('.c-bio')

function animateBio() {
  bio.classList.add('c-bio--animate')
}

if ('IntersectionObserver' in window) {
  // Add observer to bio
  function handleBioObserver(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateBio()
        bioObserver.unobserve(bio)
      }
    })
  }

  const bioObserver = new IntersectionObserver(handleBioObserver, {
    rootMargin: '-50%'
  })
  bioObserver.observe(bio)

} else {
  //Scroll listener fallback
  function handleBioScroll() {
    const rootIntersection = window.scrollY + (window.innerHeight / 2)

    if (rootIntersection > bio.offsetTop) {
      animateBio()
      window.removeEventListener('scroll', handleBioScroll)
    }
  }
  
  window.addEventListener('scroll', handleBioScroll)
}