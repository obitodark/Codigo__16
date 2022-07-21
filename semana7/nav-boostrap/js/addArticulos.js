let arrayProduct = [];

const producto3 = new Article("Sandalia Mujer 15263", "GOTTA");
producto3.setImage(
  "https://falabella.scene7.com/is/image/FalabellaPE/18424645_1?wid=1500&hei=1500&qlt=70"
);
producto3.setDiscount("30% DCTO");
producto3.setStars(4);
const producto2 = new Article("zapatilla mujer", "GOTTA");
producto2.setGender(false);
producto2.setImage(
  "https://falabella.scene7.com/is/image/FalabellaPE/17749935_2?wid=1500&hei=1500&qlt=70"
);
producto2.setStars(2);

const producto = new Article("ZAPATILLAS HOOPS ", "ADIDAS");
producto.setImage(
  "https://i.linio.com/p/b35c968e0c8e8d9e252b85b67c620b5b-product.webp"
);
producto.setImage(
  "https://i.linio.com/p/af6daaf951f552ff1a36a166931157af-product.webp"
);
producto.setImage(
  "https://i.linio.com/p/f5e630ebffca1119ca274733c7756ffb-product.webp"
);
producto.setImage(
  "https://i.linio.com/p/29422aef02b048ffd19e609969aee009-product.webp"
);
producto.setPrice(300);
producto.setPriceOff(450);
producto.setStars(5);
producto.setDiscount("70% DCTO");
const producto1 = new Article("Zapailla", "PUMA");
producto1.setImage(
  "https://i.linio.com/p/ebabe58dc1ccb010f488e4302e8d1199-product.webp"
);
producto1.setImage(
  "https://i.linio.com/p/81d2419f09a16fc33c32a915ba80a805-product.webp"
);
producto.setDescription(
  "Las zapatillas Adidas pasan por un minucioso examen de calidad, donde ponen a prueba hasta el mínimo detalle para que rindan al máximo y saquen lo mejor de ti.Adidas tiene zapatillas para niños y adultos, hombres y mujeres, todos disfrutan de la mejor calidad en calzado. Tiene los mejores modelos entre deportivos, casuales y urbanas, cada uno con un diseño distinto para cada estilo."
);
producto1.setStars(1);

arrayProduct.push(producto);
arrayProduct.push(producto1);
arrayProduct.push(producto2);
arrayProduct.push(producto3);
arrayProduct.push(producto);
arrayProduct.push(producto1);
arrayProduct.push(producto2);
arrayProduct.push(producto3);
