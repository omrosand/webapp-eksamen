// TODO: Her er det bugs
// Typet om forventet parameter letter i handleGuess fra number til letter
// endret foreach til map

const letterList = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ')

type LettersProps = {
  getMessage: () => string
  guesses: string[]
  handleGuess: (letter: string) => void
}

type LetterProps = Pick<LettersProps, 'handleGuess' | 'guesses'> & {
  letter: string
}

export default function Letters({
  handleGuess,
  guesses,
  getMessage,
}: LettersProps) {
  return (
    <>
      <p className="message">{getMessage()}</p>
      <ul className="letters">
        {letterList.map((letter: string) => (
          <Letter
            handleGuess={handleGuess}
            guesses={guesses}
            key={letter}
            letter={letter}
          />
        ))}
      </ul>
    </>
  )
}

const Letter = ({ letter, handleGuess, guesses }: LetterProps) => {
  const letterMatch = guesses.includes(letter.toLowerCase())
  return (
    <button
      onClick={() => handleGuess(letter)}
      disabled={letterMatch}
      className={`letter ${letterMatch ? 'highlight' : ''}`}
    >
      {letter}
    </button>
  )
}
