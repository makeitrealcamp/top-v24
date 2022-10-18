import React, { useState } from "react"


const Form: React.FC = () => {
  const [dataForm, setDataForm] = useState(undefined)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullname" onChange={handleChange} />
      <textarea name="description" onChange={handleChange} />
      <select name="country" onChange={handleChange}>
        <option value="colombia">Colombia</option>
        <option value="panama">Paname</option>
      </select>
    </form>
  )
}

export default Form