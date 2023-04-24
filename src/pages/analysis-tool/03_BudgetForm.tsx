import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'
import React from 'react'

export default function BudgetForm() {
	
	const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === 'budget' ? '' : 'hidden'} center`}>
		<div className="form-floating mb-3">
			<input type="text" name="purchase_price" className="form-control" />
                {/* <%=x.requ%> onkeypress="<%=x.nc%>" */}
			<label>purchase price</label><br />
		</div>
		<div className="form-floating mb-3">
			<input type="text"  name="closing_costs" className="form-control" />
                {/* <%=x.requ%> onkeypress="<%=x.nc%>" */}
			<label>closing costs (%)</label><br />
		</div>
		<div className="form-floating mb-3">
			<input type="text" name="construction_costs" className="form-control" />
                {/* <%=x.requ%> onkeypress="<%=x.nc%>" */}
			<label>construction costs</label><br />
		</div>
		<button type="submit" className="btn btn-primary">continue</button>
	</form>	
  )
}
