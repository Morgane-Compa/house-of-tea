/*méthode pour afficher 2 chiffres après la virgule
prend en paramètre le nombre à formater */

export const formatNumber = (numberToFormat: number) => {
    const result = parseFloat(String(numberToFormat)).toFixed(2);
    return Number(result);
}
