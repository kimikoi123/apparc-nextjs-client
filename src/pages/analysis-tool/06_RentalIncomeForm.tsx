import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'
import React from 'react'

export default function RentalIncomeForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === 'rental-income' ? '' : 'hidden'} center`}>

		<div>
			<div className="form-floating mb-3 partial_width">
				<input type="text" className="form-control" name="type_<%=i%>" />
				<label>unit type</label>
			</div>
			<div className="form-floating mb-3 partial_width">
				<input type="text" className="form-control" name="income_<%=i%>" />
				<label>monthly rent (p/unit)</label>
			</div>
			<div className="form-floating mb-3 partial_width">
				<input type="number" className="form-control" name="amount_<%=i%>" />
				<label># of units</label>
			</div>
		</div>

	<div className="form-floating mb-3 full_width">
		<input type="text" name="inflation_rate" className="form-control" />
		<label>inflation (%)</label><br />
	</div>
	<div className="full_width"><button type="submit" className="btn btn-primary">continue</button></div>
</form>	
  )
}
