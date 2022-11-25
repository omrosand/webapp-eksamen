// TODO: Erstatt any med typede props (samme på WeekList.tsx)

export default function Weeks({ weeks }: any) {
  return (
    <>
      <h2>Uker</h2>
      <div className="weekWrapper">
        {weeks.map((week: any) => (
          <section key={week.id}>
            <h2 className="weekNumber">{week.week}</h2>
          </section>
        ))}
      </div>
      <hr></hr>
    </>
  )
}
