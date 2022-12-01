import { useState, useRef } from 'react'

const useWeekSpan = () => {
  const [weekSpan, setWeekSpan] = useState({ from: 1, to: 52 })
  const fromRef = useRef<HTMLInputElement>(null)
  const toRef = useRef<HTMLInputElement>(null)
  const [weekSpanMessage, setWeekSpanMessage] = useState('Valgte uker:')

  const handleWeekSpan = (e: any) => {
    e.preventDefault()
    const from = fromRef.current?.value
    const to = toRef.current?.value

    if (!from || !to) {
      setWeekSpanMessage(`Velg "fra" og "til" ukenummer`)
      return
    }
    if (parseInt(to) < parseInt(from)) {
      setWeekSpanMessage(
        `"Fra" ukenummer kan ikke være større enn "til" ukenummer`
      )
      return
    }
    setWeekSpan({ from: parseInt(from), to: parseInt(to) })
    setWeekSpanMessage('Valgte uker:')
  }

  const createWeekSpanArray = () => {
    const arr = []
    let currentNumber = weekSpan.from
    while (currentNumber <= weekSpan.to) {
      arr.push(currentNumber)
      currentNumber++
    }
    return arr
  }
  return {
    createWeekSpanArray,
    handleWeekSpan,
    weekSpan,
    setWeekSpan,
    fromRef,
    toRef,
    weekSpanMessage,
  }
}
export default useWeekSpan
