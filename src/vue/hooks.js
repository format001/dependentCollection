import Ref from './Ref'

const reg_mustache = /\{\{(.*?)\}\}/;

export function ref (initialValue) {
    return new Ref(initialValue);
}

export function createRefs (refs, nodes) {
    nodes.forEach(el => {

        if (reg_mustache.test(el.textContent)) {
            const refKey = el.textContent.match(reg_mustache)[1].trim();

            if (refs[refKey]){
                refs[refKey].dependent.add(el);
            }
        }
    })

    return refs;
}