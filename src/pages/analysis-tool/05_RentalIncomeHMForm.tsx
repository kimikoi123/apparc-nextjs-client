import React from 'react'

export default function RentalIncomeHMForm({ selectedForm, handleSelectedForm } : any) {
  return (
    <form className={`${selectedForm === 'rental-income-HM' ? '' : 'hidden'} center`}>
	<div className="form-floating mb-3">
		<input type="text"  name="ltv" className="form-control" />
		<label>LTV (%)</label><br />
	</div>
	<div className="form-floating mb-3">
		<input type="text"  name="interest_rate" className="form-control" />
		<label>interest rate (%)</label><br />
	</div>
	<div className="form-floating mb-3">
		<input type="text"  name="interest_only" className="form-control" />
		<label>interest only (months)</label><br />
	</div>
	<div className="form-floating mb-3">
		<input type="text"  name="NPER" className="form-control" />
		<label>NPER (months)</label><br />
	</div>
	<button type="submit" className="btn btn-primary">continue</button>	
</form>	
  )
}
