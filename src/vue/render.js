export function render (refMap) {
    for (var key in refMap) {
        _render(refMap[key]);
    }
}

export function update (ref) {
    _render(ref);
}

function _render ({ dependent, value }) {
   dependent.forEach(el => {
       el.textContent = value;
   })
}