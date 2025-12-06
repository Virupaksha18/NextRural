import { useEffect, useState } from "react"
import { supabase } from "../supabase"

type Student = {
  id: number
  name: string
  age: number
}

const Students = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("id", { ascending: true })

    if (error) console.error(error)
    else setStudents(data as Student[])
  }

  const addStudent = async () => {
    if (!name || !age) return alert("Enter name and age")
    const { error } = await supabase
      .from("students")
      .insert([{ name, age: Number(age) }])
    if (error) {
      console.error(error)
    } else {
      setName("")
      setAge("")
      fetchStudents()
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🎓 Students</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="border p-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          className="border p-2 rounded"
          onChange={(e) => setAge(e.target.value)}
        />
        <button
          onClick={addStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - Age: {s.age}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Students
