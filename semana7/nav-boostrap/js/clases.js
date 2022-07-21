class Specs {
  constructor() {
    this.brand = "";
    this.model = "";
    this.origin = "";
    this.category = "";
    this.name = "";
    this.weight = 0;
  }
}

class Comemts {
  constructor(_user, _comment) {
    this.user = _user;
    this.comment = _comment;
    this.starmtmt = 1;
  }
  setStars(stars) {
    this.stars = stars;
  }

  setUser(user) {
    this.user = user;
  }
}

class Article {
  constructor(_name, _brand) {
    this.id = "_" + Math.random().toString(36).slice(2);
    this.name = _name;
    this.brand = _brand;
    this.category = "";
    this.image = [];
    this.stars = 0;
    this.price = 0;
    this.price_off = 0;
    this.description = "";
    this.detail = [];
    this.assessment = [];
    this.discount = "";
    /* is true=  hombre*/
    this.gender = true;
  }
  setImage(imagen) {
    this.image.push(imagen);
  }

  getImage() {
    return this.image;
  }

  setCategory(categoria) {
    this.category = categoria;
  }

  setPrice(precio) {
    this.price = precio;
  }
  setAssessment(evaluacion) {
    this.assessment.push(evaluacion);
  }
  setPrice(precio) {
    this.price = precio;
  }

  setPriceOff(precio) {
    this.price_off = precio;
  }
  setAssessment(comment) {
    this.assessment = comment;
  }
  setGender(gender) {
    this.gender = gender;
  }
  setStars(stars) {
    this.stars = stars;
  }

  setDiscount(discount) {
    this.discount = discount;
  }

  setDescription(description) {
    this.description = description;
  }
}
