import Link from "next/link";

export function Header(){
  return (
    <header
      className="fixed top-0 right-0 left-0 z-[999]"
    >
      <div>
        <Link href="/">
        OdontoPRO
        </Link>

        <nav>
          <a href="#">Profissionais</a>
        </nav>
      </div>
    </header>
  )
}