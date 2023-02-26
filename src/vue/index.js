import {
    ref,
    createRefs
} from './hooks'
import {render} from './render'
import {bindEvent} from './event'

function createApp (el, {
    refs,
    methods
}) {
    const $el = document.querySelector(el);
    const allNodes = $el.querySelectorAll('*');
    createRefs(refs, allNodes);

    render(refs);
    bindEvent.apply(refs, [methods, allNodes]);
}

export {
    ref,
    createApp
}