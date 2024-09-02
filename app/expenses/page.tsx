"use client"

import Header from "@/components/Header";
import { useGetExpensesByCategoryQuery } from "@/state/api";
import { useMemo, useState } from "react"

const Expenses = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const { data: expensesData, isError, isLoading } = useGetExpensesByCategoryQuery();
    const expenses = useMemo(() => expensesData ?? [], [expensesData]);
    if (isLoading) {
        return <div className="py-4">Loading...</div>
    }

    if (isError || !expensesData) {
        return (
            <div className="text-center text-red-500 py-4">
                Failed to fetch Expenses
            </div>
        )
    }
  return (
    <div className="mb-5">
        <Header name="Expenses" />
        <p className="text-sm text-gray-500">
            A visual representation of expenses over time
        </p>
    </div>
  )
}

export default Expenses