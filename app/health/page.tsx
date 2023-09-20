import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import ListItem from "../components/ListItem";

export const revalidate = 86400


export function generateMetadata() {
    return {
        title: 'Health'
    }
}

export default async function Programming() {
    const posts = await getPostsMeta() //deduped
    if (!posts) return <p className="mt-10 text-center">Sorry, no posts available</p>


    const tagPosts = posts.filter(post => post.tags.includes("health" || "science"))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">
                    Sorry, no posts for that keyword.
                </p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>

            <h2 className="text-3xl mt-4 mb-0">
                Results for: Health related posts
            </h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0">
                    {tagPosts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>

        </>
    )

}