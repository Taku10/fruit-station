


export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        }
      },
      { 
        name: 'date',
        title: 'date',
        type: 'date',
        options: {
          dateFormat: moment().format("dddd, MMMM Do YYYY"),
        }
      },
      { 
        name: 'body1',
        title: 'Body1',
        type: 'text',
      },
      { 
        name: 'body2',
        title: 'Body2',
        type: 'text',
      },  
    ]
  }