import {publish} from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/seo-rii/wasm-clang-es6.git',
        user: {
            name: 'seo-rii',
            email: 'me@seorii.page'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);