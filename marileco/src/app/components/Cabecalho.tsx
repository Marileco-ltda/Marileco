export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-black">
          MARILECO
        </h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-500">Início</a>
          <a href="#" className="hover:text-gray-500">Produtos</a>
          <a href="#" className="hover:text-gray-500">Sobre</a>
          <a href="#" className="hover:text-gray-500">Contato</a>
        </nav>
      </div>
    </header>
  )
}
