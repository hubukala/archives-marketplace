import ProductCard from "../components/ProductCard";

function MappingArray (arr) {
  return (
    arr.map(item => 
      <ProductCard
        key={item.id}
        image={item.image}
        title={item.title}
        size={item.size}
        price={item.price}
        id={item.id}
        category={item.category}
      />
    )
  )
}

export default MappingArray;