import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function RefinanceDebtServiceForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <form className={`${selectedForm === 'refinance-debt-service' ? '' : 'hidden'} center`}>
	<div className="form-floating mb-3">
		<input type="text" className="form-control" name="interest_rate" />
		<label>interest rate (%)</label><br /><br />
	</div>
	<div className="form-floating mb-3">
		<input type="number" className="form-control" name="interest_only" />
		<label>interest only (months)</label><br /><br />
	</div>
	<div className="form-floating mb-3">
		<input type="number" className="form-control" name="NPER" />
		<label>NPER (months)</label><br /><br />
	</div>
	<button type="submit" className="btn btn-primary">continue</button>
</form>
  )
}
