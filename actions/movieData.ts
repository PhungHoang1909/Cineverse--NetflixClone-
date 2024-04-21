import { getApiResponse } from "@lib/request"

export const fetchTrending = async () => {
    const data = await getApiResponse("/trending/movie/week")
    const trending = data.results

    return trending
}

export const fetchGenres = async () => {
    const data = await getApiResponse("/genre/movie/list")
    const genres = data.genres

    for(const genre of genres) {
        const data = await getApiResponse(`/discover/movie?with_genres=${genre.id}`)
        genre.movies = data.results
    }

    return genres
}