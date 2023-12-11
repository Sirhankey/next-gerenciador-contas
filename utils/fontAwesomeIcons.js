
class FontAwesomeIcons {
  constructor() {
    this.icons = {
      "casa": "fa fa-home",
      "alimentação": "fas fa-utensils",
      "tecnologia": "fas fa-laptop",
      "saúde": "fas fa-heart",
      "veículo": "fas fa-car",
      "finanças": "fas fa-money-bill",
      "comunicação": "fas fa-phone",
      "educação": "fas fa-book"
    };
  }

  getIconByGroup(groupName) {
    return this.icons[groupName] || "fas fa-question";
  }
}

export default FontAwesomeIcons;
