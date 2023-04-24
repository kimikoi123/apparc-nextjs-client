import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function ExpensesForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <form className={`${selectedForm === 'expenses' ? '' : 'hidden'} center`}>

		<div>
			<div className="form-floating mb-3 partial_width">
				<input type="text" className="form-control" name="type_<%=i%>" />
				<label>expense type</label>
			</div>
			<div className="form-floating mb-3 partial_width">
				<input type="text" className="form-control" name="amount_<%=i%>" />
				<label>amount (anuually)</label>
			</div>
			<div className="form-floating mb-3 partial_width">
				<input type="text" className="form-control" name="inflation_<%=i%>" />
				<label>inflation (%)</label>
			</div>
		</div>

	<div className="full_width"><button type="submit" className="btn btn-primary">continue</button></div>
</form>	
  )
}
