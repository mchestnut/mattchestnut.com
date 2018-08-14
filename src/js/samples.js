const body = document.querySelector('body')
const projects = document.querySelectorAll('.c-project')

projects.forEach(project => {
  const button = project.querySelector('.c-project__button')
  const details = project.querySelector('.c-project__details')
  const detailsContainer = project.querySelector('.c-project__details-container')
  const thumbnail = project.querySelector('.c-project__thumbnail')
  let timeout = null

  // Clone title
  const title = project.querySelector('.c-project__title').cloneNode(true)
  title.classList.add('c-project__title--large')

  // Get src and create image
  const src = thumbnail.getAttribute('src').replace('thumbnail', 'full')
  const image = document.createElement('img')
  image.src = src
  image.classList.add('c-project__image')


  // Prepend clones to details container
  detailsContainer.insertBefore(title, detailsContainer.firstChild)
  detailsContainer.insertBefore(image, detailsContainer.firstChild)

  function toggleDetails(mode) {
    body.classList.toggle('u-overflow-hidden')

    if (mode == 'show') {
      clearTimeout(timeout)
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