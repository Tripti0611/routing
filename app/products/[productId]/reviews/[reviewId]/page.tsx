import { notFound } from "next/navigation";
export default function ReviewDetails( {
    params,
} : {
    params : {
        productId: string;
        reviewId: string;
    };
}) {
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (
      <div><h1>
        Review   {params.reviewId} for  products  {params.productId}</h1></div>
    );
  }