import React from "react"
import { useAnalysisToolContext } from "@/contexts/AnalysisToolContext"

export default function RefinanceSizingForm() {

  const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <form className={`${selectedForm === 'refinance-sizing' ? '' : 'hidden'} center`}>
      <select className="form-select form-control" name="year">
        <option disabled>year of refinance</option>
        {/* <%var i = 1%>
		<%while(i<=x.hold_time){%>
			<option>Y<%=i%></option>
		<%i++%>
		<%}%> */}
      </select>
      <br />
      <br />
      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="cap_rate" />
        <label>valuation cap rate (%)</label>
        <br />
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="LTV" />
        <label>LTV (%)</label>
        <br />
        <br />
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="closing_costs" />
        <label>closing costs (%)</label>
        <br />
        <br />
      </div>
      <button type="submit" className="btn btn-primary">
        continue
      </button>
    </form>
  )
}
