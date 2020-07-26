export default class Influencer {
  constructor(
    id,
    nome,
    cognome,
    descrizione,
    posizione,
    categorie,
    img,
    socials,
    contatti
  ) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.descrizione = descrizione;
    this.posizione = posizione;
    this.categorie = categorie;
    this.img = img;
    this.socials = socials;
    this.contatti = contatti;
  }
}
