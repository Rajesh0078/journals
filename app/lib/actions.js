"use server"

import { server_routes } from "./helpers"

export const search_papers = async (query) => {
    try {
        const res = await fetch(`${server_routes.search_papers}?query=${query}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const searchAuthor = async (form) => {
    try {
        const res = await fetch(`${server_routes.search_author}`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}