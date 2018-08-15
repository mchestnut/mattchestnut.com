const samples = document.querySelector('.c-samples')

// Add observer to samples to animate columns
function animateProjects(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const columns = samples.querySelectorAll('.c-samples__column')

      columns.forEach(column => {
        column.classList.add('c-samples__column--animate')
      })
      samplesObserver.unobserve(samples)
    }
  })
}

const samplesObserver = new IntersectionObserver(animateProjects, {
  rootMargin: '-50%'
})
samplesObserver.observe(samples)