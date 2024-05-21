import { getAllRecipes } from "@/utils/getAllRecipes";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const RecipeListPage = async () => {
  const recipes = await getAllRecipes();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold border-l-4 border-gray-500 pl-1 mt-10 mb-8 mx-3 lg:mx-0">Recipes</h1>
      </div>
      <div className="grid mx-3 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
        {recipes?.map((recipe) => {
          return (
            <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
              <Card>
                <CardContent>
                  <div className="w-full">
                    <Image src={recipe.image} alt="recipe" width={400} height={50}></Image>
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
