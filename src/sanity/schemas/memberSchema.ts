const memberSchema = {
    name: 'member',
    title: 'Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: "Slug",
            type: 'slug',
            options: { source: 'name' },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'github',
            title: 'GitHub URL',
            type: 'url'
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url'
        }
    ]
};

export default memberSchema;