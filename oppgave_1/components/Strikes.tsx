// TODO: Her er det bugs
// La til key={index} på li elementet
// Byttet ut foreach med map

export type Strike = { icon: string; guess: string }

export default function Strikes({ strikes }: { strikes: Strike[] }) {
  return (
    <ul className="strikes">
      {strikes.map((strike: Strike, index: number) => (
        <li key={index}>{strike.icon}</li>
      ))}
    </ul>
  )
}
