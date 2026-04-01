import { WeekDay } from "../generated/prisma/enums.js";

interface Dto {
  userId: string;
  name: string;
  workoutDays: Array<{
    name: string;
    weekDay: WeekDay;
    isRest: boolean;
    estimatedDurationInSeconds: number;
    exercises: Array{
      order: number;
      name: string;
      sets: number;
      reps: number;
      restTimeInSeconds: number;
}}>;
  }>;

class CreateWorkoutPlan {
  async execute(dto) {}
}
