import React from "react"
import { useAnalysisToolContext } from "@/contexts/AnalysisToolContext"

export default function AmortFinanceForm() {
  const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <div>
      <form className={`${selectedForm === 'amort-finance' ? '' : 'hidden'} center`}>
        <button type="submit" className="btn btn-primary">
          go back
        </button>
      </form>
      {/* <table>
	<tr>
		<th>year of investment</th>
		<th>month of investment</th>
		<th>year of amortization</th>
		<th>month of amortization</th>
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
		<td></td>
		<td></td>
		<td align="center">$<%=ts(x.refinance.sat[0][10].toFixed(0))%></td>
	</tr>
	<%var i = 1%>
	<%while(i<x.refinance.sat.length){%>
	<tr>
		<%var j = 0%>
		<%while(j<x.refinance.sat[i].length){%>
		<%if(j==0 || j==2){%>
		<td align="center">Y<%=x.refinance.sat[i][j]%></td>
		<%}else if(j==1 || j==3){%>
		<td align="center">M<%=x.refinance.sat[i][j]%></td>
		<%}else{%>
		<td align="center">$<%=ts(x.refinance.sat[i][j].toFixed(0))%></td>
		<%}%>
		<%j++%>
	<%}%>
	</tr>
	<%i++%>
	<%}%>
</table> */}
      <form method="post" action="/output">
        <button type="submit" className="btn btn-primary">
          go back
        </button>
      </form>
    </div>
  )
}
