interface INavigation {
    id: number,
    name: string,
    path: string
}

export const NAV_LINKS: INavigation[] = [
    {
        id: 1,
        name: 'Accueil',
        path: '/',
    },
    {
        id: 2,
        name: 'Produits',
        path: '/products',
    },
    {
        id: 3,
        name: 'Détail',
        path: '/product-details',
    },
    {
        id: 4,
        name: 'Panier',
        path: '/cart',
    },
    {
        id: 5,
        name: 'Paiement',
        path: '/payment',
    },
    {
        id: 6,
        name: 'Récap',
        path: '/recap',
    },
    {
        id: 7,
        name: '404',
        path: '/ezfrgd',
    },
]