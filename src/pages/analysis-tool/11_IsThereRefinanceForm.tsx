import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function IsThereRefinanceForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <form className={`${selectedForm === 'is-there-refinance' ? '' : 'hidden'} center`}>
	<p>Will there be a refinance for this property?</p>
	<div className="form-check">
  		<input className="form-check-input" type="radio" name="refinance" value="yes" />
  		<label className="form-check-label">yes</label>
	</div>
	<div className="form-check">
  		<input className="form-check-input" type="radio" name="refinance" value="no" />
  		<label className="form-check-label">no</label>
	</div><br />
	<button type="submit" className="btn btn-primary">continue</button>
</form>
  )
}
