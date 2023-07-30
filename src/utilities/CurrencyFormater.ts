// Convertisseur de format monnaie
const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
    style: "currency", currency: "EUR"
})
// à la place de undefined, on peut préciser un type de monnaie, ici
// la fonction s'adapte au type qui vient

export function CurrencyFormater (number: number) {
    return CURRENCY_FORMATER.format(number);
}