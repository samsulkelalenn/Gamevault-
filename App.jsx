import { useState } from 'react'

const products = [
  { id: 1, name: "70 Diamond", price: 10000 },
  { id: 2, name: "140 Diamond", price: 19000 },
  { id: 3, name: "355 Diamond", price: 42000 },
]

export default function App() {
  const [selected, setSelected] = useState(null)

  const handleTopUp = () => {
    if (!selected) {
      alert("Pilih paket terlebih dahulu")
      return
    }
    alert("Pembayaran berhasil untuk " + selected.name)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Top Up Free Fire</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: '1px solid #ccc', padding: 10, cursor: 'pointer',
            background: selected?.id === p.id ? '#e0f7ff' : '#fff'
          }} onClick={() => setSelected(p)}>
            <h2>{p.name}</h2>
            <p>Rp {p.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <button onClick={handleTopUp} style={{ marginTop: 20 }}>Bayar Sekarang</button>
    </div>
  )
}