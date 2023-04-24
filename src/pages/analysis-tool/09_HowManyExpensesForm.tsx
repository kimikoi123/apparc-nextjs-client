import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function HowManyExpensesForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === 'how-many-expenses' ? '' : 'hidden'} center`}>
		<div className="form-floating mb-3">
			<input type="number" className="form-control" name="how_many" />
			<label># of expenses (exc. man. fee)</label><br />
		</div>
		<button type="submit" className="btn btn-primary">continue</button>
	</form>	
  )
}
