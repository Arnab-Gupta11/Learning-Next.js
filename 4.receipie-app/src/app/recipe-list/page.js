import { getAllRecipes } from "@/utils/getAllRecipes";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const RecipeListPage = async () => {
  const recipes = await getAllRecipes();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold border-l-4 border-gray-500 pl-1 mt-10 mb-8 mx-3 lg:mx-0">Recipes</h1>
        <div>
          <Link href={"/"} className="bg-black text-white px-4 py-2 rounded-md mx-auto">
            Go back
          </Link>
        </div>
      </div>
      <div className="grid mx-3 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
        {recipes?.map((recipe) => {
          return (
            <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
              <Card className="rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                <CardContent>
                  <div className="py-5 rounded-md">
                    <Image className="rounded-md object-cover object-bottom" src={recipe.image} alt="recipe" width={450} height={50}></Image>
                  </div>
                  <div className="p-6">
                    <div className="ml-auto">
                      <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                    <div className="mt-4 flex items-center flex-wrap gap-2">
                      <p className="text-base text-gray-600 font-medium">Rating: {recipe.rating}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeListPage;
