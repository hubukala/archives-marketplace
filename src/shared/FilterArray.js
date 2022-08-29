function FilterArray (cat, arr) {
    if (cat === "All") {
        return(arr)
    } else if (cat !== "All") {
        const newArray = arr.filter(e => e.category === cat);
        return(newArray)
    }
}

export default FilterArray;