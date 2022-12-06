import Link from 'next/link'

const navElements = [
  {
    name: 'Forsiden',
    path: '/',
    id: 1,
  },
  {
    name: 'Ansatte',
    path: '/employees',
    id: 2,
  },
  {
    name: 'Søk',
    path: '/employees/search/',
    id: 3,
  },
]

const Nav = () => (
  <nav>
    <ul>
      {navElements.map((element) => (
        <li key={element.id}>
          <h2>
            <Link href={element.path}>{element.name}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
