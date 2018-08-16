const samples = document.querySelector('.c-samples')

function animateProjects() {
  const columns = samples.querySelectorAll('.c-samples__column')

  columns.forEach(column => {
    column.classList.add('c-samples__column--animate')
  })
}

if ('IntersectionObserver' in window) {
  // Add observer to samples to animate columns
  function handleSamplesObserver(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProjects()
        samplesObserver.unobserve(samples)
      }
    })
  }
  
  const samplesObserver = new IntersectionObserver(handleSamplesObserver, {
    rootMargin: '-50%'
  })
  samplesObserver.observe(samples)

} else {
  // Scroll listener fallback
  function handleSamplesScroll() {
    const rootIntersection = window.scrollY + (window.innerHeight / 2)

    if (rootIntersection > samples.offsetTop) {
      animateProjects()
      window.removeEventListener('scroll', handleSamplesScroll)
    }
  }
  
  window.addEventListener('scroll', handleSamplesScroll)
}