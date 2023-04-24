import React from 'react'
import { useAnalysisToolContext } from '@/contexts/AnalysisToolContext'

export default function OutputFile() {
	const { selectedForm, handleNextForm } = useAnalysisToolContext()
  return (
    <div className={`${selectedForm === 'output-file' ? '' : 'hidden'} center`}>
        <table>
	<tr>
		<th colspan="2">property information</th>
	</tr>
	<%var i = 0%>
	<%while(i<Object.keys(x.property_info).length){%>
	<%if(x.property_info[Object.keys(x.property_info)[i]]=="" || x.property_info[Object.keys(x.property_info)[i]]==0){%>
	<tr>
		<td align="center"><%=Object.keys(x.property_info)[i]%></td>
		<td align="center">data not provided</td>
	</tr>
	<%}else if(i==4){%>
	<tr>
		<td align="center"><%=Object.keys(x.property_info)[i]%></td>
		<td align="center"><%=ts(Object.values(x.property_info)[i])%> SF</td>
	</tr>
	<%}else if(i==5){%>
	<tr>
		<td align="center"><%=Object.keys(x.property_info)[i]%></td>
		<td align="center"><%=ts(Object.values(x.property_info)[i])%> units</td>
	</tr>
	<%}else{%>
	<tr>
		<td align="center"><%=Object.keys(x.property_info)[i]%></td>
		<td align="center"><%=Object.values(x.property_info)[i]%></td>
	</tr>
	<%}%>
	<%i++%>
	<%}%>
		</table>
		<br /><br />
		{/* <table>
			<tr>
				<th colspan="2">pricing metrics</th>
			</tr>
			<%var i = 0%>
			<%while(i<Object.keys(x.pricing_metrics).length){%>
			<%if(x.pricing_metrics[Object.keys(x.pricing_metrics)[i]]=="SF not provided"){%>
			<tr>
				<td align="center"><%=Object.keys(x.pricing_metrics)[i]%></td>
				<td align="center">SF not provided</td>
			</tr>
			<%}else if(i==7){%>
			<tr>
				<td align="center"><%=Object.keys(x.pricing_metrics)[i]%></td>
				<td align="center"><%=ts(Object.values(x.pricing_metrics)[i].toFixed(2))%>%</td>
			</tr>
			<%}else if(i==8){%>
			<tr>
				<td align="center"><%=Object.keys(x.pricing_metrics)[i]%></td>
				<td align="center"><%=ts(Object.values(x.pricing_metrics)[i].toFixed(2))%>x</td>
			</tr>
			<%}else if(i==1 || i==4){%>
			<tr>
				<td align="center"><%=Object.keys(x.pricing_metrics)[i]%></td>
				<td align="center">$<%=ts(Object.values(x.pricing_metrics)[i].toFixed(2))%></td>
			</tr>
			<%}else{%>
			<tr>
				<td align="center"><%=Object.keys(x.pricing_metrics)[i]%></td>
				<td align="center">$<%=ts(Object.values(x.pricing_metrics)[i].toFixed(0))%></td>
			</tr>
			<%}%>
			<%i++%>
			<%}%>
		</table> */}
		<br /><br />
		<table>
			<tr>
				<th colspan="2">investment snapshot</th>
			</tr>
			<tr>
				<td align="center">projected hold time</td>
				<td align="center"><%=x.hold_time%> years</td>
			</tr>
			<tr>
				<td align="center">total budget</td>
				<td align="center">$<%=ts(x.budget.total_budget[1].toFixed(0))%></td>
			</tr>
			<tr>
				<td align="center">total equity committment</td>
				<td align="center">$<%=ts(x.capital_stack.equity[1])%></td>
			</tr>
			<tr>
				<td align="center">total profit</td>
				<td align="center">$<%=ts(x.sale["total profit"].toFixed(0))%></td>
			</tr>
			<tr>
				<td align="center">IRR</td>
				<td align="center"><%=x.sale.IRR%><%if(typeof x.sale.IRR === "number"){%>%<%}%></td>
			</tr>
			<tr>
				<td align="center">equity multiple</td>
				<td align="center"><%=x.sale["equity multiple"].toFixed(2)%>x</td>
			</tr>
			<tr>
				<td align="center">average cash on cash</td>
				<td align="center"><%=x.sale["average cash on cash return"].toFixed(2)%>%</td>
			</tr>
		</table>
		<br /><br />
		<table>
			<tr>
				<th colspan="3">budget</th>
			</tr>
			<tr>
				<td align="center">purchase price</td>
				<td align="center">$<%=ts(x.budget.purchase_price[1].toFixed(0))%></td>
				<td align="center"><%=x.budget.purchase_price[2].toFixed(2)%>%</td>
			</tr>
			<tr>
				<td align="center">closing cost</td>
				<td align="center">$<%=ts(x.budget.closing_costs[1].toFixed(0))%> <%if(x.closing_costs_ratio>0){%>(<%=x.closing_costs_ratio.toFixed(2)%>% of the purchase price)<%}%></td>
				<td align="center"><%=x.budget.closing_costs[2].toFixed(2)%>%</td>
			</tr>
			<tr>
				<td align="center">construction cost</td>
				<td align="center">$<%=ts(x.budget.construction_costs[1].toFixed(0))%></td>
				<td align="center"><%=x.budget.construction_costs[2].toFixed(2)%>%</td>
			</tr>
			<tr>
				<td align="center">total budget</td>
				<td align="center">$<%=ts(x.budget.total_budget[1].toFixed(0))%></td>
				<td align="center"><%=x.budget.total_budget[2].toFixed(2)%>%</td>
			</tr>
		</table>
		<br /><br />
		<table>
			<tr>
				<th colspan="2">debt summary</th>
			</tr>
			<%var i = 0%>
			<%while(i<Object.keys(x.sdi).length-2){%>
			<%if(i==0 || i==6 || i==7){%>
			<tr>
				<td align="center"><%=Object.keys(x.sdi)[i]%></td>
				<td align="center">$<%=ts(Object.values(x.sdi)[i].toFixed(0))%></td>
			</tr>
			<%}else if(i==1 || i==2 || i==3){%>
			<tr>
				<td align="center"><%=Object.keys(x.sdi)[i]%></td>
				<td align="center"><%=ts(Object.values(x.sdi)[i].toFixed(2))%>%</td>
			</tr>
			<%}else if(i==4 || i==5){%>
			<tr>
				<td align="center"><%=Object.keys(x.sdi)[i]%></td>
				<td align="center"><%=Object.values(x.sdi)[i].toFixed(0)%> months</td>
			</tr>
			<%}else if(i==8 || i==9){%>
			<tr>
				<td align="center"><%=Object.keys(x.sdi)[i]%></td>
				<td align="center"><%=ts(Object.values(x.sdi)[i].toFixed(2))%>x</td>
			</tr>
			<%}%>
			<%i++%>
			<%}%>
			<tr><td align="center" colspan="2"><form method="post" action="/amort_initial">
			<button type="submit" class="btn btn-primary">click here for amortization table</button>
			</form></td></tr>
		</table>
		<br /><br />
		<table>
			<tr>
				<th colspan="3">capital structure</th>
			</tr>
			<tr>
				<td align="center"><%=x.capital_stack.debt[0]%></td>
				<td align="center">$<%=ts(x.capital_stack.debt[1].toFixed(0))%></td>
				<td align="center"><%=x.capital_stack.debt[2].toFixed(2)%>%</td>
			</tr>
			<tr>
				<td align="center"><%=x.capital_stack.equity[0]%></td>
				<td align="center">$<%=ts(x.capital_stack.equity[1].toFixed(0))%></td>
				<td align="center"><%=x.capital_stack.equity[2].toFixed(2)%>%</td>
			</tr>
			<tr>
				<td align="center"><%=x.capital_stack.total_capital[0]%></td>
				<td align="center">$<%=ts(x.capital_stack.total_capital[1].toFixed(0))%></td>
				<td align="center"><%=x.capital_stack.total_capital[2].toFixed(2)%>%</td>
			</tr>
		</table>
		<br /><br />
		<table>
			<tr>
				<th colspan="3">unit mix</th>
			</tr>
			<tr>
				<td align="center">unit type</td>
				<td align="center">monthly rent</td>
				<td align="center">number of units</td></tr>
			<%var i = 0%>
			<%while(i<x.units.length){%>
			<tr>
				<td align="center"><%=x.units[i][0]%></td>
				<td align="center">$<%=ts(x.units[i][1].toFixed(0))%></td>
				<td align="center"><%=ts(x.units[i][2].toFixed(0))%> units</td></tr>
			<%i++%>
			<%}%>
		</table>
		{/* <%if(x.refinance["year of refinance"]>0){%>
		<br /><br />
		<table>
			<tr>
				<th colspan="3">refinance summary</th>
			</tr>
			<%var i = 0%>
			<%while(i<Object.keys(x.refinance).length-2){%>
			<%if(i==0){%>
			<tr>
				<td align="center"><%=Object.keys(x.refinance)[i]%></td>
				<td align="center" colspan="2">Y<%=Object.values(x.refinance)[i]%></td>
			</tr>
			<%}else if(i==1 || i==3 || i==5 || i==8 || i==9 || i==10 || i==11 || i==12 || i==18 || i==19){%>
			<tr>
				<td align="center"><%=Object.keys(x.refinance)[i]%></td>
				<td align="center" colspan="2">$<%=ts(Object.values(x.refinance)[i].toFixed(0))%></td>
			</tr>
			<%}else if(i==2 || i==4 || i==15){%>
			<tr>
				<td align="center"><%=Object.keys(x.refinance)[i]%></td>
				<td align="center" colspan="2"><%=ts(Object.values(x.refinance)[i].toFixed(2))%>%</td>
			</tr>
			<%}else if(i==16 || i==17){%>
			<tr>
				<td align="center"><%=Object.keys(x.refinance)[i]%></td>
				<td align="center" colspan="2"><%=ts(Object.values(x.refinance)[i].toFixed(0))%> months</td>
			</tr>
			<%}else if(i==20 || i==21){%>
			<tr>
				<td align="center"><%=Object.keys(x.refinance)[i]%></td>
				<td align="center" colspan="2"><%=ts(Object.values(x.refinance)[i].toFixed(2))%>x</td>
			</tr>
			<%}else if(i==7 || i==14){%>
			<tr>
				<td align="center"><%=Object.keys(x.refinance)[i]%></td>
				<td align="center"><%=ts(Object.values(x.refinance)[i-1].toFixed(2))%>%</td>
				<td align="center">$<%=ts(Object.values(x.refinance)[i].toFixed(0))%></td>
			</tr>
			<%}%>
			<%i++%>
			<%}%>
			<tr><td align="center" colspan="2"><form method="post" action="/amort_refinance">
			<button type="submit" class="btn btn-primary">click here for amortization table</button>
			</form></td></tr>
		</table> */}
		{/* <%}%> */}
		<br /><br />
		<table>
			<tr><th colspan="3">sale summary</th></tr>
			<%var i = 0%>
			<%while(i<Object.keys(x.sale).length){%>
			<%if(i==0){%>
			<tr>
				<td align="center"><%=Object.keys(x.sale)[i]%></td>
				<td align="center" colspan="2">Y<%=Object.values(x.sale)[i]%></td>
			</tr>
			<%}else if(i==1 || i==16 || (i==14 && typeof Object.keys(x.sale)[i] === "number")){%>
			<tr>
				<td align="center"><%=Object.keys(x.sale)[i]%></td>
				<td align="center" colspan="2"><%=ts(Object.values(x.sale)[i].toFixed(2))%>%</td>
			</tr>
			<%}else if(i==14){%>
			<tr>
				<td align="center"><%=Object.keys(x.sale)[i]%></td>
				<td align="center" colspan="2"><%=ts(Object.values(x.sale)[i])%></td>
			</tr>
			<%}else if(i==2 || i==3 || i==6 || i==7 || i==8 || i==9 || i==10 || (i==11 && x.refinance["year of refinance"]>0) || i==12 || i==13){%>
			<tr>
				<td align="center"><%=Object.keys(x.sale)[i]%></td>
				<td align="center" colspan="2">$<%=ts(Object.values(x.sale)[i].toFixed(0))%></td>
			</tr>
			<%}else if(i==15){%>
			<tr>
				<td align="center"><%=Object.keys(x.sale)[i]%></td>
				<td align="center" colspan="2"><%=ts(Object.values(x.sale)[i].toFixed(2))%>x</td>
			</tr>
			<%}else if(i==5){%>
			<tr>
				<td align="center"><%=Object.keys(x.sale)[i]%></td>
				<td align="center"><%=ts(Object.values(x.sale)[i-1].toFixed(2))%>%</td>
				<td align="center">$<%=ts(Object.values(x.sale)[i].toFixed(0))%></td>
			</tr>
			<%}%>
			<%i++%>
			<%}%>
		</table>
		<br /><br />
		<table>
			<tr><th colspan="<%=x.hold_time+4%>"><%=x.hold_time+1%> year cash flow projection</th></tr>
			<%var i = 0%>
			<%while(i<Object.keys(x.CFP).length){%>
			<%if(Object.keys(x.CFP)[i] == "rental income"){%>
				<tr><td align="center"></td><td align="center">notes</td><td colspan="<%=x.hold_time+2%>" align="center"></td></tr>
				<tr><td align="center">income</td><td colspan="<%=x.hold_time+3%>" align="center"></td></tr>
			<%}else if(Object.keys(x.CFP)[i] == "management fee"){%>
				<tr><td align="center">expenses</td><td colspan="<%=x.hold_time+3%>" align="center"></td></tr>
			<%}else if(Object.keys(x.CFP)[i] == "NOI"){%>
				<tr><td align="center">NOI</td><td colspan="<%=x.hold_time+3%>" align="center"></td></tr>
			<%}else if(Object.keys(x.CFP)[i] == "debt service"){%>
				<tr><td align="center">debt service</td><td colspan="<%=x.hold_time+3%>" align="center"></td></tr>
			<%}else if(Object.keys(x.CFP)[i] == "cash flow"){%>
				<tr><td align="center">cash flow</td><td colspan="<%=x.hold_time+3%>" align="center"></td></tr>
			<%}%>
			<tr>
				<%if(((x.refinance["year of refinance"] == 0 && i != 14+x.how_many_expenses) || x.refinance["year of refinance"]>0) && i>0){%>
				<td><%=Object.keys(x.CFP)[i]%></td>
				<%}else if(i == 0){%>
				<td></td><td></td>
				<%}%>
				<%if((i>0 && x.refinance["year of refinance"]>0) || (i>0 && i!=14+x.how_many_expenses) ){%>
				<td align="center"><%=x.notes_CFP[i]%></td>
				<%}%>
				<%var j = 0%>
				<%while(j<Object.values(x.CFP)[i].length){%>
				<%if(((i>0 && i<11+x.how_many_expenses) || i == 12+x.how_many_expenses || i == 15+x.how_many_expenses || i == 16+x.how_many_expenses) && typeof Object.values(x.CFP)[i][j] == "number"){%>
				<td align="center">$<%=ts(Object.values(x.CFP)[i][j].toFixed(0))%></td>
				<%}else if(i == 11+x.how_many_expenses && typeof Object.values(x.CFP)[i][j] == "number"){%>
				<td align="center"><%=ts(Object.values(x.CFP)[i][j].toFixed(2))%>x</td>
		<%}else if((i == 13+x.how_many_expenses || (i == 14+x.how_many_expenses && x.refinance["year of refinance"]>0)) && typeof Object.values(x.CFP)[i][j] == "number"){%>
				<td align="center"><%=ts(Object.values(x.CFP)[i][j].toFixed(2))%>%</td>
				<%}else if((x.refinance["year of refinance"] == 0 && i != 14+x.how_many_expenses) || x.refinance["year of refinance"]>0){%>
				<td align="center"><%=Object.values(x.CFP)[i][j]%></td>
				<%}%>
				<%j++%>
				<%}%>
			</tr>
				<%i++%>
				<%}%>
		</table>
    </div>
  )
}
