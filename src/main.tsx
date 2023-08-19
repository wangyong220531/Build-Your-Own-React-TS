import { createElement, render } from "./my-react/index.ts"
import { useState } from "./my-react/render.ts"

const Counter = () => {
    const [state, setState] = useState<number>(0)

    return createElement(
        {
            onclick: () => setState((prev: number) => prev + 1)
        },
        "button",
        state
    )
}

const element = createElement(Counter)
const container = document.getElementById("root")!

render(element, container)
