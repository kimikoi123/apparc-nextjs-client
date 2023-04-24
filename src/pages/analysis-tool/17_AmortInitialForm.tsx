import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function AmortInitialForm() {
	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <div>
        <form className={`${selectedForm === 'amort-initial' ? '' : 'hidden'} center`}>
	<button type="submit" className="btn btn-primary">go back</button>
</form>
{/* <table>
	<tr>
		<th>year</th>
		<th>month</th>
		<th>balance</th>
		<th>monthly payment</th>
		<th>interest component</th>
		<th>principal component</th>
		<th>cumulative interest</th>
		<th>cumulative principal</th>
		<th>new balance</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td align="center">$<%=ts(x.sdi.sat[0][8].toFixed(0))%></td>
	</tr>
	<%var i = 1%>
	<%while(i<x.sdi.sat.length){%>
	<tr>
		<%var j = 0%>
		<%while(j<x.sdi.sat[i].length){%>
		<%if(j==0){%>
		<td align="center">Y<%=x.sdi.sat[i][j]%></td>
		<%}else if(j==1){%>
		<td align="center">M<%=x.sdi.sat[i][j]%></td>
		<%}else{%>
		<td align="center">$<%=ts(x.sdi.sat[i][j].toFixed(0))%></td>
		<%}%>
		<%j++%>
	<%}%>
	</tr>
	<%i++%>
	<%}%>
</table> */}
<form method="post" action="/output">
	<button type="submit" className="btn btn-primary">go back</button>
</form>
    </div>
  )
}
