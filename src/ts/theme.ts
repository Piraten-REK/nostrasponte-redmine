ready(() => {
  console.log('Hello World!')
})

function ready (fn: Function) {
  if (document.readyState !== 'loading') fn()
  // @ts-ignore
  else document.addEventListener('DOMContentLoaded', fn)
}
