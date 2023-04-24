import { useState } from "react"
import { useAnalysisToolContext } from "@/contexts/AnalysisToolContext"

export default function AddressForm() {
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [sf, setSf] = useState("")

  const { selectedForm, handleNextForm } = useAnalysisToolContext()

  const handleSubmitAddress = async (e: any) => {
    e.preventDefault()

    try {
      const body = { address, city, state, zipCode, sf }

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/test-server`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      console.log(data)
      handleNextForm('hold-time')
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmitAddress} className={`${selectedForm === 'address' ? '' : 'hidden'} center`}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
        <label>street address</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" onChange={e => setCity(e.target.value)} />
        <label>city</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" onChange={e => setState(e.target.value)} />
        <label>state</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" onChange={e => setZipCode(e.target.value)} />
        <label>zip code</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" onChange={e => setSf
        (e.target.value)}/>{" "}
        {/* onkeypress="<%= x.nc %>" */}
        <label>SF</label>
        <br />
      </div>
      <button type="submit" className="btn btn-primary">
        continue
      </button>
    </form>
  )
}
