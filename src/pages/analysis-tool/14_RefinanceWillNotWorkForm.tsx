import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function RefinanceWillNotWorkForm() {

	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <div className={`${selectedForm === 'refinance-will-not-work' ? '' : 'hidden'} center`}>
	<p>
	{/* Based on a Y<%=x.refinance["year of refinance"]+1%> NOI of $<%=ts(x.refinance["forward year NOI"].toFixed(0))%> (forward year NOI is used), a valuation cap rate of <%=x.refinance["valuation cap rate"].toFixed(2)%>% and a closing costs amount of $<%=ts(-x.refinance["cost of refinance"].toFixed(0))%> the refinance proceeds equate to $<%=ts(x.refinance["refinance proceeds"].toFixed(0))%>. The balance on the original senior loan at the time of the refinance is $<%=ts(-x.refinance["repayment of original loan"].toFixed(0))%>. Therefore this refinance will not work because it does not provide sufficient funds to pay back the original senior loan. For further details see below.  */}
	</p>
	<table>
		{/* <tr><th colspan="2">Refinance Analysis</th></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[0]%></td><td align="center">Y<%=Object.values(x.refinance)[0]%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[1]%></td><td align="center">$<%=ts(Object.values(x.refinance)[1].toFixed(0))%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[2]%></td><td align="center"><%=Object.values(x.refinance)[2].toFixed(2)%>%</td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[3]%></td><td align="center">$<%=ts(Object.values(x.refinance)[3].toFixed(0))%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[4]%></td><td align="center"><%=Object.values(x.refinance)[4].toFixed(2)%>%</td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[5]%></td><td align="center">$<%=ts(Object.values(x.refinance)[5].toFixed(0))%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[6]%></td><td align="center"><%=Object.values(x.refinance)[6].toFixed(2)%>%</td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[7]%></td><td align="center">$<%=ts(Object.values(x.refinance)[7].toFixed(0))%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[8]%></td><td align="center">$<%=ts(Object.values(x.refinance)[8].toFixed(0))%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[9]%></td><td align="center">$<%=ts(Object.values(x.refinance)[9].toFixed(0))%></td></tr>
		<tr><td align="center"><%=Object.keys(x.refinance)[10]%></td><td align="center">$<%=ts(Object.values(x.refinance)[10].toFixed(0))%></td></tr> */}
	</table><br />
	<form method="post" action="/refinance_will_not_work">
		<p>Since this refinance will not work, how would you like to proceed?</p>
		<div className="form-check">
			<input className="form-check-input" name="what_now" type="radio" value="re-enter" />
			<label>re-enter refinance inputs</label>
		</div><div className="form-check">
			<input className="form-check-input" name="what_now" type="radio" value="cancel" />
			<label>cancel refinance and continue with analysis</label>
		</div><br />
		<button type="submit" className="btn btn-primary">continue</button>
	</form>
</div>
  )
}
