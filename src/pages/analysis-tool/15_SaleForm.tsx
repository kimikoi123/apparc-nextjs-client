import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function SaleForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <form className={`${selectedForm === 'sale' ? '' : 'hidden'} center`}>
	<div className="form-floating mb-3">
		<input name="cap_rate" type="text" className="form-control" />
		<label>exit cap rate (%)</label><br /><br />
	</div>
	<div className="form-floating mb-3">
		<input name="closing_costs" type="text" className="form-control" />
		<label>closing costs (%)</label><br /><br />
	</div>
	<button type="submit" className="btn btn-primary">continue</button>
</form>
  )
}
