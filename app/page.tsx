import Posts from "./components/Posts"
import MyProfilePic from "./components/MyProfilePic"

export const revalidate = 86400

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👍
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Altai</span>
          </span>
        </p>
        <Posts />
    </div>
  )
}
