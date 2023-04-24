import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function OtherRentalInputsForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === 'other-rental-inputs' ? '' : 'hidden'} center`}>
	<div className="form-floating mb-3">
		<input type="text"  name="vacancy" className="form-control" />
		<label>vacancy (%)</label><br />
	</div>
	<div className="form-floating mb-3">
		<input type="text" name="bad_debt" className="form-control" />
		<label>bad debt (%)</label><br />
	</div>
	<div className="form-floating mb-3">
		<input type="text" name="management_fee" className="form-control" />
		<label>management fee (%)</label><br />
	</div>
	<button type="submit" className="btn btn-primary">continue</button>
</form>
  )
}
