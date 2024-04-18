import { getApiResponse } from "@lib/request"

export const fetchTrending = async () => {
    const data = await getApiResponse("/trending/movie/week")
    const trending = data.results

    return trending
}