export default function ProductDetails( {params} : {params : {productId: string}}) {
    return (
      <div><h1>Details about  products {params.productId}</h1></div>
    );
  }