import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import javascript from '../assets/svg/javascript.svg'
import typescript from '../assets/svg/typescript.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import tailwind from '../assets/svg/tailwind.svg'
import react from '../assets/svg/react.svg'
import nextjs from '../assets/svg/nextJS.svg'
import git from '../assets/svg/git.svg'


export const skillImage = (skill) => {
    const skillID = skill.toLowerCase()
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'tailwind':
            return tailwind;
        case 'react':
            return react;
        case 'nextjs':
            return nextjs;
        case 'git':
            return git;
        default:
            break;
}
}