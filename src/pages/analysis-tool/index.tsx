import React, { useState } from "react"
import AddressForm from "./01_AddressForm"
import HoldTimeForm from "./02_HoldTimeForm"
import BudgetForm from "./03_BudgetForm"
import DebtForm from "./04_DebtForm"
import RentalIncomeHMForm from "./05_RentalIncomeHMForm"
import OtherIncomeForm from "./08_OtherIncomeForm"
import HowManyExpensesForm from "./09_HowManyExpensesForm"
import ExpensesForm from "./10_ExpensesForm"
import IsThereRefinanceForm from "./11_IsThereRefinanceForm"
import RefinanceSizingForm from "./12_RefinanceSizingForm"
import RefinanceDebtServiceForm from "./13_RefinanceDebtServiceForm"
import RefinanceWillNotWorkForm from "./14_RefinanceWillNotWorkForm"
import SaleForm from "./15_SaleForm"
import OutputFile from "./16_OutputFile"
import AmortFinanceForm from "./18_AmortFinanceForm"
import RentalIncomeForm from "./06_RentalIncomeForm"
import AnalysisToolContextProvider from "@/contexts/AnalysisToolContext"
import OtherRentalInputsForm from "./07_OtherRentalInputsForm"

export default function index() {

  return (
    <AnalysisToolContextProvider>
      <div className="bg-white text-[#999999]">
        <div className="h-screen grid place-items-center">
          {/* <div className="text-3xl">Coming soon..</div> */}
          <AddressForm />
          <HoldTimeForm />
          <BudgetForm />
          <DebtForm />
          <RentalIncomeHMForm />
          <RentalIncomeForm />
          <OtherIncomeForm />
          <OtherRentalInputsForm />
          <HowManyExpensesForm />
          <ExpensesForm />
          <IsThereRefinanceForm />
          <RefinanceSizingForm />
          <RefinanceDebtServiceForm />
          <RefinanceWillNotWorkForm />
          <SaleForm />
          {/* <OutputFile /> */}
          {/* <AmortFinanceForm />
        <AmortFinanceForm /> */}
        </div>
      </div>
    </AnalysisToolContextProvider>
  )
}
