// import Link, { LinkProps } from "next/link"
// import { useRouter } from "next/router"
// import { ReactElement, cloneElement } from "react"

// interface ActiveLinkProps extends LinkProps {
//   children: ReactElement
//   activeClassName: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
// }

// export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
//   const { asPath } = useRouter()

//   const className = asPath === rest.href ? activeClassName : ''

//   return (
//     <Link {...rest}>
//       { cloneElement(children, {
//         className
//       }) }
//     </Link>
//   )
// }



// N˜AO PRECISOU DESTA PAGINA PQ USEI TAILWINDCSS E DEIXEI TUDO NA MESMA PAGINA