import exampleScript from './scripts/exampleScript'

const Loaded = (arg) => {
  console.log(exampleScript(arg))
}

window.onload = Loaded('Worlds')
