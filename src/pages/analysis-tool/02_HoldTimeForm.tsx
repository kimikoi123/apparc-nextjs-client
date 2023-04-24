import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function HoldTimeForm() {

	
	const { selectedForm, handleNextForm } = useAnalysisToolContext()

  return (
    <form className={`${selectedForm === 'hold-time' ? '' : 'hidden'} center`}>
		<div className="form-floating mb-3">
			<input type="number" className="form-control" name="hold_time"/>
                {/* <%=x.requ%> */}
			<label>hold time (years)</label><br />
		</div>
		<button type="submit" className="btn btn-primary">continue</button>
	</form>	
  )
}
