import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <div class="mb-4">
          <a href="https://vitejs.dev" target="_blank" class="me-3">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
          </a>
        </div>
        <h1 class="display-4 mb-4">Hello Vite!</h1>
        <div class="card shadow-sm p-4 mb-4">
          <button id="counter" type="button" class="btn btn-primary"></button>
        </div>
        <p class="text-muted">
          Click on the Vite logo to learn more
        </p>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))