import React from "react"
import { useAnalysisToolContext } from "@/contexts/AnalysisToolContext"

export default function OtherIncomeForm() {

  const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === 'other-income' ? '' : 'hidden'} center`}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="other_income_amount"
          className="form-control"
        />
        <label>other income amount</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" name="growth" className="form-control" />
        <label>inflation (%)</label>
        <br />
      </div>
      <button type="submit" className="btn btn-primary">
        continue
      </button>
    </form>
  )
}
