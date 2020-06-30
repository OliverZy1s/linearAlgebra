module.exports = {
    base: '/linearAlgebra/',
    title: '3blue1brown的线性代数讲义',
    description: '开始学习线性代数吧！',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
    ],
    themeConfig: {
        sidebar:[
            {
                title: '线性代数的本质',
                children: [
                    '/document/whatIsVector',
                    '/document/linearComSpanBasis'
                ],
            }
        ],
        collapsable: false,
    },
    markdown: {
        extendMarkdown: md => {
            md.set({html: true})
            md.use(require("markdown-it-katex"))
        }
    }
}