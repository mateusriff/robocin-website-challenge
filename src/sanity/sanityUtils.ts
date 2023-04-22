import { createClient, groq } from "next-sanity"

export const getMembers = async () => {
    const client = createClient ({
        projectId: "4hkajo7s",
        dataset: "production",
        apiVersion: "2023-04-10",
    });

    return client.fetch(
        groq`*[_type == "member"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            category,
            "image": image.asset->url,
            github,
            linkedin,
        } | order(lower(name))`
    )
};