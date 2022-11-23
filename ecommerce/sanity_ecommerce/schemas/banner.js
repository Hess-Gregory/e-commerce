export default {
    name: 'banner',
    title: 'Bannière',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Texte du bouton',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Produit',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Petit texte',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Texte médium',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Large Texte 1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Large Texte 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Remise',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'Heure de la vente',
            type: 'string',
        },
    ],
  };
  