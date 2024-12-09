export type CreateRecipeDto = {
  name: string;
  methods: string;
  servings: number;
  cookingTime: number;
  dietType: string;
  createdById: number;
};
