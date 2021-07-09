export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e7ddf92a8b145611b8d6ed',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-686d8f2o',
                  apiId: 'c874af08-ab6a-4651-8ca4-63afb55cb263'
                },
                {
                  buildHookId: '60e7ddf95c118a5da263797d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xntcacng',
                  apiId: 'eb2ee88a-59c9-4e1f-9931-c466dd375b90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rob-hyman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xntcacng.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
