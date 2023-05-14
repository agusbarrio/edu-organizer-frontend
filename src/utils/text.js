import mustache from 'mustache'
export function renderText(template, params) {
    const result = mustache.render(template, params)
    return result
}
