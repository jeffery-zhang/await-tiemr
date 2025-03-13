import { AwaitTimer } from '../lib/awaitTimer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id='counter'>
    0
  </div>
`

const timer = new AwaitTimer(loopCallback, 1000, {
  immediate: true,
  autoStart: false,
})

function loopCallback(): Promise<void> {
  return new Promise(resolve => {
    const counter = document.querySelector<HTMLDivElement>('#counter')!

    setTimeout(() => {
      if (counter.innerHTML === '10') {
        timer.stop()
        counter.innerHTML = '0'
        resolve()
        return
      }
      counter.innerHTML = String(Number(counter.innerHTML) + 1)
      resolve()
    }, 1000)
  })
}

timer.start()
