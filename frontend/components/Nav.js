import Link from "next/link"

export default function Nav() {
    return(
        <nav>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/reviews">Reviews</Link>
        </nav>
    )
}