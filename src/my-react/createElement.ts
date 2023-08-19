export interface VNode {
    type?: string
    props: VNodeProps
}

interface VNodeProps {
    [key: string]: any
    children?: VNode[]
}

interface TextVNode {
    type: "TEXT_ELEMENT"
    props: TextVNodeProps
}

interface TextVNodeProps {
    nodeValue: string
    children: never[]
}

function createElement(props: VNodeProps | null, type?: string, ...children: any[]): VNode {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => (typeof child === "object" ? child : createTextElement(child)))
        }
    }
}

function createTextElement(text: string): TextVNode {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}

export default createElement
