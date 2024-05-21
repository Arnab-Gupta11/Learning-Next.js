import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getRecipeDetails } from "@/utils/getRecipeDetails";
import Image from "next/image";

const RecipeDetailsPage = async ({ params }) => {
  //   console.log(params);
  const details = await getRecipeDetails(params.details);
  console.log("🚀 ~ RecipeDetailsPage ~ details:", details);
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div>
        <h1 className="text-3xl font-bold border-l-4 border-gray-500 pl-1 mt-10 mb-8 mx-3 lg:mx-0">Details</h1>
      </div>
      <div className="grid grid-cols-1 mx-3 lg:mx-0 lg:grid-cols-2 gap-3">
        <div>
          <Image className="object-cover rounded-md" src={details.image} alt="recipe-image" width={600} height={300} />
        </div>
        <div>
          <Card className="border-none">
            <CardContent className="space-y-2">
              <CardTitle className="mb-2">{details.name}</CardTitle>
              <span className="text-lg text-gray-600 font-bold bg-slate-200 px-3 py-1 rounded-md">{details.cuisine}</span>
              <p className="text-base text-gray-600 font-medium">Rating: {details.rating}</p>
              <p className="text-lg text-gray-600 font-semibold"> Ingredients:</p>
              <div>
                {details.ingredients?.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </div>
              <p className="text-lg text-gray-600 font-semibold"> Instructions:</p>
              <div>
                {details.instructions?.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
