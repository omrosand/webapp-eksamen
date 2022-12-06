import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getWeeks } from '../api/weeks'
import Nav from '../components/Nav'
import Title from '../components/Title'
import WeekList from '../components/WeekList'
import Weeks from '../components/Weeks'

const Home: NextPage = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [status, setStatus] = useState('')
  const [weeks, setWeeks] = useState<any[]>([])

  const isLoading = status === 'Fetching data...'
  const isSuccess = status === 'Fullført'
  const isError = status === 'Something went wrong'

  useEffect(() => {
    const fetchWeeks = async () => {
      setStatus('Fetching data...')
      try {
        const data = await getWeeks({})
        setWeeks(data.data)
        setStatus('Fetch complete')
      } catch (error) {
        setError(error as any)
        setStatus('Something went wrong')
        setTimeout(() => {
          setStatus('')
        }, 2000)
      }
    }
    fetchWeeks()
  }, [])

  if (isLoading) {
    return <h1>Henter ukeoversikt...</h1>
  }
  if (isError) {
    console.log(error)
    return <h1>Noe gikk galt...</h1>
  }

  return (
    <main>
      <Nav />
      <Title title="Lunsjkalender" Tag="h1" />
      <Weeks weeks={weeks} />
      <WeekList weeks={weeks} />
    </main>
  )
}

export default Home
