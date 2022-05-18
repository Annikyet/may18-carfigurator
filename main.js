const options = {
  bodies: {
    name: 'Body',
    liftback: {
      name: 'Liftback',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 0
    },
    sedan: {
      name: 'Sedan',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 3000
    },
    convertible: {
      name: 'Convertible',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 6000
    }
  },
  engines: {
    name: 'Engine',
    rwd: {
      name: '240HP RWD Electric',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 0
    },
    phev: {
      name: '300HP RWD Plug-in Hybrid',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 6000
    },
    awd: {
      name: '360HP Electric',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 16000
    }
  },
  colors: {
    name: 'Color',
    red: {
      name: 'Burgundy',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 0
    },
    blue: {
      name: 'Teal',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 0
    },
    black: {
      name: 'Onyx',
      description: 'Meow meow meow meow meow meow meow meow meow.',
      image: '//thiscatdoesnotexist.com',
      price: 1000
    }
  }
}

let selections = {
  bodies: undefined,
  engines: undefined,
  colors: undefined
}

function optionHtml(component, option) {
return `
<div class="col-md-6 col-lg-4">
<div class="card${selections[component] === option ? " bg-black" : ""}" onclick="selectOption('${component}', '${option}')">
  <img src="${options[component][option].image}" alt="" class="card-img-top">
  <div class="card-body">
    <h3 class="card-title">${options[component][option].name}</h3>
    <p class="card-text">${options[component][option].description}</p>
    <h5 class="card-subtitle">+$${options[component][option].price}</h5>
  </div>
</div>
</div>`
}

function componentHtml(component) {
  return `
  <div class="row">
  <div class="navbar container-fluid">
    <h2 class="navbar-brand">${options[component].name}</h2>
  </div>`
}

function draw() {
  let html = ""
  for (const component in options) {
    html += componentHtml(component)
    for (const option in options[component]) {
      // this is super hacky...
      if (option !== 'name') {
        html += optionHtml(component, option)
      }
    }
    html += `</div>`
  }
  document.getElementById('options').innerHTML = html
}

function selectOption(component, option) {
  selections[component] = option
  draw()
}

draw()