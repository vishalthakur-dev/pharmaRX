import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Cart | Pharma RX",
  description: "Your shopping cart at Pharma RX",
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </header>
      <main className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-zinc-900">Your cart is empty</h1>
        <p className="mt-2 text-zinc-600">
          Add items from Vitamins & Supplements to get started.
        </p>
        <Link
          href="/category/vitamins-and-supplements/"
          className="mt-6 inline-block rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Continue shopping
        </Link>
      </main>
    </div>
  );
}
