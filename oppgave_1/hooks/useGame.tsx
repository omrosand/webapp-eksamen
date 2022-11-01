// TODO: Her er det bugs
// la til sjekk om spillet er over i handleGuess så man ikke kan fortsette å gjette etter vinn/tap
// la til setStrikes(strikeCopy) i handleGuess

import { useState } from 'react'
import { Strike } from '../components/Strikes'

const initialStrikes = [
  { icon: '⚪', guess: '' },
  { icon: '⚪', guess: '' },
  { icon: '⚪', guess: '' },
]

type Country = {
  name: string
  unicodeFlag: string
} | null

export const useGame = () => {
  const [guesses, setGuesses] = useState<string[]>([])
  const [strikes, setStrikes] = useState<Strike[]>(initialStrikes)
  const [country, setCountry] = useState<Country>(null)

  const isSolved = (country: Country, guesses: string[]) => {
    if (!country) return false
    return [...country.name.replaceAll(' ', '').toLowerCase()].every(
      (letter) => {
        return guesses.includes(letter)
      }
    )
  }

  const isGameOver = strikes.every((strike: any) => strike.guess) ? true : false

  const getMessage = () => {
    if (isSolved(country, guesses) && !isGameOver) return 'Du klarte det'
    else if (isGameOver) return 'Du tapte. Prøv igjen'
    else return 'Velg en bokstav'
  }

  const isMatch = (letter: string) => {
    if (guesses.find((guess: any) => guess === letter.toLowerCase())) {
      return letter
    }
    return '_'
  }

  const wordSplit = () => {
    return (
      country?.name?.split(' ').map((word: string) => word.split('')) || null
    )
  }

  const handleGuess = (letter: string) => {
    if ((isSolved(country, guesses) && !isGameOver) || isGameOver) return
    if (!country?.name?.toLowerCase().includes(letter.toLowerCase())) {
      const strikeCopy = [...strikes]
      strikeCopy.pop()
      setStrikes(strikeCopy)
    }
    setGuesses((prev: string[]) => [...prev, letter.toLowerCase()])
  }

  return {
    guesses,
    setGuesses,
    strikes,
    setStrikes,
    country,
    setCountry,
    isMatch,
    isGameOver,
    handleGuess,
    getMessage,
    wordSplit,
  }
}
