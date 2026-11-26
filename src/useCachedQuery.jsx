import { useQuery } from "@tanstack/react-query";

export default function useCachedQuery(category, baseUrl) {
    async function getData() {
        const apiKey = "QRwtAymlW0ZzSRjxZTGxf5XdbvCjj2ndQGZ9K2WBkVCw13t3"
        // const endpoint = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`
        const endpoint = `${baseUrl}${category}.json?api-key=${apiKey}`
        const response = await fetch(endpoint)

        if (!response.ok) {
            throw new Error("fejl")
        }

        const json = await response.json();

        return json
    }

    const { data, isPending, error } = useQuery({
        queryKey: [category],
        queryFn: getData,
        staleTime: 60 * 60 * 1000
    })

    return { data, isPending, error }
}