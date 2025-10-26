;(() => {
  const root = document.documentElement
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (saved === 'dark' || (!saved && prefersDark)) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-toggle-theme]')
    if (!t) return
    const isDark = root.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  })
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-mobile-menu-toggle]')
    if (!btn) return
    const menu = document.getElementById('mobile-menu')
    if (!menu) return
    const isHidden = menu.classList.contains('hidden')
    menu.classList.toggle('hidden', !isHidden)
    btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false')
  })
  const titleEl = document.getElementById('hero-title')
  if (titleEl) {
    const fullText = titleEl.textContent.trim()
    const textNode = document.createTextNode('')
    titleEl.textContent = ''
    titleEl.appendChild(textNode)
    const caret = document.createElement('span')
    caret.textContent = '|'
    caret.className = 'ml-1 text-primary'
    titleEl.appendChild(caret)
    let index = 0
    const step = () => {
      textNode.nodeValue = fullText.slice(0, index)
      if (index < fullText.length) {
        index++
        setTimeout(step, 80)
      } else {
        clearInterval(blink)
        caret.remove()
      }
    }
    const blink = setInterval(() => {
      caret.style.opacity = caret.style.opacity === '0' ? '1' : '0'
    }, 500)
    setTimeout(step, 300)
  }
})()
