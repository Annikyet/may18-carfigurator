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
      name: '360HP AWD Electric',
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

class Option {
  constructor(name, description, image, price) {
    this.name = name
    this.description = description
    this.image = image
    this.price = price
    this.isSelected = false
  }

  get html() {
    return `
      <div class="col-md-6 col-lg-4">
      <div class="card${this.isSelected ? " bg-black" : ""}" onclick="selectOption('meow')">
        <img src="${this.image}" alt="" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">${this.name}</h3>
          <p class="card-text">${this.description}</p>
          <h5 class="card-subtitle">+$${this.price}</h5>
        </div>
      </div>
      </div>`
  }
}

class Component {
  constructor(component) {
    this.name = component.name
    this.selection = undefined
    this.options = {}
    for (const option in component) {
      if (option !== 'name') {
        this.options[option] = new Option(
          component[option].name,
          component[option].description,
          component[option].image,
          component[option].price
        )
      }
    }
  }
  
  get html() {
    let html = ``
    html += `
      <div class="row">
      <div class="navbar container-fluid">
        <h2 class="navbar-brand">${this.name}</h2>
      </div>`
    for (const option in this.options) {
        html += this.options[option].html
      }
    html += `</div>`
    return html
  }

  set select(selection) {
    for (const option in options) {
      if (option !== 'name') {
        this.options[option].isSelected = false
      }
    }
    this.options[selection].isSelected = true
  }
}

let components = {
  bodies: new Component(options.bodies),
  engines: new Component(options.engines),
  colors: new Component(options.colors)
}

function draw() {
  let html = ''
  for (const component in components) {
    html += components[component].html
  }
  document.getElementById('options').innerHTML = html
}

function selectOption(component, option) {

  draw()
}



draw()

// class option - done
// class component x3 instances, with embedded option classes & html method - done
// price summation in draw function
// controller class for button clicks
// car class with options, price, etc