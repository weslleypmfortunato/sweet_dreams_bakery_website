import Link from "next/link";

export function Copyright () {

  return (
    <footer>
      <p className="text-dark-green-sweetdreams text-xs text-center mt-4 mb-2"> Sweet Dreams &copy; 2023 | <Link href='https://main--weslleyfortunato-portfolio.netlify.app' target="_blank" className="hover:text-project-cta">Developed by: WPMF</Link></p>
    </footer>
  )
}