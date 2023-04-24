import { useAnalysisToolContext } from "@/contexts/AnalysisToolContext"
import React from "react"

export default function DebtForm() {
  const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === "debt" ? "" : "hidden"} center`}>
      <div className="form-floating mb-3">
        <input type="text" name="ltv" className="form-control" />
        {/* <%=x.requ%> onkeypress="<%=x.nc%>" */}
        <label>LTV (%)</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" name="interest_rate" className="form-control" />
        {/* <%=x.requ%> onkeypress="<%=x.nc%>" */}
        <label>interest rate (%)</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" name="interest_only" className="form-control" />
        <label>interest only (months)</label>
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" name="NPER" className="form-control" />
        <label>NPER (months)</label>
        <br />
      </div>
      <button type="submit" className="btn btn-primary">
        continue
      </button>
    </form>
  )
}
