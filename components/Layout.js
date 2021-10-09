import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Pick up Your </span>
              <span>Recipe</span>
            </h1>
            <h2>and Enjoy Your Meal</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 ![ Reactjs + Nextjs + Contentful ] by Mr.Kouhadi </p>
      </footer>
    </div>
  )
}
