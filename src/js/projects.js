const body = document.querySelector('body')
const projects = document.querySelectorAll('.c-project')

// Add click events to toggle projects
projects.forEach(project => {
  const button = project.querySelector('.c-project__button')
  const details = project.querySelector('.c-project__details')
  const detailsContainer = project.querySelector('.c-project__details-container')
  const thumbnail = project.querySelector('.c-project__thumbnail')
  const figures = project.querySelectorAll('.c-project__figure')
  let timeout = null

  // Clone title
  const title = project.querySelector('.c-project__title').cloneNode(true)
  title.classList.add('c-project__title--large')

  // Get src and create image
  const src = thumbnail.getAttribute('src')
  const srcset = thumbnail.getAttribute('srcset')
  const image = document.createElement('img')
  image.classList.add('c-project__image')


  // Prepend clones to details container
  detailsContainer.insertBefore(title, detailsContainer.firstChild)
  detailsContainer.insertBefore(image, detailsContainer.firstChild)

  function toggleDetails(mode) {
    body.classList.toggle('u-overflow-hidden')

    if (mode == 'show') {
      clearTimeout(timeout)

      if (!image.src) {
        image.src = src
        image.srcset = srcset
      }

      if (figures) {
        figures.forEach(figure => {
          const figureImg = figure.querySelector('img')
          figureImg.src = figureImg.dataset.src
          figureImg.srcset = figureImg.dataset.srcset
        })
      }

      details.classList.add('c-project__details--visible')
      details.classList.add('c-project__details--top')
    } else {
      details.classList.remove('c-project__details--visible')

      // Delay removing z-index class
      timeout = setTimeout(() => {
        details.classList.remove('c-project__details--top')
        details.scrollTop = 0
      }, 200)
    }
  }

  // Add click events
  project.addEventListener('click', () => {
    toggleDetails('show')
  })

  details.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleDetails('hide')
  })

  button.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleDetails('hide')
  })

  detailsContainer.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})